let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let url;


function dng(array1, array2,array3) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            for (let z = 0; z < array3.length; z++) {
                url = `${array1[i]}${array2[j]}${array3[z]}.com`;
                console.log(url)
            }

        }
    }
}

dng(pronoun,adj,noun)