const man = {
  name: 'Aslanbek',
  lastname: 'Abubakarov',
  age: 21,
  growth: 185,
  Weight: 75,
  Log: 'Aslanbook@mail.ru',
  Pass: 'ismait3310',
  money: 10000,
  getIMT() {
    const IMT = man.growth / man.Weight
    return IMT
  },
  imtResult(res) {
    if (res < 26 && res > 17) {
      console.log('Вес в норме')
    } else if (res < 30 && res > 24) {
      console.log('Избыточный вес')
    } else if (res > 29) {
      console.log('Ожирение')
    } else {
      console.log('Зачем-то в задании рост разделили на вес(')
    }
  },
  giveMoney(num) {
    if (num >= man.money / 2) {
      console.log('Делахь, сайгах дац са оццал ахч')
    } else if (num < man.money / 2) {
      console.log(
        `Хьаэца хьай ${num}. Соьгахь диснаг х1ар ду: ${
          man.money - num
        }. Сих хьадалахь!`
      )
    }
  },
  lotteryNumber: 500,
}
const adress = {
  city: 'Grozny',
  street: 'shahter',
  house: 113,
}

const Bek = (par) => {
  if (par === man.Pass) {
    console.log(`Добро пожаловать, ${man.name}.Ваш логин ${man.Log}`)
  } else {
    console.log(`Указанный пароль ${par} не верен.Попробуй еще раз`)
  }
}

const lottery = Math.floor(Math.random() * 20000)

function lott() {
  if (man.lotteryNumber === lottery) {
    man.money = man.money + 1000000
    console.log('поздравляем вы выиграли!')
  } else {
    console.log('Вы проиграли, попробуйте еще раз')
  }
}
