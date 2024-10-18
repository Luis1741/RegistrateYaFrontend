import React, { useState, useEffect, CSSProperties } from 'react';
import Select, { SingleValue } from 'react-select';
import './Reports.css'; // Importa el archivo CSS
import { fetchRecordOptions, RecordOption, generateReport } from './../../../services/ReportsService';
import { generateExcel } from './../../../util/GenerateExcel';

const groupStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles: CSSProperties = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = (data: any) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const Reports: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recordType, setRecordType] = useState<RecordOption | null>(null);
  const [recordOptions, setRecordOptions] = useState<RecordOption[]>([]);

  useEffect(() => {
    const loadRecordOptions = async () => {
      try {
        const options = await fetchRecordOptions();
        setRecordOptions(options);
        setRecordType(options[0] || null);
      } catch (error) {
        console.error('Error al cargar las opciones de registro:', error);
      }
    };

    loadRecordOptions();
  }, []);

  const handleGenerate = async () => {
    try {
      if (startDate && endDate && recordType) {
        const reportData = await generateReport(startDate, endDate, recordType.value);
        generateExcel(reportData);
        console.log('Reporte generado:', reportData);
      } else {
        console.error('Por favor, completa todos los campos');
      }
    } catch (error) {
      console.error('Error al generar el reporte:', error);
    }
  };

  return (
    <div className="container text-center mt-5 reports-container">
      <h1 className="reports-title">Generar Reporte</h1>
      <form>
        <div className="form-group">
          <label htmlFor="startDate">Fecha inicial</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Fecha Final</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="recordType">Tipo de registro</label>
          <Select
            id="recordType"
            value={recordType}
            onChange={(selectedOption) => setRecordType(selectedOption as SingleValue<RecordOption> | null)}
            options={recordOptions}
            formatGroupLabel={formatGroupLabel}
            className="form-control p-0"
          />
        </div>
        <button type="button" onClick={handleGenerate} className="btn btn-primary">
          Generar
        </button>
      </form>
    </div>
  );
};

export default Reports;