import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Employee {
  id: number;
  nombre: string;
  documento: string;
  rol: string;
}

interface DeleteEmployeeModalProps {
  show: boolean;
  employee: Employee | null;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteEmployeeModal: React.FC<DeleteEmployeeModalProps> = ({ show, employee, onClose, onDelete }) => {
  if (!employee) return null;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas eliminar el registro de {employee.nombre}?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteEmployeeModal;