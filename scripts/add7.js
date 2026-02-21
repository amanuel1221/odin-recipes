function add7(num){
    return num + 7;
}

const sum=add7(3);
console.log(sum);
function multiply(num1, num2){
    return num1 * num2;
}
const product=multiply(3, 4);
console.log(product);

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const capitalization=capitalize("hello");
console.log(capitalization);

function lastletter(str){
    return str.charAt(str.length - 1);
}
const last=lastletter("world");
console.log(last);
module.exports = { sum, product,capitalization,last };