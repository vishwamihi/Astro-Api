import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const getFolderNames = (rootDir) => {
  return readdirSync(rootDir).filter(file => 
    statSync(join(rootDir, file)).isDirectory()
  );
};

const getFilesFromFolders = (rootDir) => {
  const folders = getFolderNames(rootDir);
  const folderFiles = {};

  folders.forEach(folder => {
    const folderPath = join(rootDir, folder);
    const files = readdirSync(folderPath).filter(file => 
      statSync(join(folderPath, file)).isFile()
    );
    folderFiles[folder] = files;
  });

  return folderFiles;
};

// Example usage
const rootDir = process.cwd(); // Replace with your root directory path if needed
const filesFromFolders = getFilesFromFolders(rootDir);

console.log(filesFromFolders);
