import { Button as HeadlessUIButton } from "@headlessui/react";
import clsx from "clsx";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: Props) => {
  return (
    <HeadlessUIButton
      className={clsx(
        "bg-yellow-200 text-teal-800 font-semibold px-3 py-1 rounded-md cursor-pointer",
        "hover:bg-yellow-300 transition",
        className,
      )}
      {...props}
    >
      {children}
    </HeadlessUIButton>
  );
};

export default Button;
