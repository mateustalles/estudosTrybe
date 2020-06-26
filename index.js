const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'number',
      name: 'numero',
      message: 'Você quer que eu produza quantos algarismos da sequência de Fibonacci?',
      validate: function(value) {
        const pass = typeof value === 'number' && value > 0 && value !== 0 &&
          String(value).match(/^[0-9]+$/);
        if(pass) return true
        return 'Este número não é válido'
      },
      default: 'apenas números inteiros positivos'
    }
  ])
  .then(answers => {
    let numDeAlgarismos = parseInt(answers.numero, 10);
    let algarismo = numDeAlgarismos
    let fibonacci= [0, 1]

    while (algarismo > 1) {
      const nextNumber = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1];
      fibonacci.push(nextNumber);
      algarismo = algarismo - 1;
    }

    console.log(fibonacci.slice(1));
  })
  .catch(error => {
    if(error.isTtyError) {
     console.log(`Prompt couldn't be rendered in the current environment`);
    } else {
      console.log(`Erro: ${error}`)
    }
  });
