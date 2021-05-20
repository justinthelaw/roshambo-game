#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
.usage("Usage: --move=<move>")
.option("move", { alias: "move", describe: "Rock, Paper, or Scissors", type: "string", demandOption: true })
.argv;
let playerInput = options.move;

class Roshambo {
  constructor() {
    this.playerMove = playerInput;
    this.computerMove = Moves.computerMove;
    this.resultStack = [
      ['t', 'c', 'p'],
      ['p', 't', 'c'],
      ['c', 'p', 't']
    ]
  }

  playGame(playerInput) {
    Roshambo.computeResult()
  }

  computeResult (playerMove, computerMove) {
    console.log(this.playerMove)
  }
}

class Moves {
  constructor () {
    this.choiceStack = ['rock', 'paper', 'scissors']
  }

  isValid (choice) {
    if (Moves.choiceStack.indexOf(choice) !== -1) {return}
    else {return false}
  }

  getPlayerMove() {
    return playerInput;
  }

  computerMove () {
    let randomNum = Math.floor(Math.random()*3);
    return Moves.choicestack[randomNum];
  }
}

Roshambo.playGame(playerInput);