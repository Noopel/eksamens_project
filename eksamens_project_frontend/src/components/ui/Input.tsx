interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  const className = "border-b-2 py-3 px-1 bg-transparent";

  return <input {...props} className={`${className} ${props.className}`} />;
};

export default Input;
