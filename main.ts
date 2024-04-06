#! /usr/bin/env node

import inquirer from "inquirer";

const Currency: any = {
    USD: "1.08",
    EUR: "0.25",  
    GDP: "0.86",
    DINAR: "117.15",
    RIYAL: "4.07", 
    PKR: "301.12",
    CHF: "0.98",
};

// Declare Amount variable before using it
let Amount: number;

let User_answer = await inquirer.prompt([
    {
        name: "From",
        message: "Kindly, Enter From currency",
        type: "list",
        choices: ["USD", "EUR", "GDP", "DINAR", "RIYAL", "PKR", "CHF"]
    },
    {
        name: "To",
        message: "Kindly, Enter To currency",
        type: "list",
        choices: ["USD", "EUR", "GDP", "DINAR", "RIYAL", "PKR", "CHF"]
    },
    {
        name: "Amount",
        message: "Kindly, Enter Your Amount",
        type: "input",
        validate: function(value) {
            // Check if the input is a valid number
            if (isNaN(value)) {
                return "Please enter a valid number.";
            }
            return true;
        }
    }
]);

// Assign the value to Amount after user input validation
Amount = parseFloat(User_answer.Amount);

// Ensure Amount is not NaN before proceeding
if (isNaN(Amount)) {
    console.log("Invalid amount. Please enter a valid number.");
} else {
    let forAmount = parseFloat(Currency[User_answer.From]);
    let toAmount = parseFloat(Currency[User_answer.To]);

    let baseAmount = Amount / forAmount;
    let convertedAmount = baseAmount * toAmount;

    // Round off to two oe one decimal places or you can leave it as it is! it will give you value in just numbers,with no decimal.
    let roundedAmount = convertedAmount.toFixed();
    console.log(roundedAmount);
}

