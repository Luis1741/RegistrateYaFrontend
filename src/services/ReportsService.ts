const API_URL = 'https://run.mocky.io/v3/68f4bb92-4b62-4880-99b7-82ab0d427622'; // Reemplaza con la URL de tu API
const REPORT_API_URL = 'https://run.mocky.io/v3/c335d66c-d16d-472c-b446-0f73d1bde129'; // Reemplaza con la URL generada por Mocky.io

export interface RecordOption {
  value: string;
  label: string;
}

export interface Report {
    id: number;
    nombre: string;
    documento: string;
    rol: string;
    fechaInicial: string;
    fechaFinal: string;
    tipoNovedad: string;
  }
  

export const fetchRecordOptions = async (): Promise<RecordOption[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al obtener las opciones de registro');
  }
  console.log("🚀 ~ fetchRecordOptions ~ response.ok:", response.ok)
  const data = await response.json();
  return data.map((item: any) => ({
    value: item.value,
    label: item.label,
  }));
};

export const generateReport = async (startDate: string, endDate: string, recordType: string): Promise<Report[]> => {
    const response = await fetch(REPORT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ startDate, endDate, recordType }),
    });
  
    if (!response.ok) {
      throw new Error('Error al generar el reporte');
    }
  
    const data = await response.json();
    return data;
  };