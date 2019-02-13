//private
import VendrService from "./vendrService.js";
import Snack from "../models/snack.js";

let vendrService = new VendrService()

function drawBalance() {
  let funds = vendrService.Money
  document.getElementById('display').innerText = funds
}

function drawSnack(snack) {
  let template = `
  <h2>Item selected:${snack.name}</h2>
  <h2>price:$${snack.price}</h2>
  `
  let buytemplate = `
      <br></br>
    <button type="button" onclick="app.controllers.vendrController.buy('${snack.position}')">buy</button>
  `
  document.getElementById("buy").innerHTML = buytemplate
  document.getElementById('item').innerHTML = template

}

function drawMoneyTotal() {
  document.getElementById('display').innerHTML = vendrService.Money
}

function purchase() {
  document.getElementById('payment').innerText = "payment accepted"
  drawBalance()
}







//public
export default class VendrController {
  constructor() {
    drawBalance()
  }
  selectItem(itemNumber) {
    let snack = vendrService.selectItem(itemNumber)
    drawSnack(snack)
  }
  addMoney() {
    vendrService.AddMoney()
    drawMoneyTotal()
  }
  buy(itemNumber) {
    vendrService.buy(itemNumber)
    purchase()



  }


}