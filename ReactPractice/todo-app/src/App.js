import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import styled from "@emotion/styled";
import TaskProvider from "./contexts/TaskProvider";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

function App() {
  return (
    <TaskProvider>
      <Container>
        <Header>Todo</Header>
        <NewTaskForm />
        <TaskList css={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  );
}

export default App;
