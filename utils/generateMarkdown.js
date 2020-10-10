function generateMarkdown(data) {
  return `
# ${data.title}

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Description
  ${data.desciption}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${data.license} License

## Contributing
  ${data.contributors}

## Tests
  ${data.tests}

## Questions
  ${data.questions} <br />
  ![User Profile Image](https://github.com/${data.username}.png)
  ${data.email}
  
  
`;
}

module.exports = generateMarkdown;
