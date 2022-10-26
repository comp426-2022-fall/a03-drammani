#!/usr/bin/env node
import { roll } from "../lib/roll.js"
import minimist from "minimist"

var argv = minimist(process.argv.slice(2));

const sides = argv.sides || 6
const dice = argv.dice || 2
const rolls = argv.rolls || 1

console.log(JSON.stringify(roll(sides, dice, rolls)))


