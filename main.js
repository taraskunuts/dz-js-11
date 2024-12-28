alert("Вибачте за затримку цього дз, у мене виникли труднощі з нормальним додаванням балансу і промпта")
const bankAccount = {
    ownerName: "Oleg",
    accountNumber: "UA1234567890",
    balance: 500,
    deposit(amount) {
      this.balance += amount
      alert(`Ваш новий баланс: ${this.balance} грн.`)
    },
    withdraw(amount) {
      if (amount > this.balance) {
        if (!confirm(`Недостатньо коштів! Ваш баланс стане від'ємним. Продовжити?`)) return
      }
      this.balance -= amount
      alert(`Ваш новий баланс: ${this.balance} грн.`)
    }
  };

  if (confirm("Натисніть 'OK', щоб поповнити рахунок, або 'Скасувати', щоб зняти кошти.")) {
    const amount = parseInt(prompt("Введіть суму для поповнення:"))
    if (amount > 0) {
      bankAccount.deposit(amount)
    } else {
      alert("Некоректна сума!")
    }
  } else {
    const amount = parseInt(prompt("Введіть суму для зняття:"))
    if (amount > 0) {
      bankAccount.withdraw(amount)
    } else {
      alert("Некоректна сума!")
    }
  }
//
//
//
//для дз з об'єктами буду використовувати 4 пропуски
const weather = {
    temperature: prompt('яка температура?'),
    humidity: 80,
    windSpeed: 10,
    isBelowZero() {
      return this.temperature < 0
    }
  };
  if (weather.isBelowZero()) {
    alert("Температура нижче 0 градусів Цельсія");
  } else {
    alert("Температура вище або дорівнює 0 градусів Цельсія")
}
//
//
//
//
const user = {
    name: "",
    email: "",
    password: "",
    login(inputEmail, inputPassword) {
      if (this.email === inputEmail && this.password === inputPassword) {
        alert("Логін успішний ласкаво просимо " + this.name )
      } else {
        alert("Неправильний email або пароль спробуйте ще раз")
      }
    }
  }
  user.name = prompt("Введіть ваше імя");
  user.email = prompt("Введіть ваш email")
  user.password = prompt("Введіть ваш пароль")
  const inputEmail = prompt("Для входу введіть ваш email")
  const inputPassword = prompt("Для входу введіть ваш пароль")
  user.login(inputEmail, inputPassword)
//
//
//
//
// const movie = {
//     title: "Inception",
//     director: "Крістофер Нолан",
//     year: 2010,
//     rating: 8.8,
//     isHighlyRated() {
//       return this.rating > 8
//     }
//   }
//   console.log("Назва:", movie.title)
//   console.log("Режисер:", movie.director)
//   console.log("Рік випуску:", movie.year)
//   console.log("Рейтинг:", movie.rating)
//   if (movie.isHighlyRated()) {
//     console.log("Рейтинг фільму вище 8: true")
//   } else {
//     console.log("Рейтинг фільму вище 8: false")
//   }
//ой