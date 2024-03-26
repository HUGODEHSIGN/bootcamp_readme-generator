import generateReadMe from './generateReadMe.js';
import { mkdir } from 'fs/promises';
import { writeFile } from 'fs/promises';

export default async function createFile(data) {
  // first create a new folder to house the readme
  await mkdir(`./readme/${data.name}`, { recursive: true }, (err) => {
    if (err) throw err;
  });
  console.log('Folder has been created');
  // write file
  await writeFile(
    `./readme/${data.name}/README.md`,
    generateReadMe(data),
    (err) => {
      if (err) throw err;
    }
  );
  console.log('File has been written');
  console.log(
    `Please find the new readme under './readme/${data.name}/README.md'`
  );
}
