const fs = require('fs-extra');
const path = require('path');

const baseDir = __dirname;

const folderDir1 = path.join(baseDir, 'Folder1');
fs.ensureDirSync(folderDir1);

const fileDir1 = path.join(folderDir1, 'text1.txt');
fs.ensureFileSync(fileDir1);

const folderDir2 = path.join(baseDir, 'Folder2');
fs.ensureDirSync(folderDir2);

fs.moveSync(fileDir1, path.join(folderDir2, 'text1.txt'));

const folderDir3 = path.join(baseDir, 'Folder3');
fs.ensureDirSync(folderDir3);

fs.copySync(path.join(folderDir2, 'text1.txt'), path.join(folderDir3, 'text1.txt'));

fs.removeSync(path.join(folderDir2, 'text1.txt'));
fs.removeSync(path.join(folderDir3, 'text1.txt'));

fs.removeSync(folderDir1);
fs.removeSync(folderDir2);
fs.removeSync(folderDir3);