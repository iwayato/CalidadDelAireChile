import jsPDF from "jspdf";
import "jspdf-autotable";
import { unitSelectorPDF } from './unitSelectorPDF.js'
import { parameterTextConverter } from './parameterTextConverter.js'

const PDFRender = (props) => {

    const doc = new jsPDF();
    const tableColumn = ["Estación", "Parámetro", "Fecha", "Estado", "Valor", "Unidad"];
    const tableRows = [];

    for (let station of props.data) {
        for (let sensor of station.realtime) {
            const row = [
                station.nombre, 
                parameterTextConverter(sensor.tableRow.parameter), 
                sensor.tableRow.datetime, 
                sensor.tableRow.status, 
                sensor.tableRow.value,
                unitSelectorPDF(sensor.tableRow.parameter)
            ];
            tableRows.push(row);
        }
    }

      doc.autoTable(tableColumn, tableRows, { startY: 10, theme: 'grid' });
      const date = Date().split(" ");
      const dateStr = date[0] + "_" + date[1] + "_" + date[2] + "_" + date[3];
      doc.text(" ", 14, 15);
      doc.save(`report_${dateStr}.pdf`);

};

export default PDFRender;