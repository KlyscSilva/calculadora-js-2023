// Chamando o elemento do HTML que deve ser alterado
// Primeiro, deve-se criar uma variável para ser utilizada dentro do JavaScript
// Resumindo, na linha 5, estou mapeando o botão do HTML

const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

// Abaixo, estarei criando um ouvinte de evento, no qual será criada uma função para quando
// ocorrer o evento de clique em algum botão. Essa função realizará as ações solicitadas após ser clicada.

function convertValues() {
  // Convertendo/modificando um valor de um input
  // Na linha abaixo, criei uma variável que recebe o valor do input do HTML e em seguida realiza a conversão de valores após o clique.
  // Para isso, é necessário criar uma variável com o valor que desejo converter e dividir pelo valor recebido do input,
  // usando a variável criada na linha 18.
  // Na linha 19, criei uma variável que exibirá no HTML o valor digitado no input.
  // Na linha 20, criei uma variável que exibirá no HTML o valor convertido.

  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const ValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em real
  const ValueConverted = document.querySelector(".currency-value"); // Outras moedas

  console.log(currencySelect.value);
  const dolarToday = 5.01;
  const euroToday = 5.4;

  if (currencySelect.value == "dolar") {
    ValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    ValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  // Abaixo, estou alterando o elemento no HTML que mostra o valor em real para exibir o valor inserido.
  ValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  // Abaixo, estou alterando o elemento no HTML que mostra o valor convertido para exibir o valor convertido em dólar.
}

// Abaixo, minha variável que foi mapeada. O convertButton recebe o ouvinte de eventos,
// quando ocorrer um clique no botão, ele em seguida vai chamar a função convertValues.

convertButton.addEventListener("click", convertValues);
