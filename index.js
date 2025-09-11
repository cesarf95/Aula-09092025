// //Aula Terça Feira 09/09/2025


// // // // // // Criar uma variavel 'nome' com seu nome e mostrar 'Ola. <nome>!.'

// // // // // let nome = 'Cesar Fonseca';
// // // // // let idade = 20
// // // // // let cidade = 'Maringá'
// // // // // console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade}`)

// // // // // // variavel nome, idade, cidade - 'Meu nome é 'nome', eu tenho 'idade' anos e moro em 'cidade'



// // // // // Imprimindo tipos de dados

// // // // const numero = 123;
// // // // const naoEhNumero = '123';
// // // // console.log(numero + naoEhNumero);
// // // // console.log(typeof numero);
// // // // console.log(typeof naoEhNumero);
// // // // console.log(typeof true);
// // // // console.log(typeof '');
// // // console.log(typeof 3.15);


// // const numero1 = 7;
// // const numero2 = '11';

// // console.log(numero1 == numero2);


// // const numero3 = 7;
// // const numero4 = '7';

// // console.log(numero3 == numero4);

// // const numero5 = 7;
// // const numero6 = '7';

// // console.log(numero5 === numero6);

// // // = recebe
// // // == igual
// // // === identico 

// //Crie 5 variaveis com tipos diferentes. Em seguida imprima no console os tipos delas.


// //  let nome = 'Cesar'
// //  const idade = 20
// //  let cidade = true
// //  var tipos ;
// //  var valor = 0
// //  let cesar = null
// // let frutas =["Uva", "Banana", "Morango"]

// //  console.log(typeof nome)
// //  console.log(typeof idade) 
// //  console.log(typeof cidade)
// //  console.log(typeof tipos)
// //  console.log(typeof valor)
// //  console.log(typeof cesar)
// //  console.log(typeof Mala)





// // const idade = 18;
// // if (idade >= 18) {
// //     console.log('E maior de idade')
// // } else {
// //     console.log('e menor de idade')
// // }

// // const idade = 14;
// // if (idade >= 16 && idade <= 18 || idade > 70) {
// //     console.log('Voto opcional')

// // } else if (idade >= 18 && idade <= 60)
// // { console.log("E obrigado a votar")

// // } else
// //     console.log("Nao pode votar")


// // const idade = 70;
// // if (idade <16){
// //     console.log('nao pode votar')
// // } else if (idade >=16 && idade <88){
// //     console.log('voto facultativo')
// // } else {
// //     console.log('obrigatorio')
// // }


// // const numero = 13
// // undefined
// // if (numero % 2 === 0) {cons}
// // undefined
// // if (numero % 2 === 0) {console.log('É par')} else
// // {console.log('É impar')}


// //Criar variavel com valor, Condição se o valor > 100 desconto de 10% senao o desconto sera de 5%. Valor final com 2 casas decimais




// // const valor = 120;
// // if(valor > 100){
// //     desconto = valor * 0.10;

// // console.log("O desconto sera de 10%")
// // } else {

// //  if (valor <= 100)

// //  desconto = valor * 0.05;

// // console.log("O desconto sera de 5%")
// // }
// // console.log(`O desconto é de: R$ ${desconto.toFixed(2)}`)

// //Criar variavel mostrando o dia 3. Mostre dom=1 seg=2 ...  


// // const dia = 4;
// // let nomeDia;
// // switch(dia) {
// //     case 1: nomeDia = "Domingo";
// //     break;
// //     case 2: nomeDia = "Segunda";
// //     break;
// //     case 3: nomeDia = "Terca";
// //     break;
// //     case 4: nomeDia = "Quarta";
// //     break;
// //     case 5: nomeDia = "Quinta";
// //     break;
// //     case 6: nomeDia = "Sexta";
// //     break;
// //     case 7: nomeDia = "Sabado";
// //     break;
// //     default: nomeDia = "Dia invalido"
    
// // }
// // console.log(nomeDia)

// //Laços  (for/while)

// //imprima os numeros de 1 a 5

// //  for (let i= 0; i <=5; i++) { Loop usado para somar e atribuir mais um valor usando i++
//  //     console.log(i);
//  // }


// // const n = 5;
// // let total = 0;
// // for (let i = 1; i <= n; i++) {
// //     total += i;

// // }
// // console.log(total);


// //mostrar a tabuada do 7 de 1 ao 10//

// // const numero = 7;

// // for (let i = 1; i <= 10; i++) {
// //     console.log(`${numero} x ${i} = ${numero * i}`);
// // } 

// //while

// //imprimir de 5 ate 1

// // let i  = 5;
// // while(i >= 1) {
// //     console.log(i);
// //     i--;

// // }

//  let i  = 0;
//   while(i <= 10) {
//       console.log(i);
//       i= i + 2;
//   }

  // for (let i = 0; i <= 10; i = i + 2) {
  //   console.log(i);
  // }



  // let lista = ['Arroz', 'Feijão', 'Picanha'];
  // console.log(lista);
  
  //  let lista2 = ['Arroz', 'Feijão', 'Picanha'];
  // console.log(lista2[1]);
  
  //  let lista3 = ['Arroz', 'Feijão', 'Picanha'];
  // console.log(lista3.length);

  // let lista4 = ['Arroz', 'Feijão', 'Picanha'];
  // console.log(lista4.push('Macarrão'));
  // console.log(lista4)
  // console.log(lista4.unshift('Farofa'))
  // console.log(lista4)
  // let listaApagada = lista4.splice(2, 1));
  // console.log(listaApagada)
  // console.log (lista4.splice(2, 1))
  // console.log (lista4.splice(1, 1))

  //unshift usado para colocar o item como primeiro da lista em array let lista = ['Arroz', Feijao etc...]
  //push usado para adiciona um item na lista em array console.log(lista4.push('Macarrão'));
  //O splice() é um método de Array instâncias para alterar o conteúdo de uma matriz removendo ou substituindo elementos existentes e/ou adicionando novos elementos no lugar .
  // .pop remove o ultimo lista de um Array
  // indexOf() é um método disponível tanto para strings quanto para arrays (e outros tipos de dados com propriedades de comprimento, como TypedArray)
  // O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original
  // Javascript e casesensetive, diferenciando letras minusculas de maiusculas.
  //Somar valores dentro de um Array
  // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array

  // let numeros = [8, 12, 9 ,4];
  // let soma = 0;
  // for ( let i = 0; i < numeros.length; i++) {
  //   soma += numeros [i];
  // }
  // console.log(soma);

  //encontrar o maior número dentro de um array

  // const array = [12, 3, 9 ,55, 20];
  // let maiorNum = array[0];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] < maiorNum) {
  //     maiorNum = array[i]

  //   }
  // }
  // console.log(maiorNum);

  //string

  //contar caracteres

  // const frase = 'algumacoisaaqui'
  // console.log(frase.length)
  // console.log(frase.indexOf('aqui'));
  // console.log(frase.slice( ))
  // console.log(frase[11]);
  // console.log(frase.trim())
  // console.log(frase.toUpperCase())
  // console.log(frase.toLowerCase())
  // console.log(frase.includes('alguma'))