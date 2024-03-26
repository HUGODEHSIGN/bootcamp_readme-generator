// import { mkdir } from 'node:fs';

// mkdir('./readme/test-1', { recursive: true }, (err) => {
//   if (err) throw err;
// });

import { licenseLookup } from './licenseLookup.js';

const licenseNames = licenseLookup.map(({ name }) => name);
console.log(licenseNames);

import inquirer from 'inquirer';
inquirer
  .prompt([
    {
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      name: 'description',
      message:
        'Write a short description here. Mention motivations, why build this project, problems it solves, and what you learned.',
    },
    {
      name: 'installation',
      message:
        'How do you install the project? Please give detailed step by step instructions.',
    },
    {
      name: 'usage',
      message: 'Provide clear instructions on usage.',
    },
    {
      name: 'credits',
      message:
        'Provide any collaborators, third party assets, or tutorials you followed for the project. (optional)',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you choose? (optional)',
      choices: licenseNames,
      loop: false,
    },
    {
      name: 'features',
      message: 'What features does your project have?',
    },
    {
      name: 'contribute',
      message: 'How do others contribute to this project? (optional)',
    },
    {
      name: 'tests',
      message: 'How do you run tests for your project? (optional)',
    },
  ])
  .then((answer) => {
    console.log(answer);
  });
