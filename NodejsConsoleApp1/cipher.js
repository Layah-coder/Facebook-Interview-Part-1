"use strict";




function rotationalCipher(input, rotationFactor) {
    let alphaFactor = rotationFactor % 26;
    let numFactor = rotationFactor % 10;
    // Write your code here
    var encryptedMessage = "";
    let asciiCodeArr = [];
    const LOWER = /^[a-z]+$/;
    const UPPER = /^[A-Z]+$/;
    const NUMERICAL = /^[0-9]+$/;
    for (let i = 0; i < input.length; i++) {
        let code = input.charCodeAt(i);
        asciiCodeArr.push(code);
        if (input[i].match(LOWER)) {
            asciiCodeArr[i] = ((code - 97 + alphaFactor) % 26) + "a".charCodeAt(0);
        }
        else if (input[i].match(UPPER)) {
            asciiCodeArr[i] = ((code - 65 + alphaFactor) % 26) + "A".charCodeAt(0);
            continue;
        }
        else if (input[i].match(NUMERICAL)) {
            asciiCodeArr[i] = ((code - 48 + numFactor) % 10) + "0".charCodeAt(0);
            continue;
        }
        else
            continue;

    }

    for (let i = 0; i < asciiCodeArr.length; i++) {
        encryptedMessage += String.fromCharCode(asciiCodeArr[i]);
    }
    console.log(encryptedMessage);
    
    
    
}


rotationalCipher("Zebra - 493?", 3);







/* These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
    var out = '["' + str + '"]';
    return out;
}

var test_case_number = 1;

function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
        var out = rightTick + ' Test #' + test_case_number;
        console.log(out);
    }
    else {
        var out = '';
        out += wrongTick + ' Test #' + test_case_number + ': Expected ';
        out += printString(expected);
        out += ' Your output: ';
        out += printString(output);
        console.log(out);
    }
    test_case_number++;
}

var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
check(expected_2, output_2);
*/