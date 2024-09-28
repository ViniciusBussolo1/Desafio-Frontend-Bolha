import "./style.css";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export function Modal({ isModalOpen, setIsModalOpen }: ModalProps) {
  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h1>dsadasd</h1>
          </div>
        </div>
      )}
    </>
  );
}
