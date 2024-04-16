#! /usr/bin/env node
import inquirer from "inquirer";

const answer :
{
    Sentence : string 
} = await inquirer.prompt([{
    name : "Sentence",
    type : "input",
    message : "Enter your Sentence to count words"
},
]);

const Words = answer.Sentence.trim().split(" ");
console.log(Words);

console.log(`Your Total Sentence Words are :,${Words.length}`);