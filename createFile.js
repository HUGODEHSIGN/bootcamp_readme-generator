import generateReadMe from './generateReadMe.js';
import { mkdir } from 'fs';
import { writeFile } from 'fs';

export default function createFile(data) {
  // first create a new folder to house the readme
  mkdir(`./readme/${data.name}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  // write file
  writeFile(`./readme/${data.name}/README.md`, generateReadMe(data), (err) => {
    if (err) throw err;
  });
}
