const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');

const dataFilePath = path.join(__dirname, 'Job_dataset.json');
const readmeFilePath = path.join(__dirname, 'README.md');

// Read JSON data
const data = jsonfile.readFileSync(dataFilePath);

// Generate README content
const generateReadmeContent = (data) => {
    let readmeContent = `# Ing. Tomas Vlachopulos - Professional CV

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
It maps my career progress, goals and focus.
There are other repositories which includes project related to my hobby - bikes!
All Bike fans feel free to check it out - #BikeForge.

## Education

- **VSB-Technical University Ostrava (2013-2019)**
  - Master of Material Engineering
- **Shenyang Aerospace University China (2018-2019)**
  - Aeronautical Engineering
- **Dongguk University Korea (2016-2017)**
  - Material Science and Engineering
`;

    // Work Experience
    readmeContent += `## Work Experience\n\n`;
    data['Work Experience'].forEach(job => {
        readmeContent += `### ${job.Company}\n`;
        readmeContent += `**Position:** ${job.Position}\n\n`;
        readmeContent += `**Duration:** ${job.Duration}\n\n`;
        readmeContent += `**Responsibilities:**\n`;
        job.Responsibilities.forEach(responsibility => {
            readmeContent += `- ${responsibility}\n`;
        });
        readmeContent += `\n`;
    });

    // Certifications
    readmeContent += `## Certifications\n\n`;
    data.Certifications.forEach(certificate => {
        readmeContent += `- ${certificate}\n`;
    });
    readmeContent += `\n`;

    // Skills
    readmeContent += `## Skills\n\n`;
    readmeContent += `### Software Skills\n`;
    data.Skills['Software Skills'].forEach(swskill => {
        readmeContent += `- ${swskill}\n`;
    });
    readmeContent += `\n`;
    readmeContent += `### Soft Skills\n`;
    data.Skills['Soft Skills'].forEach(softskill => {
        readmeContent += `- ${softskill}\n`;
    });
    readmeContent += `\n`;

    // Languages
    readmeContent += `## Languages\n\n`;
    data.Languages.forEach(language => {
        readmeContent += `- ${language}\n`;
    });
    
    // Add Contact, Usage, Contributing, and License sections
    readmeContent += `
## Contact

- **Location:** Prague 4
- **Email:** [mr.tomas.vlachopulos@gmail.com](mailto:mr.tomas.vlachopulos@gmail.com)
- **LinkedIn:** <a href="https://www.linkedin.com/in/tomas-vlachopulos/" target="_blank">Tomas Vlachopulos</a>

## Usage

To view the CV, simply visit the GitHub Pages URL: <a href="https://forgeb.github.io/CV/" target="_blank">https://forgeb.github.io/CV/</a>

## Contributing

If you have suggestions or improvements, feel free to open an issue or create a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`;

    return readmeContent;
};

// Generate content from JSON data
const readmeContent = generateReadmeContent(data);

// Write to README.md
fs.writeFileSync(readmeFilePath, readmeContent, 'utf-8');

console.log('README.md updated successfully!');
