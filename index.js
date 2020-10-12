alert("Digite as suas notas: ");

let nota1 = prompt("Nota 1:");

let nota2 = prompt("Nota 2:");

let nota3 = prompt("Nota 3:");

let nota4 = prompt("Nota 4:");

let Media4Notas = (Number (nota1) + Number (nota2) + Number (nota3) + Number (nota4)) / 4;

if(nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10)
alert("Notas acima de 10 não são permitidas.");

else if(nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0)
alert("Notas abaixo de 0 não são permitidas");

else if(Media4Notas > 7)
alert(`Você ficou com média ${Media4Notas} Resultado: APROVADO`);

else if(Media4Notas > 5 && Media4Notas < 7)
alert(`Você ficou com média ${Media4Notas} Resultado: RECUPERAÇÃO`);

else if(Media4Notas < 5)
alert(`Você ficou com média ${Media4Notas} Resultado: REPROVADO`);