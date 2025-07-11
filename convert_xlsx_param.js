const xlsx = require('xlsx');
const path = require('path');

// コマンドライン引数からファイルパスを取得
const inputFile = process.argv[2];

if (!inputFile) {
  console.error('❌ ファイルパスを指定してください。\n使い方: node convertExcelToJson.js <file.xlsx>');
  process.exit(1);
}

try {
  // ファイルを読み込み
  const workbook = xlsx.readFile(path.resolve(inputFile));
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // シートをJSON配列に変換
  const data = xlsx.utils.sheet_to_json(sheet);
  const result = {};

  data.forEach(row => {
    const key = row['key'];
    if (!key) return;

    const entry = {};
    Object.keys(row).forEach(col => {
      if (col === 'key') return;
      const value = row[col];
      if (value !== null && value !== undefined && value !== '') {
        entry[col] = value;
      }
    });

    result[key] = entry;
  });

  // 結果を出力
  console.log(JSON.stringify(result, null, 2));

} catch (err) {
  console.error('❌ ファイルの読み込みに失敗しました:', err.message);
  process.exit(1);
}
