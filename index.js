const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const teamMember = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Please Enter the Team Member's Name",
        name: "name"
    },
    {
        type: "list",
        message: "Select a Role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Please Enter the Team Member's ID",
        name: "id"
    },
    {
        message: "Enter Team Member's Email Address",
        name: "email"
    }])
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "School Name";
            } else {
                roleInfo = "Office Phone Number";
            }
            inquirer.prompt([{
                message: `Enter Team Member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more Team Members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers"
            }])
                .then(function ({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    teamMember.push(newMember);
                    addHtml(newMember)
                        .then(function () {
                            if (moreMembers === "yes") {
                                addMember();
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}

initApp();