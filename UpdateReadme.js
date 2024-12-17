const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');

const dataFilePath = path.join(__dirname, 'Job_dataset.json');
const readmeFilePath = path.join(__dirname, 'README.md');

// Read JSON data
const data = jsonfile.readFileSync(dataFilePath);

// Generate README content
const generateReadmeContent = (data) => {
    let readmeContent = `# CV of Tomas Vlachopulos\n\n`;

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
    
    readmeContent += `\n`;
    `## Contact

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
    `
    return readmeContent;
};

// Generate content from JSON data
const readmeContent = generateReadmeContent(data);

// Write to README.md
fs.writeFileSync(readmeFilePath, readmeContent, 'utf-8');

console.log('README.md updated successfully!');
