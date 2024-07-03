function compose(f1, f2){
    return function(a,b){
        return f2(f1(a,b));
    }
}

const result = compose(add,mulTwo);
console.log(result(2,3));