import { useState } from "react";
import Progress from "../components/Progress/Progress";

export default {
  title: "Component/Progress",
  component: Progress,
};

export const Default = () => {
  const [value, setValue] = useState(20);
  return (
    <div>
      <button onClick={() => setValue(100)}>change Value</button>
      <Progress value={value} />
    </div>
  );
};
