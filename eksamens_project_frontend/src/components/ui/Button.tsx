interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  rounded?: boolean;
}

const Button = (props: ButtonProps) => {
  const className = "text-white hover:text-black active:opacity-85 transition-colors font-bold py-4 px-8";

  return (
    <button {...props} className={`${props.className} ${className} ${props.rounded ? " rounded-full" : ""}`}>
      {props.text}
    </button>
  );
};

export default Button;
