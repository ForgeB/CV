// This is a script which updates README.md file from JSON file where new info is recorded //

const fs = require('fs');
const path = require('path');

// Load JSON data //
const data = require('./Job_dataset_Siemens.json');

// Generate README content //
const readmeContent = `# Ing. Tomas Vlachopulos - Professional CV

Welcome to the repository for my professional CV. This project showcases my experience, education, certifications, skills, and contact information in a clean, HTML format. The CV is hosted on GitHub Pages for easy access and sharing.

## Table of Contents

- [About](#about)
- [Education](#education)
- [Work Experience](#work-experience)
- [Certifications](#certifications)
- [Skills](#skills)
- [Languages](#languages)
- [Contact](#contact)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

This repository contains the source information for my professional CV, including HTML, CSS and flavour of JavaScript. The CV is designed to be easily readable and accessible, with focus on clarity and structure.
It maps my carrier progress, goals and focus.
There are other repositories which includes project related to my hoby - bikes!
All Bike fans feel free to check it out - #BikeForge.

## Education

- **VSB-Technical University Ostrava (2013-2019)**
  - Master of Material Engineering
- **Shenyang Aerospace University China (2018-2019)**
  - Aeronautical Engineering
- **Dongguk University Korea (2016-2017)**
  - Material Science and Engineering

## Work Experience
${data["Work Experience"].map(job => `
- **${job.Company} (${job.Duration})**
  - ${job.Position}
  ${job.Responsibilities.map(res => `
  - ${res}`).join('')}
`).join('')}

## Certifications
${data.Certifications.map(cert => `- ${cert}`).join('\n')}

## Skills

### Software Skills:
${data.Skills['Software Skills'].map(skill => `- ${skill}`).join('\n')}

### Soft Skills:
${data.Skills['Soft Skills'].map(skill => `- ${skill}`).join('\n')}

## Languages
${data.Languages.map(lang => `- ${lang}`).join('\n')}

## Contact

- **Location:** Prague 4
- **Phone:** [+420 736707496](tel:+420736707496)
- **Email:** [tom1en@seznam.cz](mailto:tom1en@seznam.cz) [mr.tomas.vlachopulos@gmail.com
](mailto:mr.tomas.vlachopulos@gmail.com
)
- **LinkedIn:** [Tomas Vlachopulos](https://www.linkedin.com/in/tomas-vlachopulos/)

## Usage

To view the CV, simply visit the GitHub Pages URL: [https://forgeb.github.io/CV/](https://forgeb.github.io/CV/)

## Contributing

If you have suggestions or improvements, feel free to open an issue or create a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`;

// Write README.md to file //
fs.writeFileSync(path.join(__dirname, 'README.md'), readmeContent);

console.log('README.md generated successfully.');
