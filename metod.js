const phone = {
  brandnName: 'Apple',
  phoneModel: 'iphone 11',
  phoneMemory: 128,
  color: 'black',
  power: true,
  call: function call() {
    return console.log('Я звоню....')
  },
  batteryPower: 100,
  getBatteryPower() {
    return console.log(`Ваша зарядка ${batteryPower} %`)
  },
  isOn() {
    if (phone.power === true) {
      console.log('телефон включен')
    } else if (phone.power === false) {
      console.log('телефон выключен')
    }
  },
  switch() {
    if (phone.power === false) {
      return (phone.power = true)
    } else {
      if (phone.power === true) {
        return (phone.power = false)
      }
    }
  },
  sent: [
    { to: '+7919 555 23 11', time: '03:12', message: 'Сплю!' },
    { to: '+7377 656 21 21', time: '23:25', message: 'Д1авала?' },
  ],
  inbox: [{ from: '+7999 213 12 12', time: '20:12', message: 'Спишь?' }],
  sentMessage() {
    const mass = phone.inbox
    return mass.push({
      from: '+2124 312 48 24',
      time: '11:25',
      message: 'Все еще спишь?',
    })
  },
  clearInbox() {
    for (i = 0; i < phone.inbox.length; i++) {
      delete phone.inbox[i]
    }
  },
  clearSent() {
    for (i = 0; i < phone.sent.length; i++) {
      delete phone.sent[i]
    }
  },
}

phone.call = function call(name) {
  return console.log(`Я звоню ${name}`)
}
