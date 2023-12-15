// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function Constr(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let appropriation = new Constr(1, "Artem", "Marchenko", "ad.marchenko2006@gmail.com", +380636300331);
console.log(appropriation);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(name, status, age) {
    this.name = name;
    this.status = status;
    this.age = age;
}

let emptyArray = [];

let data1 = new User("kokos", true, 10)
emptyArray.push(data1)

let data2 = new User("Artem", false, 17)
emptyArray.push(data2)

let data3 = new User("melon", true, 0.6)
emptyArray.push(data3)

let data4 = new User("fishing", false, 55)
emptyArray.push(data4)

let data5 = new User("school", true, 190)
emptyArray.push(data5)

let data6 = new User("like", false, 20)
emptyArray.push(data6)

let data7 = new User("fish", true, 12)
emptyArray.push(data7)

let data8 = new User("cat", false, 453)
emptyArray.push(data8)

let data9 = new User("dog", true, 145)
emptyArray.push(data9)

let data10 = new User("Alex", false, 36)
emptyArray.push(data10)



console.log(emptyArray)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


function User(id, name, status, age) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.age = age;
}


let userArray = [];

let data11 = new User(22, "kokos", true, 10);
userArray.push(data11);

let data12 = new User(23, "Artem", false, 17);
userArray.push(data12);

let data13 = new User(33, "melon", true, 0.6);
userArray.push(data13);

let data14 = new User(1324, "fishing", false, 55);
userArray.push(data14);

let data15 = new User(78, "school", true, 190);
userArray.push(data15);

let data16 = new User(5, "like", false, 20);
userArray.push(data16);

let data17 = new User(6, "fish", true, 12);
userArray.push(data17);

let data18 = new User(4, "cat", false, 453);
userArray.push(data18);

let data19 = new User(3, "dog", true, 145);
userArray.push(data19);

let data21 = new User(2, "Alex", false, 36);
userArray.push(data21);

let filteredArray = userArray.filter(user => user.id % 2 === 0);
console.log(filteredArray);



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, status, age) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.age = age;
}

let userrArray = [];

let data31 = new User(1, "kokos", true, 10);
userrArray.push(data31);

let data32 = new User(2, "Artem", false, 17);
userrArray.push(data32);

let data33 = new User(3, "melon", true, 0.6);
userrArray.push(data33);

let data34 = new User(6, "fishing", false, 55);
userrArray.push(data34);

let data35 = new User(8, "school", true, 190);
userrArray.push(data35);

let data36 = new User(12, "like", false, 20);
userrArray.push(data36);

let data37 = new User(3525, "fish", true, 12);
userrArray.push(data37);

let data38 = new User(144, "cat", false, 453);
userrArray.push(data38);

let data39 = new User(124, "dog", true, 145);
userrArray.push(data39);

let data40 = new User(77, "Alex", false, 36);
userrArray.push(data40);


userrArray.sort((a, b) => a.id - b.id);

console.log(userrArray);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order || [];
    }
}

let clients = [];

let client1 = new Client(1, 'kokos', 'black', 'blackKokos@gmail.com', 0001, ['bottle', 'fruit', 'T-Shirt'])
clients.push(client1)

let client2 = new Client(2, 'Alex', 'Zinchenko', 'zina@gmail.com', 0002, ['cherry', 'apple'])
clients.push(client2)

let client3 = new Client(3, 'Mykhaylo', 'Mudryk', 'misha@gmail.com', 0003, ['melon', 'grape'])
clients.push(client3)

let client4 = new Client(4, 'Vitaliy', 'Tsygankov', 'vitya@gmail.com', 0004, ['orange', 'plane', 'car', 'girona'])
clients.push(client4)

let client5 = new Client(5, 'Lionel', 'Messi', 'Messi@gmail.com', 0005, ['usa', 'meat'])
clients.push(client5)

let client6 = new Client(6, 'andriy', 'shevchenko', 'sheva@gmail.com', 0006, ['ork'])
clients.push(client6)

let client7 = new Client(7, 'Maryan', 'Shved', 'Shved@gmail.com', 0007, ['computer', 'laptop', 'ak school'])
clients.push(client7)

let client8 = new Client(8, 'yehor', 'yarmoliuk', 'yarma@gmail.com', 0000, ['language'])
clients.push(client8)

let client9 = new Client(9, 'Tolya', 'Trubin', 'js@gmail.com', 0101, ['accumulator', 'lokal'])
clients.push(client9)

let client10 = new Client(10, 'kokos', 'kakushonok', 'koks@gmail.com', 0909, ['owu school', 'ukraine'])
clients.push(client10)


console.log(clients)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients)



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

function Car(model, producer, year, maximumSpeed, volume, ) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maximumSpeed = maximumSpeed;
    this.volume = volume;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }

    this.info = function() {
        console.log("model : ", this.model);
        console.log("producer : ", this.producer);
        console.log("year : ", this.year);
        console.log("max speed : ", this.maximumSpeed);
        console.log("Engine capacity : ", this.volume);

    }

    this.increaseMaxSpeed = function(newSpeed) {
        this.maximumSpeed += newSpeed;
    }

    this.changeYear = function(newValue) {
        this.year = newValue;
    }

    this.addDriver = function(driver) {
        this.driver = driver;
    }

}


let car1 = new Car("Mondeo", "Ford", 2011, 280, 2)

car1.drive()
car1.info()
car1.increaseMaxSpeed(15)
console.log(car1.maximumSpeed)
car1.changeYear(2018);
console.log(car1.year)
car1.addDriver({ name: "Artem", age: 17 })
console.log(car1.driver);








// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку