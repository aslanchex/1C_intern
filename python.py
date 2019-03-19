# функция, перебирающая N чисел и выводящая те числа, которые без остатка делятся на количество разрядов

def decimal(N): 
	for i in range(N+1):
		if i% len(str(i)) == 0:
			print(i)
		else:
			continue
	inputN()

# функция, обрабатывающая ввод пользователя
def inputN():
	try: # Ограничиваем ввод пользователя только целыми числами или "exit"
		N = input('Введите число или exit: ')
		if N == 'exit':
			print('Пока!')
			exit()
		else: 
			decimal(int(N))
	except ValueError:
		inputN()
		
# testArray = [0, 5, 15, 333, 1004, 10010, '##@', 5.4, 'sdfsf', 'exit'];
inputN()