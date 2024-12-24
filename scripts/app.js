'use strict';



// const operations = [100, -20, 7, -20, 50];

// // const positiveOperations = [];

// // for (const operation of operations) {
// // 	if(operation > 0) {
// // 		positiveOperations.push(operation);
// // 	}
// // }

// // console.log(positiveOperations);

// const positiveOperations = operations.filter(operation => {
// 	return operation > 0;
// }); 

// console.log(positiveOperations);

// const positivieRUBOperations = operations
// 	.filter(operation => {
// 		return operation > 0;
// })
// 	.map(operation => operation * 60);
	
// 	console.log(positivieRUBOperations);


// const prices = [[100, 200], [120, 100], [200, 350]];
                   
                        
// const result = prices
// 	.map(product => product[1] - product[0])
// 	.filter(price => price > 0);


// console.log(result);

// const operations = [100, -20, 7, -30, 50];

// let balance = 0;
// for (const operation of operations) {
// 	balance += operation;
// }

// console.log(balance);


// const finalBalance = operations.reduce((acc, value, i) => {
// 	console.log(`iteration: ${i} ,acc: ${acc}, operation ${value}`);
// 	return acc += value;
// }, 0);

// 0 - acc  = 0, value = 100;
// 1 - acc = 100, value = -20;

// console.log(finalBalance);

// const minElement = operations.reduce((acc, value, i) => {
// 	 if(value > acc) {
// 		return acc;
// 	 } else { 
// 		return value;
// 	 }
// }, 0);

// console.log(minElement)


// const arr = [1, 4 , 4, 10];

// const avg = arr.reduce((acc, value) => {
// 	return acc += value / arr.length;
// }, 0);


// console.log(avg);


// const arr = [2, 4 , 4 , 10, 20];

// let elGT5;
// for (const el of arr) {
// 	if(el > 5){
// 		elGT5 = el;
// 		break;
// 	}

// }

// console.log(elGT5);


// elGT5 = arr.find(el=>el>5);

// console.log(elGT5);
// let elGT5Index = arr.findIndex( el => el < 0);

// console.log(elGT5Index); 

// const arr = [2, 4 , 4 , 10, 20];

// function some(array, element) {
// 	const result = array.find(el => el === element);
// 	return result == undefined ? false : true;
// }

// console.log(some(arr, 1));

// console.log(arr.some(el => el === 0))


// const prices = [[2, 4], [3, 4], [10, [20, 50]]];

// const res = prices.flat(2);
// const res2 = prices.flatMap(el => el.concat([1]));
// console.log(res);
// console.log(res2);

// const users = ['Vasya', 'Masha', 'Katya', 'Anya'];

// console.log(users);

// users.sort()
// console.log(users);

// const operations = [100, -300, -100, 50, 480];
// console.log(operations);

// // < 0 - a, b - save 
// // > 0 - b, a - change
// operations.sort((a, b) => {
// 	if(a > b) {
// 		return 1;
// 	}
// 	if (a < b) {
// 		return -1;
// 	}
// });
// console.log(operations);

// operations.sort((a, b) => {
// 	if(a < b) {
// 		return 1;
// 	}
// 	if (a > b) {
// 		return -1;
// 	}
// });
// console.log(operations);

// operations.sort((a,b) => a-b); // -> 
// console.log(operations);

// operations.sort((a,b) => b-a); // <-
// console.log(operations);

// const arr = [1, 2, 3, 4, 5];

// console.log(new Array(1, 2, 3, 4, 5));

// const arr2 = new Array(5);
// console.log(arr2);

// arr2.fill(1, 0, 3);
// arr2.fill(2, 3, 5);
// console.log(arr2);
// // console.log(arr2.map(el => el + 1));

// const arr3 = Array.from({ length: 5}, (cur, i) => i + 1);
// console.log(arr3);

// const userName = 'Bogdan Dmytrenko';

// console.log(userName[0]);
// console.log(userName.charAt(3));

// console.log(userName.length);

// console.log(userName.indexOf('g'));

// console.log(userName.includes('gdao'));

// console.log(userName.slice(2));


// const userName = 'Bogdan as for js Dmytrenko';

// const name = userName.slice(0, userName.indexOf(' '));
// console.log(name);

// const surname = userName.slice(userName
// 		.lastIndexOf(' ') + 1, 
// 		userName.length + 1); 
// console.log(surname);

// const str = 'Bogdan Dmytrenko';
// console.log(str.includes('a'));
// console.log(str.startsWith('B'));
// console.log(str.endsWith('o'));

// console.log(new String('Bogdan Dmytrenko').includes('a')); // === new Array 

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.replace('B','F'));
// // console.log(str.replace('o','F'));
// console.log(str.replaceAll('o', 'B'));

// console.log(str.replace(/o/g, 's')); // g v konce = All symbols 


// const str2 = ' Bogdan Dmytrenko  \n';
// console.log(str2.trim()); //  trimEnd trimStart 

 

// function isPhoneNumber(num) {
// 	num = num.trim();
// 	num = num.replace('+7', '8');
// 	if(!num.startsWith('8')){
// 		return false;
// 	}
// 	num = num.replaceAll('(', '');
// 	num = num.replaceAll(')', '');
// 	num = num.replaceAll('-', '');
// 	num = num.replaceAll(' ', '');
// 	if (num.length != 11) {
// 		return false;
// 	}
// 	let onlyNumbers = true;
// 	for (const char of num) {
// 		if (isNaN(Number(char))) {
// 			onlyNumbers = false;
// 			break;
// 		}
// 	}
// 	return onlyNumbers;
// }
//  // + 
// console.log(isPhoneNumber(num1));
// console.log(isPhoneNumber(num2));
// console.log(isPhoneNumber(num3));
// console.log(isPhoneNumber(num4));
// console.log(isPhoneNumber(num5));


// // - 
//  console.log(isPhoneNumber(num1Error));
//   console.log(isPhoneNumber(num2Error));
//    console.log(isPhoneNumber(num3Error));
//     console.log(isPhoneNumber(num4Error));
	


// const userName = 'Bogdan Dmytrenko Ktoto';

// console.log(userName.split(' '));

// const [firstName, familyName, lastName] = userName.split(' ');
// console.log(firstName);
// console.log(familyName);
// console.log(lastName);

// const arr = ['You', 'know', 'JS'];

// console.log(arr.join(' '));

// const film = 'Spider Man ';

// console.log(film.padStart(50, '*')); // .length 
// console.log(film.padEnd(50, '*'));
// console.log(film.repeat(10));


// const card = '2342834503458353';

// function bankCard(num) {
// 	const result = num.slice(-4).padStart(16, '*');
// 	return result;
// }

// console.log(card.slice(-4).padStart(16, '*'))
// console.log(bankCard(card));

// const userArray = ['Bogdan', 'Dmytrenko', '24'];

// const user = {
// 	name: 'Bogdan', 
// 	surname: 'Dmytrenko',
// 	age: 24, 
// 	skills: [
// 		'Programming',
// 		'soft skills'
// 	],
// 	eduBasic: 'School 10',
// 	eduPro: 'KNU'
// };

// console.log(user);
// console.log(user.name);
// console.log(user.skills[0]);
// console.log(user.skills);
// console.log(user['skills']);
// const level = 'Pro';
// console.log(user['edu' + level]);

// // const res = prompt('Write property: ');
// // console.log(user[res]);
// user['city'] = 'Kiev';
// console.log(user);


// const users = [
// 	{ name: 'Bogdan', age: 19},
// 	{ name: 'Vladislav', age: 30},
// 	{ name: 'Gleb', age: 24},
// 	{ name: 'Yaroslav', age: 29},
// ];

// console.log(users.sort((a,b) => {
// 	if(a.age < b.age) {
// 		return -1;
// 	}
// 	if (a.age > b.age) {
// 		return 1;
// 	}
// 	return 0;
// }));

// const users = [
// 	{
// 	name: 'Bogdan',
// 	surname: 'Dmytrenko',
// 	age: 19,
// 	skills: ['Programming', 'DevOps']
// 	},
// 	{
// 		name: 'Vladislav',
// 		surname: 'Kibenko',
// 		age: 25,
// 		skills: ['Design']
// 	}
// ];


// const userData = users.map( user => {
// 	return {
// 		fullName: `${user.name} ${user.surname}`,
// 		skillNum: user.skills.length,
// 	}
// })

// console.log(userData);


// const user = {
// 	name: 'Bogdan',
// 	surname: 'Dmytrenko',
// 	age: 24,
// 	getFullName: function() {
// 		console.log(this);
// 		return this.name + ' ' + this.surname;
// 	}
// };


// // function getFullName(user) {
// // 	return user.name + ' ' + user.surname;
// // }

// // console.log(getFullName(user));


// console.log(user.getFullName());

// const arr = [1, 2];
// arr.sort();


// const wallet = {
// 	balance: 1000,
// 	operations: [],
// 	getIncreaseOperations: function(sum, reason = 'Операция') {
// 			this.balance = sum + this.balance;
// 			this.operations.push({ reason, sum});
// 			return true;
// 	},
// 	getDecreaseOperations: function(sum, reason = 'Операция') {
// 		if(this.balance - sum >= 0) {
// 			this.balance = this.balance - sum;
// 			this.operations.push({reason , sum});
// 			return true;
// 			} else {
// 				console.log('Недостаточно баланса!')
// 				return false;
// 			}
// 		},
// 	getAllOperations: function() {
// 		return this.operations.length;
// 	}	
// }

// const res1 = wallet.getIncreaseOperations(100, 'Кешбек');
// console.log(res1);
// console.log(wallet.getAllOperations());

// console.log(wallet.getDecreaseOperations(200, 'Покупка игрушечного автомобиля'));

// console.log(wallet.getAllOperations());

// console.log(wallet.balance);


// const initialBalance = 7;

// const wallet = {
// 	balance: initialBalance,
// 	operations: [],
// }


// const cities = {
// 	Kiev: {
// 		lt: 200,
// 		temp: 25
// 	},
// 	Lviv: {
// 		lt: 100,
// 		temp: 20
// 	}
// }


// let sumTemp = 0; // если не задать, то будет undefined ++ 
// let citiesCount = Object.keys(cities).length;
// console.log(citiesCount);

// // for(const key in cities) {
// // 	console.log(key);
// // 	sumTemp += cities[key].temp;
// // }

// console.log(citiesCount);
 

// for (const key of Object.keys(cities)){
// 	sumTemp += cities[key].temp ;

// }
// 	console.log(sumTemp/citiesCount);
 
// const arr = [1, 3, 4];
// const [z, y, x] = arr;

// console.log(y);

// const user = {
// 	name: 'Bogdan',
// 	age: 25,
// 	city: 'Kiev'
// }

// const {age, ...others} = user;

// console.log(age);
// console.log(others);

// const additionalData = {
// 	skills: ['Dev', 'Design'], 
// 	creditCard: '2345-2214-6367-8522'
// }

// // user.test = 'kgdkgdkgd';


// // user.skills = additionalData.skills;
// // user.creditCard = additionalData.creditCard;

// // user = {
// // 	...user,
// // 	...additionalData
// // }
// console.log(user);



// const cities = {
// 	Kiev: {
// 		temp: {
// 			celcius: 25
// 		}
// 	},
// 	Lviv: {
// 		temp: {
// 			celcius: 25
// 		}
// 	}
// }

// const city = 'Kiev';

// // if(cities[city] != undefined && cities[city].temp != undefined) {
// // 	console.log(cities[city].temp.celcius);
// // }

// console.log(cities[city]?.temp?.celcius); 
// // .? .? .? .? = Lviv(? - undefined) -> temp (? - undefined) -> celcius (? - undefined) optional chaining

 
// const warehouse = {
// 	goods: [],
// 	findGoodById: function(id) {
// 		return this.goods.find(g => g.id == id);
// 	},
// 	addGood: function(good) {
// 		const existedGood = this.findGoodById(good.id);
// 		if(existedGood) {
// 			console.log(`Этот товар уже есть на складе`);
// 			return;
// 		} 
// 		this.goods.push(good)
// 	},
// 	getWeight: function() {
// 		return this.goods.reduce((acc,el)=> {
// 			acc += el.weight?.kg ? el.weight.kg : 0;
// 		}, 0)

// 	}
// }

// const car = {
// 	id: 1,
// 	weight: {
// 		kg: 1000
// 	},
// 	brand: 'Ford'
// }

// const chair = {
// 	id: 1,
// 	weight: {
// 		kg: 2
// 	},
// }

// const paper = {
// 	id: 1,
// 	color: 'red'
// }

// warehouse.addGood(car);
// warehouse.addGood(chair);
// warehouse.addGood(paper);
// console.log(warehouse.goods);

// const findedItem = warehouse.findGoodById(1);
// console.log(findedItem);


// const w = warehouse.getWeight(2);
// console.log(w)
 
//  let myCoolVariable = 1;

//  if (true) {
// 	myCoolVariable = 3; 
//  }
 

//  console.log(myCoolVariable);

// let successMessage = 'Успех';

// const user = {
// 	name: 'Bogdan',
// 	roles: []
// }

// function addRole(user, role) {
// 	if (role == 'admin') {
// 		const message = 'Ошибка'
// 		console.log(message);
// 		// console.log(a); // scope chaine
// 		return user;
// 	}
// 	user.roles.push(role);
// 	let successMessage = 'Ypa' // scope chain, new variable = only this 
// 	console.log(successMessage);
// 	return user;
// }

// function logRoles() {
// 	// const a = 3; // scope chain
// 	console.log(user.roles);
// }
// logRoles()
 

// console.log(addRole(user, 'dev'));
// console.log(successMessage);


// addUser();
// // console.log(a); // temoral dead zone
// console.log(b);
// const a = 3;
// var b = 2;

// function addUser() {
// 	// console.log('user added');
// }


// // arr1(); // tdz 

// const arr1 = () => {
// 	console.log('user added');
// }


// addUser();


// const company = {
// 	name: 'OOO Agro',
// 	employees: [
// 		{
// 			name: 'Sveta',
		
// 		}
// 	],
// 	ceo: {
// 		name: 'Vasya',
// 			getUserName: function (nameUser){
// 				return this.name;
// 			}
// 	},
// 	nameCompany: function () {
// 	return this.name;
// 	},

	
// }

 

// console.log(company.ceo.getUserName())
// console.log(company.employees.map(employee => employee.nameCompany()));
// console.log(company.nameCompany());


// const b = 1; 

// const a = {
// 	b,
// 	getB: function() {
// 		return this.b;
// 	},
// 	getBAlt() {
// 		return this.b;
// 	}
// }

// console.log(a.getBAlt());
// console.log(a.getB());
// // Enhanced object literal


// const audi = {
// 	make: 'Audi',
// 	model: 'A3',
// 	year: 2021,
// 	damages: [],
// 	addDamage(part, rate) {
// 		console.log(`У авто ${this.make} ${this.model} ${this.year}, добавлено: повреждение: ${part} со степенью ${rate}
// 			`)
// 		this.damages.push({
// 			part, 
// 			rate
// 		})
// 	}

// }

// audi.addDamage('Капот', 2);

// const bmw = {
// 	make: 'BMW',
// 	model: 'X5',
// 	year: 2022,
// 	damages: []
// }

// bmw.addDamage = audi.addDamage;

// // bmw.addDamage('Бампер', '2');

// const addDamageFunc = audi.addDamage;

// // addDamageFunc('Бампер', 2) // undefined 


// let newArguments = ['бампер, капот', 3]

// // Call && apply 
// addDamageFunc.call(bmw, 'Бампер', 2);
// addDamageFunc.call(audi, 'Бампер', 2) // с помощью spread оператора (this.arg, ...['Бампер', 2])

// addDamageFunc.apply(bmw, ['Бампер', '2']);
// addDamageFunc.apply(audi, ['Бампер', '2']);
// addDamageFunc.apply(bmw, newArguments);
 

// const audi = {
// 	make: 'Audi',
// 	model: 'A3',
// 	damages: [],
// };


// const carManipulation = {
// 	addDamage(part, rate) {
// 		this.damages.push({part, rate});
// 		console.log(`Добавлено повреждение на ${this.make} ${this.model}`);
// 	}
// }

// const addDamageAudi = carManipulation.addDamage.bind(audi);

// addDamageAudi('Бампер', 2);

// const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
// addDamageAudiRoof(2);



// function removePassword(reset) {
// 	if(reset) {
// 		this.password = undefined;
// 	} else {
// 		this.password = '1';
// 	}
// }



// let user = {
// 	username: 'Bogdan',
// 	password: '123456',
 
// // 	userReset: function removePassword(reset) {
// // 	if(reset) {
// // 		this.password = undefined;
// // 	} else {
// // 		this.password = '1';
// // 	}
// // }
// }
//  const userReset = removePassword.bind(user, true);

// userReset();





// // user.userReset();

 

// console.log(user);


// Immediately invoked function expression

// function init() {
// 	console.log(`Start`);
// }

// init();


// (function () {
// 	console.log('Start IIFO');
// })();


// function changeBalance() {
// 	let balance = 0;
// 	return function(sum) {
// 		balance += sum;
// 		console.log(`balance: ${balance}`);
// 	}
// }

// const change = changeBalance();

// change(100);
// change(-50);
// change(200);

// console.dir(change);

// const change2 = changeBalance();

// change2(150);

// console.dir(change2);



// const userInfo = {
// 	balance: 0, 
// 	operations: 0, 
// 	increase(sum) {
// 		this.balance += sum;
// 		this.operations++;
// 	}
// }


// function user() {
// 	const userObj = userInfo;
// 	return function() {
// 		return userObj;
// 	}
// }

 
// const user1 = user();


// user1().increase(100);
// user1().increase(100);

// console.log(user1());


