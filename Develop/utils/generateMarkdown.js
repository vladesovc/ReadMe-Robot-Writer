// TODO: Create a function that returns a license badge, link, and section based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License MIT](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License Apache](https://img.shields.io/badge/License-Apache-yellow)](http://www.apache.org/licenses/)`;
  } else if (license === "None") {
    return `''`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === "Apache") {
    return `[Apache License](http://www.apache.org/licenses/LICENSE-2.0)`;
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license === "Apache") {
    return `This project is licensed under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0)`;
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  

## Description
   ${data.description}
  
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
   
   
## Installation
<a name="installation"></a>
  ${data.installation}


## Usage
<a name="usage"></a>
  ${data.usage}


## Credits
  ${data.credits}


## License
<a name="license"></a>
  ${data.license}
  
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
