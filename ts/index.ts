import * as readline from "readline";
import NigerianBankCardValidator from "./regex.ts";
import process from "process";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a card number: ", (cardNumber: string) => {
  if (NigerianBankCardValidator.isValidCardNum(cardNumber)) {
    console.log(`${cardNumber} is a ${NigerianBankCardValidator.whatCard(cardNumber)}`);
  } else {
    console.log(`${cardNumber} is an invalid Card Number`);
  }
  rl.close();
});
