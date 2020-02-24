1 - When the button is clicked, lauch the Javascript
2 - Collect inputs
    *Password Length
        -error if less than 6 or more than 128
    *If lowercase letters should be used
    *If uppercase letters should be used
    *If numbers should be used
    *If symbols should be used
3 - Establish the arrays of possible characters
    1) Lowercase alphabet
    2) Uppercase alphabet (I could use 1 array and just use toUpper or toLower to adjust...)
    3) Numbers
    2) Symbols
4 - Count the number of options selected (1-4) and use this to make sure all options are used
5 - The password that is generated will be an array (the length being what was collected from the prompt)
    *In a for loop, use math.floor (math.random() * arraylength) to get randoms from the different arrays

 