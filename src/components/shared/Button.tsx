import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className="bg-orange-500 hover:bg-red-700 transition-400 text-slate-800 font-semibold
     hover:text-white py-2 px-8 hover:border-transparent rounded-full hover:animation-bounce"
    >
      {text}
    </button>
  );
};

export default Button;
