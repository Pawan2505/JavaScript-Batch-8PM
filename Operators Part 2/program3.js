// Procedure Programs and Swapping

function swap(a, b) {
    console.log(`Before swapping: a = ${a}, b = ${b}`);
    let temp = a;
    a = b;
    b = temp;
    console.log(`After swapping: a = ${a}, b = ${b}`);
}

swap(5, 10);
