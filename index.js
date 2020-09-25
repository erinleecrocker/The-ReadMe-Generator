const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "Title",
        message: "What is your project title?"
    },
    {
        type:"input",
        name: "Description",
        message: "What is your project description?"
    },
    {
        type:"input",
        name: "Installation",
        message: "What are your installation instructions?"
    },
    {
        type:"input",
        name: "Usage",
        message: "What is your Usage Information?"
    },
    {
        type:"input",
        name: "Contribution",
        message: "What are your contribution guidelines?"
    },
    {
        type:"input",
        name: "Test",
        message: "What are your test instructions?"
    },
    {
        type: "list",
        name: "License",
        message: "Choose your licence:",
        choices: ["MIT", "Apache", "GPL"]
    },
    {
        type:"input",
        name: "Username",
        message: "Enter your github username: ",
    },
    {
        type:"input",
        name: "email",
        message: "Enter your email address: "
    }
    ]).then(data => {

        fs.writeFile("GoodREADME.md", generateMD(data), 'utf8',  function(err){
            if (err) throw err;
            else console.log("sucess!!");
        });
         
        
    }).catch((err) => {
        if (err) throw err;
    });

    function generateMD(data) {
        return `# ${data.Title}
![<ALT>](https://img.shields.io/badge/Licence-${data.License}-<COLOR>)
<br /> 
        
## Description :
    
${data.Description}
        
<br /> 
<br /> 
        
## Table of Contents :
---
- [**Installation Instructrions**](#Installation-Instructions)
- [**Usage Information**](#Usage-Information)
- [**License**](#Licence)
- [**Contribution Guidelines**](#Contribution-Guidelines)
- [**Test Instructions**](#Test-Instructions)
- [**Questions**](#Questions)
        
<br /> 
<br /> 
        
## Installation Instructions :
---
${data.Installation}    
<br /> 
        
### Usage Information :
---
${data.Usage}
        
<br /> 
        
### License :
---
${data.License} License
        
<br /> 
    
### Contribution Guidelines :
---
${data.Contribution}    
<br /> 
        
### Test Instructions :
---
${data.Test}    
<br /> 
        
### Questions :
---
* email : ${data.email} 
* GitHub : http://www.github.com/${data.Username}`
};