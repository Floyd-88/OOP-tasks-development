/* Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.*/

class Worker {
	constructor(name, surname, rate, days) {
		this.name = name;
		this.surname = surname;
		this.rate = rate; // Ставка за день работы работника;
		this.days = days; // Количество отработанных дней;
	}
	getSalary() {
		return this.rate * this.days;
	}
}
let ivan = new Worker("Иван", "Иванов", 1500, 15);
console.log(ivan.getSalary());



/*Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. */

class WorkerGet {
	constructor() {
		this._name = "Petr";
		this._surname = "Petrov";
		this._rate = 2500; // Ставка за день работы работника;
		this._days = 15; // Количество отработанных дней;	
	} 
	get name() {
		return this._name
	}
	get surname() {
		return this._surname
	}
	get rate() {
		return this._rate
	}
	get days() {
		return this._days
	}

	getSalary() {
		return this._rate * this._days;
	}
}

let petr = new WorkerGet();
console.log(petr.getSalary())

/*Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. */

class modWorkerSet {
	constructor() {
		this._name = "Maks";
		this._surname = "Maksimov";
		this._rate = 2500; // Ставка за день работы работника;
		this._days = 10; // Количество отработанных дней;		
	} 
	get name() {
		return this._name
	}
	get surname() {
		return this._surname
	}

	get rate() {
		return this._rate
	}
	set rate(value) {
		this._rate = value
	}

	get days() {
		return this._days
	}
	set days(value) {
		this._days = value;
	}

	getSalary() {
		return this._rate * this._days;
	}
}
let maks = new modWorkerSet();
maks.rate = 3000;
maks.days = 10;
console.log(maks);




/*Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.*/

class MyString {

	constructor(str_1, str_2, str_3){
		this.str_1 = str_1;
		this.str_2 = str_2;
		this.str_3 = str_3;

	}
	reverse() {
		return this.str_1.split("").reverse().join("")
	}
	ucFirst() {
		return this.str_2.slice(0, 1).toUpperCase() + this.str_2.slice(1) 
	}
	ucWords() {
		return this.str_3.split(" ").map(i => i.slice(0, 1).toUpperCase() + this.str_2.slice(1) ).join(" ")
	}
}
let str = new MyString("abcd", "abcd", "asdf sghjk hgggg")
console.log(str.reverse())
console.log(str.ucFirst())
console.log(str.ucWords())




/*Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:*/

class Validator {
	constructor() {
	}
	
	isEmail(value) {
	
	if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) {
    return true
  		} else {
    return false
			}
		}
	isDomain(value) {
	if (/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/.test(value)) {
    return true
  		} else {
    return false
			}
		}
isDate(value) {
	if (/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/.test(value)) {
    return true
  		} else {
    return false
			}
	}
	isPhone(value) {
	if (/^\+\d{3} \(\d{2}\) \d{3}-\d{2}-\d{2}$/.test(value)) {
    return true
  		} else {
    return false
			}
		}
}

let validator = new Validator();

console.log(validator.isEmail("ila1988@mail.ru"));
console.log(validator.isDomain('phphtml.com'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны