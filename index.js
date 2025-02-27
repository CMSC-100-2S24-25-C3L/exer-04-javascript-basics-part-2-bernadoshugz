import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

// This function generates a unique ID using the names and randomized alphanumeric
function generateUniqueID(first, last) {
    var firstLetter = first[0].toLowerCase();
    var lastName = last.toLowerCase();
    var codes = uuidv4().split("-")
    var uniqueString = codes[0];

    var newID = firstLetter + lastName + uniqueString;

    return newID;
}

// Adds an account to a users.txt file if all conditions are satisfied
function addAccount(first, last, email, age) {
    if(first != null && last != null && email != null & age != null){
        if (first != "" && last != "" && email != ""){
            // Generate the ID after checking no empty spaces to ensure no error
            var newID = generateUniqueID(first, last);
            if (validator.isEmail(email)){
                if (age >= 18){
                    // Append to users.txt
                    appendFileSync("users.txt", first + ",");
                    appendFileSync("users.txt", last + ",");
                    appendFileSync("users.txt", email + ",");
                    appendFileSync("users.txt", newID);
                    appendFileSync("users.txt", "\n");
                    return true;
                } else { return false; }
            } else { return false }
        } else {return false;}
    } else { return false; }
}

export { addAccount };