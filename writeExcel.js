const XLSX = require('xlsx');

const writeToExcel = (artworks) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(artworks);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Artworks');
  XLSX.writeFile(workbook, 'Artworks.xlsx');
};

module.exports = { writeToExcel };
