const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");

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
        name: "Contributing",
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
        choices: ["MIT License", "Apache License", "GPL License"]
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
    ]

    .then(answers => {
        // Use user feedback for... whatever!!
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
    })
  );
