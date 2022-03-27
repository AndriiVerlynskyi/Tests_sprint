function funcA (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i*(i+1)*2*i
    }
    return sum
}

console.log(funcA(2))


function funcB (array){
    let amountOfMembers = 0;
    for (let i = 1; i < array.length- 1; i++){
        if ( array[i] < (array[i-1] + array[i+1])/2 ) {
            amountOfMembers += 1;
        }
    }
    return amountOfMembers
}

module.exports = { funcA, funcB}