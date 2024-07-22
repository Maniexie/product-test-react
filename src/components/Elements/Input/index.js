import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { title, name, type, placeholder, classname } = props;
  return (
    <div>
      <Label htmlfor={name}>{title}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        classname={classname}
        // id={name}
      />
    </div>
  );
};

export default InputForm;
