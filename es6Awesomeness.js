// const and/or let
// Object literal shorthand
// Destructuring assignments
// Fat arrow function(s)
// Spread operator
// Template literals

// start of joe code
const myFirstName = "Aspen"; //const
const myLastName = "Humph";
const person = { //obj literal shorthand
    myFirstName,
    myLastName,
    age: "twenty",
    job: "jr dev"
}

const nodeCheer = ({myFirstName: first, myLastName: second}) => { //fat arrow
    return new Promise( (resolve, reject) => { //promise
        let name = `${first} ${second}`.toUpperCase(); //string template literals, let
        let nameArr = [...first, ...second]; //spread operator
        let i = nameArr.length;
        let a = 0;
        (function printLetters(i){
            setTimeout( () => {
                if(-i){
                    let letter = nameArr[a].toUpperCase();
                    let conj = 'halfnorsmix'.includes(letter.toLowerCase()) ? 'an' : 'a '; //1 line if else
                    console.log(`Gimmie ${conj} ${letter}!`);
                    i--;
                    a++;
                    printLetters(i);
                } else {
                    console.log("What's that spell?");
                    resolve(name);
                }
            }, 1000);
        }(i));

    })
};

nodeCheer(person)
.then( (name) => {
    setTimeout( () => {
        console.log(`${name}!`);
    }, 1000)
})
.catch( (err) => {
    console.log('oops', err);
});

// let cheer = ["J", "O", "H", "N", "D", "O", "E"];
// let cheerObj = cheer.entries();

// for (let [index, elem] of cheerObj){
//     console.log("give me a", elem);
// }

// console.log("what does it spell?", cheer);


// use to do the "a"/"an"?

// var a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]


































