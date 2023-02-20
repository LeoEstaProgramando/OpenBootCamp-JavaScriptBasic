function elevaCuadrado(num) {
    let fibonacci = [0, 1];

    for (let i = 2; i <= num; i++) {
        let a = fibonacci[i - 1];
        let b = fibonacci[i - 2];
        fibonacci.push(a + b);
    }
    return fibonacci;
}

console.log(elevaCuadrado(6));