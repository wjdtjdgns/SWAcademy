import Select from "../components/Select/Select";

export default {
  title: "Component/Select",
  component: Select,
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text",
    },
    placeholder: {
      defaultValue: "Placeholder",
      control: "text",
    },
    block: {
      defaultValue: false,
      control: "boolean",
    },
    invalid: {
      defaultValue: false,
      control: "boolean",
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
    required: {
      defaultValue: false,
      control: "boolean",
    },
  },
};

export const Default = (args) => (
  <Select
    data={["Item1", "Item2", { label: "Item3", value: "value" }]}
    {...args}
  />
);
