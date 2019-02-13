//private
import VendingMachine from "../models/vendingMachine.js";
import Snack from "../models/snack.js";

//data here
let vm = new VendingMachine()
let krispy = new Snack('Rice Krispy', 1.50, 'a1')
let cheese = new Snack('Cheez-It', 2.00, 'a2')
let mix = new Snack('Trail Mix', 1.75, 'a3')
let snacky = new Snack('Trail Mix', 1.75, 'a3')
//public

export default class VendrService {
  constructor() {

  }
  get Money() {
    return vm.money
  }
  selectItem(itemNumber) {
    if (itemNumber == 'a1') {
      return krispy
    }
    if (itemNumber == 'a2') {
      return cheese
    }
    if (itemNumber == 'a3') {
      return mix
    }

  }
  AddMoney() {
    vm.addmoney()
  }

  buy(itemNumber) {
    let snack = this.selectItem(itemNumber)
    this.Money >= snack.price
    if (this.Money > snack.price) {
      return vm.money -= snack.price
    }

  }


}
