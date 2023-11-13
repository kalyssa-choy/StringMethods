//random test word
const word = "hello";

//length function that returns the length of the string
function length(word){
    var i = 0;
    while(word[i]){
        i++;
    }
    return i;
}

//slice function returns a part of the string from index [x,y)
function slice(x, y){
    var newString = "";
    for (var i = x; i < y; i++){
        newString += word[i];
    }
    return newString;
}

//replace function replaces the first instance of a matching character in the string
function replace(char, newChar){
    let wordLength = length(word);
    var newWord = "";
    for (var i = 0; i < wordLength; i++){
        if (word[i] === char){
            newWord += newChar;
            if (i != wordLength - 1){
                newWord += slice(i+1, wordLength);
            }
            return newWord;
        }
        else{
            newWord += word[i];
        }
    }
}

//replaceAll function replaces all instances of the matching character in a string
function replaceAll(char, newChar){
    let wordLength = length(word);
    var newWord = "";
    for(var i = 0; i < wordLength; i++){
        if (word[i] === char){
            newWord += newChar;
        }
        else{
            newWord += word[i];
        }
    }
    return newWord;
}

//concat function merges two strings together
function concat(otherString){
    return word + otherString;
}

//charAt function returns a character from the string
function charAt(index){
    return word[index];
}

//testing if the length function works
console.log(length(word));

//testing if the slice function works
console.log(slice(0,3));

//testing if the replace function works
console.log(replace("l", "L"));

//testing if the replaceAll function works
console.log(replaceAll("l", "M"));

//testing if the concat function works
console.log(word.concat("hello"));

//testing if the charAt function works
console.log(word.charAt(3));
