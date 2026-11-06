import { useState } from "react";
import Modal from "./Modal";

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ marginBottom: "300px" }}>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h1>saha</h1>
          <p>ami jewel</p>
        </div>
      </Modal>
    </div>
  );
}
