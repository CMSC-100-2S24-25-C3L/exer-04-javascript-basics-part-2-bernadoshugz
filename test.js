import { addAccount } from "./index.js";

var firstName = "Ayaka";
var lastName = "Kamisato";
var email = "ayakakamisatogmail.com";
var age = 18;

var accountMade = addAccount(firstName, lastName, email, age);

if (accountMade){
    console.log("Account saved to users.txt");
} else {
    console.log("Unsuccessful account creation");
}

