
interface ButtonProps {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (e: any) => void;
}

export const OutlinedButton = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button className="outlinedButton" type={type} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
