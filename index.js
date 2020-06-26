const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'number',
      name: 'numero',
      message: 'Você quer realizar o fatorial de qual número?',
      validate: function(value) {
        const pass = typeof value === 'number' &&
          String(value).match(/^\-?[0-9]+/);
        if(pass) return true
        return 'Este número não é válido'
      },
      default: 'apenas números inteiros'
    }
  ])
  .then(answers => {
    let numero = parseInt(answers.numero, 10);
    console.log(numero);
    let fatorial = numero;

    if(numero === 0 || numero === 1) { fatorial = 1 }

    while (numero !== 0 && numero !== 1) {
      fatorial = (fatorial * (numero - 1));
      numero -= 1;
    }

    console.log(`O resultado de ${answers.numero} fatorial é ${fatorial}.`)
  })
  .catch(error => {
    if(error.isTtyError) {
     console.log(`Prompt couldn't be rendered in the current environment`);
    } else {
      console.log(`Erro: ${error}`)
    }
  });
