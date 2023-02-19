import styled from "@emotion/styled";
import Task from "./Task";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const TaskList = (props) => {
  return (
    <UnorderedList {...props}>
      <Task content="Test" />
      <Task content="Test" />
      <Task content="Test" />
    </UnorderedList>
  );
};

export default TaskList;
