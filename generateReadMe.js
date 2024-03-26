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
  return `${license}

# ${name}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

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

${credits}

## License

This project uses the ${license} license.

---

## How to Contribute

${contribute}

## Tests

${tests}`;
}
