function sum (a){
    return function (b){
        if(b) return sum(a+b);

        return a;
    }
}

console.log(sum(1)(2)(3)(4)(5)()) //returns 15
console.log(sum(3)(7)()) //returns 10 and so on
