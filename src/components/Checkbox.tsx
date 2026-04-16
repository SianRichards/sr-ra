import { Checkbox, Field, Label } from "@headlessui/react";

const CheckBox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  return (
    <Field className="flex items-center gap-2">
      <Checkbox
        checked={checked}
        onChange={onChange}
        className="group block size-4 rounded border bg-yellow-200 data-checked:bg-teal-700 cursor-pointer"
      >
        <svg
          className="stroke-white opacity-0 group-data-checked:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>
      <Label>{label}</Label>
    </Field>
  );
};

export default CheckBox;
