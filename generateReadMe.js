import { licenseLookup } from './licenseLookup.js';
export default function generateReadMe({
  name,
  description,
  installation,
  usage,
  credits,
  license,
  contribute,
  tests,
}) {
  const badge = licenseLookup.filter(({ name }) => name === license)[0].badge;

  return `${license !== 'None' ? badge + '\n\n' : ''}# ${name}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
bid
${description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits.length !== 0 ? credits : 'N/A'}

## License

${license !== 'None' ? `This project uses the ${license}.` : 'N/A'}

---

## How to Contribute

${contribute.length !== 0 ? contribute : 'N/A'}

## Tests

${tests.length !== 0 ? tests : 'N/A'}`;
}
