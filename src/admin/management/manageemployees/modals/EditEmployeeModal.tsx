import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Employee {
  id: number;
  nombre: string;
  documento: string;
  rol: string;
}

interface EditEmployeeModalProps {
  show: boolean;
  employee: Employee | null;
  onClose: () => void;
  onSave: (employee: Employee) => void;
  setEmployee: (employee: Employee) => void;
}

const EditEmployeeModal: React.FC<EditEmployeeModalProps> = ({ show, employee, onClose, onSave, setEmployee }) => {
  if (!employee) return null;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar Empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formEmployeeId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" value={employee.id} readOnly />
          </Form.Group>
          <Form.Group controlId="formEmployeeName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={employee.nombre}
              onChange={(e) => setEmployee({ ...employee, nombre: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formEmployeeDocument">
            <Form.Label>Documento</Form.Label>
            <Form.Control
              type="text"
              value={employee.documento}
              onChange={(e) => setEmployee({ ...employee, documento: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formEmployeeRole">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              type="text"
              value={employee.rol}
              onChange={(e) => setEmployee({ ...employee, rol: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => onSave(employee)}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditEmployeeModal;