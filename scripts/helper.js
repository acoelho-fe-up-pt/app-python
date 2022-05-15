#!/usr/bin/env node

const inquirer = require('inquirer');

const askForInput = async (message) => {
  const res = await inquirer.prompt({
    type: 'input',
    name: 'data',
    message
  });

  return res.data;
};

const askChoices = async (message, choices) => {
  const res = await inquirer.prompt({
    type: 'list',
    name: 'data',
    message,
    choices
  });

  return res.data;
};

const askYesNo = async (message) => {
  const res = await askChoices(message, ['Yes', 'No']);
  return res;
};

const truncateString = (str, length) => {
  let stringTruncated = str;
  if (typeof stringTruncated === 'object') {
    stringTruncated = stringTruncated.toString();
  }

  if (stringTruncated.length > length) {
    return stringTruncated.substring(0, length);
  }
  return stringTruncated;
};

module.exports = {
  askForInput,
  askChoices,
  askYesNo,
  truncateString
};
