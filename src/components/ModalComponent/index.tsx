import Modal from "react-modal";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}: NewTransactionModalProps) {


    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        // overlayClassName="react-modal-overlay"
        // className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
            Fechar
        </button>
      </Modal>
    )
}