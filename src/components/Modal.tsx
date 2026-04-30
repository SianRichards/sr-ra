import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "./Button";
import Divider from "./Divider";

type ModalProps = {
  title: string;
  description: string;
  onClose: () => void;
};

const Modal = ({ title, description, onClose }: ModalProps) => {
  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-gray-100/90 w-auto h-auto max-w-1/3 p-3 rounded-md">
          <DialogPanel>
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <Divider />
            <Description className="my-2 text-justify">
              {description}
            </Description>
            <Button label="Close" onClick={onClose} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
