const API_URL = 'https://run.mocky.io/v3/360a7111-159d-4ce3-a8f3-f3ef39cee285'; // Reemplaza con la URL de tu API
const API_URL_1 = 'https://run.mocky.io/v3/527dbaf1-08b4-4c76-8e1d-e3d8d52fe754'; // Reemplaza con la URL de tu API
const API_URL_2 = 'https://run.mocky.io/v3/2d8aa62b-3ad7-4658-b5a1-a3e24226945d'; // Reemplaza con la URL de tu API
const API_URL_3 = 'https://run.mocky.io/v3/2d8aa62b-3ad7-4658-b5a1-a3e24226945d'; // Reemplaza con la URL de tu API

export const getEmployees = async () => {
  const response = await fetch(`${API_URL}/employees`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log("🚀 ~ getEmployees ~ response:", response)
    
  if (!response.ok) {
    throw new Error('Error al obtener los empleados');
  }

  return response.json();
};


export const updateEmployee = async (employee: { id: number; nombre: string; documento: string; rol: string }) => {
  const response = await fetch(`${API_URL_1}/employees/${employee.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });

  console.log("🚀 ~ updateEmployee ~ response.ok:", response.ok)
    
  if (!response.ok) {
    throw new Error('Error al actualizar el empleado');
  }

  return response.json();
};


export const deleteEmployee = async (id: number) => {
    const response = await fetch(`${API_URL_2}/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("🚀 ~ deleteEmployee ~ response.ok:", response.ok)
  
    if (!response.ok) {
      throw new Error('Error al eliminar el empleado');
    }
  
    return response.json();
};
  
export const createEmployee = async (employee: { nombre: string; documento: string; rol: string }) => {
  console.log("🚀 ~ createEmployee ~ employee:", employee)
  const response = await fetch(`${API_URL_3}/employees`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });

  console.log("🚀 ~ createEmployee ~ response.ok:", response.ok)

  if (!response.ok) {
    throw new Error('Error al crear el empleado');
  }

  return response.json();
};