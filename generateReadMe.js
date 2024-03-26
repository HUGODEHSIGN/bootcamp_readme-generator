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

${description}

## Table of Contents

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
