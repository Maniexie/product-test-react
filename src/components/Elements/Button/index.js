const Button = (props) => {
  const { type, variant = "bg-slate-700", children = "...", onClick } = props;
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold ${variant} rounded-md text-white`}
      // onClick={() => {
      //   onClick();
      // }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
