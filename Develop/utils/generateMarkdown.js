// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License MIT](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ${renderLicenseBadge(data.license)}
  

## Description
   ${(data.description)}
  
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
   
   
## Installation
<a name="installation"></a>
  ${(data.installation)}


## Usage
<a name="usage"></a>
  ${(data.usage)}


## Credits
  ${(data.credits)}


## License
<a name="license"></a>
  ${(data.license)}
  
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
