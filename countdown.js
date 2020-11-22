// Como usar
// Primeiro você deve importar a Classe Countdown
// import Countdown from './countdown.js';
// Depois você deve declarar o Objeto Countdown em seu projeto
// const diasParaONatal = new Countdown('24 December 2020 23:59:50 GMT-0300');

export default class Countdown {
  constructor (futureDate) {
    this._futureDate = new Date(futureDate)
  }

  get _timeStampDiff () {
    return this._futureDate.getTime() - new Date().getTime()
  }

  get days () {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000))
  }

  get hours () {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000))
  }

  get minutes () {
    return Math.floor(this._timeStampDiff / (60 * 1000))
  }

  get seconds () {
    return Math.floor(this._timeStampDiff / 1000)
  }

  get total () {
    const days = this.days
    const hours = this.hours % 24
    const minutes = this.minutes % 60
    const seconds = this.seconds % 60

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}

const natal = new Countdown('25 December 2022 23:59:50 GMT-0300')
console.log(natal.total)
