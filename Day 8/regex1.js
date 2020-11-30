'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re =  /^([aeiou]).*\1$/;
    
    /*
    1- ^ asserts position at start of the string
    2- 1st Capturing Group ([aeiou])
    3- .* matches any character (except newline) - between zero and unlimited times, as         many times as possible, giving back as needed (greedy)
    4- \1 matches the same text as most recently matched by the 1st capturing group
    5- $ asserts position at the end of the string
     * Do not remove the return statement
     */
    return re;
}

