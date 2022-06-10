


document.getElementById('in1').value = 'A história de John Doe';
document.getElementById('in2').value = 'Você já ouviu falar na historia fantastica de John Doe? Nesse artigo irei tratar com detalhes desventuras em serio desse tal John Doe';
document.getElementById('in3').value = 'john doe era foda, e era isso que fazia ele ser cada vez mais isso que ele sonhou ser.em 2077 ele virou um cyberpunk, mas a experiência deu errado pois a sua mecanica nao funcionava, entao ele encontrou a dimitrescu que lhe deu um braço robótico. isso fez com que a mib o encontrasse e descobriu se que ele era de kripton, onde os 4 elos de zê ramalho estao preso, john encontrou joao marruá aquele que robou o patinete da concurseira, John doe recuperou o patinete e se tornou amigo da concurseira.';
document.getElementById('in4').value = 'John Doe conseguiu vencer a guerra ifinita de vallhala e se tornou o deus da guerra, quando foi infectado pelo T-VIRUS, e assim chegamos ao fim dessa incrivel historia!';
document.getElementById('in5').value = '#01';
document.getElementById('in6').value = 'MARIBONDOSMAN';

//console.log(teste);


const elements = document.getElementById('titulo');
elements.addEventListener("click", home);

function home() {
	alert('alo');
}