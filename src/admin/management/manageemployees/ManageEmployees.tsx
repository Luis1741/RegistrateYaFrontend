import React, { useEffect, useState } from 'react';
import { getEmployees } from '../../../services/EmployeeService';
import { updateEmployee, deleteEmployee, createEmployee } from '../../../services/EmployeeService';
import './ManageEmployees.css';
import EditEmployeeModal from './modals/EditEmployeeModal';
import DeleteEmployeeModal from './modals/DeleteEmployeeModal';
import CreateEmployeeModal from './modals/CreateEmployeeModal';

interface Employee {
  id: number;
  nombre: string;
  documento: string;
  rol: string;
}

const ManageEmployees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Employee>({ id: 0, nombre: '', documento: '', rol: '' });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error al obtener los empleados:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleShowModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEmployee(null);
  };

  const handleSaveChanges = async (employee: Employee) => {
    try {
      await updateEmployee(employee);
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.id === employee.id ? employee : emp
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error('Error al actualizar el empleado:', error);
    }
  };

  const handleShowDeleteModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = async () => {
    if (selectedEmployee) {
      try {
        await deleteEmployee(selectedEmployee.id);
        setEmployees((prevEmployees) =>
          prevEmployees.filter((emp) => emp.id !== selectedEmployee.id)
        );
        setShowDeleteModal(false);
      } catch (error) {
        console.error('Error al eliminar el empleado:', error);
      }
    }
  };

  const handleCreateEmployee = async () => {
    try {
      const createdEmployee = await createEmployee(newEmployee);
      setEmployees((prevEmployees) => [...prevEmployees, createdEmployee]);
      setShowCreateModal(false);
    } catch (error) {
      console.error('Error al crear el empleado:', error);
    }
  };

  const filteredEmployees = employees.filter(employee =>
    employee.nombre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container text-center mt-5 management-employees-container">
      <h1 className="management-employees-title">Panel de Administración</h1>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>Crear</button>
        <input
          type="text"
          className="form-control w-25"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.nombre}</td>
              <td>{employee.documento}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleShowModal(employee)}>
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleShowDeleteModal(employee)}>
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditEmployeeModal
        show={showModal}
        employee={selectedEmployee}
        onClose={handleCloseModal}
        onSave={handleSaveChanges}
        setEmployee={setSelectedEmployee}
      />

      <DeleteEmployeeModal
        show={showDeleteModal}
        employee={selectedEmployee}
        onClose={handleCloseDeleteModal}
        onDelete={handleDeleteEmployee}
      />

      <CreateEmployeeModal
        show={showCreateModal}
        employee={newEmployee}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateEmployee}
        setEmployee={setNewEmployee}
      />
    </div>
  );
};

export default ManageEmployees;