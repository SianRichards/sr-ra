import { Button as HeadlessUIButton } from "@headlessui/react";

const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <HeadlessUIButton
      className="bg-yellow-200 text-teal-800 px-2 rounded-md cursor-pointer"
      onClick={onClick}
    >
      {label}
    </HeadlessUIButton>
  );
};

export default Button;
