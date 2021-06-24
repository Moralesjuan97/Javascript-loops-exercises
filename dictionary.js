let sentence = "Hello World";
let dict = {};

let nospaces = sentence.replace(/\s/g, '');
let lowercases = nospaces.toLowerCase();
//let arrayofletter = lowercases.split("");

for (var i =0; i < lowercases.length; i++){
    if (sentence[i] in dict){
        dict[sentence[i]] +=1
    }
    else{
        dict[sentence[i]] = 1;
    }
}

console.log(dict);