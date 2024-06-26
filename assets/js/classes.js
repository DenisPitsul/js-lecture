// function User1(name, surname, age, isMale, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
// }
// // в прототипі - для екземплярів
// User1.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName;
// };

// // статичний метод - для функції конструктора
// User1.isUser = function (obj) {
//     return obj instanceof User1;
// };

// const user1 = new User1(
//     "jack",
//     "wilsher",
//     23,
//     true,
//     "test@SpeechGrammarList.com",
//     true
// );

// class User {
//     constructor(name, surname, age, isMale, email, isSubscribed) {
//         this._name = name;
//         this._surname = surname;
//         this.age = age;
//         this._isMale = isMale;
//         this._email = email;
//         this._isSubscribed = isSubscribed;
//     }
//     getFullName() {
//         return `${this._name} ${this._surname}`;
//     }
//     // get fullName() {
//     //     return `${this._name} ${this._surname}`;
//     // }
//     set age(value) {
//         if (typeof value !== "number") {
//         throw new TypeError("age must be number");
//         }
//         if (!Number.isInteger(value) || value < 0 || value > 150) {
//         throw new RangeError("age must be nonnegative integer");
//         }
//         this._age = value;
//     }
//     get age() {
//         return this._age;
//     }
//     static isUser(obj) {
//         return obj instanceof User;
//     }
// }
// try {
//     // екземпляр / інстанс

//     const user2 = new User(
//         "jack",
//         "wilsher",
//         23,
//         true,
//         "test@SpeechGrammarList.com",
//         true
//     );
//     console.log(user2.getFullName());
//     console.log(User.isUser(user2));
//     console.log("user2 :>> ", user2.age); // age()
//     user2.age = 23; // age(-23)
// } catch (err) {
//     console.log("err :>> ", err);
// }

// class Phone {
//     constructor(brand, model, color, price, year) {
//         this._brand = brand;
//         this._model = model;
//         this.color = color;
//         this._price = price;
//         this._year = year;
//     }

//     get getPhoneAge() {
//         return new Date().getFullYear() - this._year;
//     }

//     set color(value) {
//         const COLORS = ['white', 'red', 'black', 'yellow', 'green', 'blue', 'grey'];
//         if(COLORS.includes(value)) {
//             this._color = value;
//         } else {
//             throw RangeError('Unsupported color');
//         }
//     }

//     render() {
//         document.write(`
//             <article>
//                 <h2>Brand: ${this._brand}</h2>
//                 <p>Model: ${this._model}</p>
//                 <p>Color: ${this._color}</p>
//                 <p>Price: ${this._price}$</p>
//                 <p>Year: ${this._year}</p>
//             </article>
//         `);
//     }
// }

// try {
//     const phone = new Phone('Apple', 'IPhone 12', 'black', 1000, 2021);
//     console.log('Phone age:', phone.getPhoneAge);
//     phone.color = 'white';
//     phone.render();
// } catch(err) {
//     console.log('err -> ', err);
// }

class User {
    constructor(name, surname, age, isMale, email) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isMale = isMale;
        this.email = email;
        this.isBanned = false;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

const user = new User("jack", "wilsher", 23, true, "test@SpeechGrammarList.com");

class Moderator extends User {
    constructor(name, surname, age, isMale, email, permission) {
        super(name, surname, age, isMale, email);
        this.permission = permission;
    }

    sendMessage(user, message) {
        return `Moderator ${this.getFullName()} sent message "${message}" to user ${user.getFullName()}`;
    }
}

const moderator = new Moderator("Mod", "Modovich", 23, true, "test@test.com", { canRead: true, canWrite: true });

document.write(moderator.sendMessage(user, 'Your message is beautiful'));

class Admin extends Moderator {
  constructor(name, surname, age, isMale, email, permission, category) {
    super(name, surname, age, isMale, email, permission);
    this._category = category;
  }

  ban(user) {
    user.isBanned = true;
  }

  unban(user) {
    user.isBanned = false;
  }

  // перевизначення
  sendMessage(user, message) {
    return `Administrator ${this.getFullName()} send message "${message}" to user ${user.getFullName()}`;
  }
}

const admin1 = new Admin(
  "Admin",
  "Adminovych",
  25,
  false,
  "test@test.com",
  { canRead: true, canWrite: true },
  1
);

admin1.ban(user1);
console.log(user1.isBanned);
admin1.unban(user1);
console.log(user1.isBanned);

console.log(admin1.getFullName());
document.write(`<p>${admin1.sendMessage(user1, "blablabla")}</p>`);