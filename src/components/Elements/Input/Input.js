const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="border p-2 w-full mb-2"
      id={name}
    />
  );
};

export default Input;
