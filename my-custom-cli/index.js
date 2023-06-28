#!/usr/bin/env node
// const yargs = require("yargs");
// const {argv} = yargs(process.argv);

const inquirer = require("inquirer");

const arrayStart = 0;
const arrayEnd = 5;

const printFiveMoves = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({move}) => move.name)
    console.log(moves.slice(arrayStart, arrayEnd))
};

const prompt = inquirer.createPromptModule();
prompt([{
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its first 5 moves"    
}]).then((answers) => {
    const pokemon = answers.pokemon;
    printFiveMoves(pokemon);
});

