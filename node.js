// необходимо установить npm install readline-sync -S
const readline = require('readline-sync');

// функция, перебирающая N чисел и выводящая те числа, которые без остатка делятся на количество разрядов
let decimal = N => {
	for (i=0;i <= N; i++) {
			i % String(i).length == 0 ? console.log(i) : NaN
	}
	inputN();
}

// функция проверки целого числа
let isInteger = num => {
	return (num ^ 0) === num;
}

// функция, обрабатывающая ввод пользователя
let inputN = (N=readline.question('Input number or \'exit\': ')) => {
	if (N == 'exit') {
		console.log('Bye!');
	} else{
		N = Number(N);
		isInteger(N) ? decimal(N): inputN()
	} 
}

inputN();

//testArray = [0, 5, 15, 333, 1004, 10010, '##@', 5.4, 'sdfsf', 'exit'];
