//Clears text
function eraseText() {
    document.getElementById('input').value = "";
}

//Capitalizes text - toggles between upper and lower case
var click = false;
function capitalize() {
    var string = document.getElementById('input');
    if (click) {
        string.value = string.value.toLowerCase();
        click = false;
    }
    else {
        string.value = string.value.toUpperCase();
        click = true;
    }  
}

//Sorts lines in alphabetical order
function sortLines() {
    var lines = document.getElementById('input');
    lines.value = lines.value.split("\n").sort().join("\n"); 
}

//Reverses order of the words in each line
function reverse() {
    var input = document.getElementById('input');
    var result = input.value.split('\n').map(function(line) {
        return line.split(" ").reverse().join(" ");
    }).join('\n');
    input.value = result;
}

//Strips any blank lines or spaces at the beginning and end of sentences
function stripBlank() {
    var input = document.getElementById('input').value.split("\n");
    var result = "";
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i].trim();
        if (input[i] !== "") {
            result += input[i] + "\n";
    }
    document.getElementById('input').value = result;
}

}

//Adds a number in front of each line
function addNum() {
    
    var input = document.getElementById('input').value.split("\n");
    console.log(input);
    
    var result = [];
    for (var i = 0; i < input.length; i++) {
        
        if (input[i].split(" ")[0] != `${i+1}.`) {
            result.push((i+1) + '. ' + input[i]);
        } else {
            result.push(input[i]);
        }
        
    }
    document.getElementById('input').value = result.join("\n");
}

//Shuffles lines in random order
function shuffle() {
    
    var input = document.getElementById('input').value.split("\n");
   
    for (var i = input.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }
    document.getElementById('input').value = input.join("\n");
}