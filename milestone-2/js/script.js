const numbersContainer = document.querySelector('.container');

// STAMPO I NUMERI DA 1 A 100
for (let i=1; i<=100; i++) {

    // CICLO FOR
    let fizzOrBuzz;
    if (i % 3 === 0  &&  i % 5 === 0) {
        fizzOrBuzz = 'FizzBuzz';
    } else if (i % 3 === 0) {
        fizzOrBuzz = 'Fizz';
    } else if (i % 5 === 0) {
        fizzOrBuzz = 'Buzz';
    } else 
        fizzOrBuzz = i;

        // CREO ELEMENTO DIV
        const newNumber = `
        <div>${fizzOrBuzz}</div>
    `;

    // INSERISCO NELL'HTML
    numbersContainer.innerHTML += newNumber;   
}