import Snack from "./snack.js";

export default class VendingMachine {
  constructor() {
    this.snacks = {
      a1: new Snack(),
      a2: new Snack(),
      a3: new Snack()

    },
      this.money = 0
  }
  addmoney() {
    this.money += .25

  }
}