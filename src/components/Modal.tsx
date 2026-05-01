import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Divider from "./Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type ModalProps = {
  title: string;
  description: any;
  onClose: () => void;
};

const Modal = ({ title, description, onClose }: ModalProps) => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="relative z-50 text-yellow-200"
    >
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-teal-900/90 max-w-md w-full min-w-96 px-4 py-2 rounded-md border border-yellow-200">
          <DialogPanel>
            <div className="flex justify-between">
              <DialogTitle className="font-bold text-lg">{title}</DialogTitle>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={onClose}
                className="pl-2 py-1 cursor-pointer"
              />
            </div>

            <Divider />

            <Description className="my-2 text-justify">
              {description}
            </Description>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
