import * as XLSX from 'xlsx';
import { Report } from '../services/ReportsService';

export const generateExcel = (data: Report[]) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte');

  // Generar el archivo Excel
  XLSX.writeFile(workbook, 'reporte.xlsx');
};