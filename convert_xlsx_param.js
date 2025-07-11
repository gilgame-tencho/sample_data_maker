const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

// ファイルパスをコマンドライン引数から取得
const inputFile = process.argv[2];

if (!inputFile) {
  console.error('❌ ファイルパスを指定してください。\n使い方: node convertExcelToJson.js <file.xlsx>');
  process.exit(1);
}

if (!fs.existsSync(inputFile)) {
  console.error('❌ 指定されたファイルが存在しません:', inputFile);
  process.exit(1);
}

async function convertExcelToJson(filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.worksheets[0]; // 最初のシートを使用
  const result = {};

  const header = [];
  worksheet.eachRow((row, rowNumber) => {
    const values = row.values.slice(1); // 先頭はnullなので無視

    if (rowNumber === 1) {
      // ヘッダー行
      values.forEach((cell, idx) => {
        header[idx] = String(cell).trim();
      });
    } else {
      const rowObj = {};
      let keyValue = null;

      values.forEach((cell, idx) => {
        const colName = header[idx];
        if (!colName) return;

        const value = cell;
        if (colName === 'key') {
          keyValue = String(value).trim();
        } else if (value !== null && value !== undefined && value !== '') {
          rowObj[colName] = value;
        }
      });

      if (keyValue) {
        result[keyValue] = rowObj;
      }
    }
  });

  console.log(JSON.stringify(result, null, 2));
}

convertExcelToJson(inputFile).catch(err => {
  console.error('❌ エラーが発生しました:', err.message);
  process.exit(1);
});