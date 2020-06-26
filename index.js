const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'number',
      name: 'altura',
      message: 'Em primeiro lugar, qual sua altura?',
      validate: function(value) {
        const pass = value < 3 &&
          String(value).match(/^[0-9]{1}\b\.?[0-9]{0,2}$/);
        if(pass) return true
        return 'Esta altura não é válida'
      },
      default: 'metros'
    },
    {
      type: 'number',
      name: 'peso',
      message: 'E agora seu peso?',
      validate: function(value) {
        const pass = value > 0 && value < 199 &&
          String(value).match(/[0-9]{1,3}/);
        
        if(pass) return true
        return 'Escreva um peso válido';
      },
      default: 'kgs'
    },
  ])
  .then(answers => {
    const { peso, altura } = answers;
    calcularIMC(peso, altura);
  })
  .catch(error => {
    if(error.isTtyError) {
     console.log(`Prompt couldn't be rendered in the current environment`);
    } else {
      console.log(`Erro: ${error}`)
    }
  });

function calcularIMC(peso, altura) {
  const imc = Number.parseFloat(peso / Math.pow(altura, 2)).toFixed(2);

  console.log(`Seu IMC é ${imc}`);
  console.log(imc)
  if (imc < 30) { console.log('Você não apresenta grau de obesidade.') } else
  if (imc < 34.91) { console.log('Você apresenta obesidade grau I') } else
  if (imc < 39.91) { console.log('Você apresenta obseidade grau II')} else
  console.log('Você apresenta graus de obesidade 3 ou 4, tome cuidado!')
};