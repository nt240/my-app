const fs = require('fs');
const path = require('path');

// パスを書き換えるディレクトリを指定します。
const directoryPath = path.join(__dirname, '../out');

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 

  // ディレクトリ内のすべてのファイルを処理します。
  files.forEach(function (file) {
    const filePath = path.join(directoryPath, file);

    // エントリがファイルであることを確認します。
    if (fs.statSync(filePath).isFile()) {
      // ファイルの内容を読み込みます。
      let content = fs.readFileSync(filePath, 'utf8');

      // パスを書き換えます。
      content = content.replace('/vercel.svg', '/my-app/vercel.svg');
      content = content.replace('/next.svg', '/my-app/next.svg');

      // ファイルに書き込みます。
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
});