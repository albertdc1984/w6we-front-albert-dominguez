const Button = ({ text, actionOnClick, className }) => {
  return (
    <button className={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
