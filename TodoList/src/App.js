import { request } from "./api.js";
import TodoList from "./TodoList.js";
import SyncTaskManager from "./SyncTaskManager.js";

export default function App({ $target }) {
  const tasks = new SyncTaskManager();
  this.state = {
    todos: [],
  };

  const incompletedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료되지 않은 일들",
      todos: [],
    },
    onDrop: async (todoId) => {
      const nextTodos = [...this.state.todos];
      const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

      nextTodos[todoIndex].isCompleted = false;
      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      // tasks.addTask(async () => {
      //   await request(`/${todoId}/toggle`, {
      //     method: "PUT",
      //   });
      // });

      tasks.addTask({
        url: `/${todoId}/toggle`,
        method: "PUT",
      });
    },
  });

  const completedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료된 일들",
      todos: [],
    },
    onDrop: async (todoId) => {
      const nextTodos = [...this.state.todos];
      const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

      nextTodos[todoIndex].isCompleted = true;
      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      // tasks.addTask(async () => {
      //   await request(`/${todoId}/toggle`, {
      //     method: "PUT",
      //   });
      // });

      tasks.addTask({
        url: `/${todoId}/toggle`,
        method: "PUT",
      });
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    const { todos } = this.state;

    incompletedTodoList.setState({
      ...incompletedTodoList.state,
      todos: todos.filter((todo) => !todo.isCompleted),
    });

    completedTodoList.setState({
      ...completedTodoList.state,
      todos: todos.filter((todo) => todo.isCompleted),
    });
  };

  const fetchTodos = async () => {
    const todos = await request("");

    this.setState({
      ...this.state,
      todos,
    });
  };

  fetchTodos();

  const $button = document.createElement("button");
  $button.textContent = "변경내용 동기화";
  $target.appendChild($button);

  $button.addEventListener("click", () => tasks.run());
}
