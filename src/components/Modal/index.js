import {
  createContext,
  useState,
  useContext,
  cloneElement,
  useEffect,
} from "react";
import { GoX } from "react-icons/go";

import { Dialog } from "../../utils/styles";
import "@reach/dialog/styles.css";

const ModalContext = createContext();

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { onHide } = props;

  useEffect(() => {
    if (onHide) {
      setIsOpen(false);
    }
  }, [onHide]);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalButton({ children }) {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      setIsOpen(true);
      if (children.props.onClick) {
        children.props.onClick();
      }
    },
  });
}

function ModalDismissButton({ children }) {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(children, { onClick: () => setIsOpen(false) });
}

function ModalContent({ title, children, ...props }) {
  const [isOpen, setIsOpen] = useContext(ModalContext);
  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props}>
      <ModalDismissButton>
        <button className="close-modal">
          <GoX />
        </button>
      </ModalDismissButton>
      <h3 className="modal-title">{title}</h3>
      {children}
    </Dialog>
  );
}

export { Modal, ModalButton, ModalContent };
