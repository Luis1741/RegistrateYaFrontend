import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Employee {
  id: number;
  nombre: string;
  documento: string;
  rol: string;
}

interface CreateEmployeeModalProps {
  show: boolean;
  employee: Employee;
  onClose: () => void;
  onCreate: () => void;
  setEmployee: (employee: Employee) => void;
}

const CreateEmployeeModal: React.FC<CreateEmployeeModalProps> = ({ show, employee, onClose, onCreate, setEmployee }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNewEmployeeName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={employee.nombre}
              onChange={(e) => setEmployee({ ...employee, nombre: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formNewEmployeeDocument">
            <Form.Label>Documento</Form.Label>
            <Form.Control
              type="text"
              value={employee.documento}
              onChange={(e) => setEmployee({ ...employee, documento: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formNewEmployeeRole">
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
        <Button variant="primary" onClick={onCreate}>
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateEmployeeModal;