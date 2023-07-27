import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
// import { usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

let mug = makePottery("mug", 5, 4)
console.log(mug)
let plate = makePottery("plate", 10, 2)
console.log(plate)
let bowl = makePottery("bowl", 6, 3)
console.log(bowl)
let crockPot = makePottery("crock pot", 50, 8)
console.log(crockPot)
let dutchOven = makePottery("dutch oven", 40, 10)
console.log(dutchOven)


let cookedMug = firePottery(mug, 1500)
console.log(cookedMug)
let cookedPlate = firePottery(plate, 1800)
console.log(cookedPlate)
let cookedBowl = firePottery(bowl, 2201)
console.log(cookedBowl)
let cookedCrock = firePottery(crockPot, 2300)
console.log(cookedCrock)
let cookedOven = firePottery(dutchOven, 2199)
console.log(cookedOven)


toSellOrNotToSell(mug)
toSellOrNotToSell(plate)
toSellOrNotToSell(bowl)
toSellOrNotToSell(crockPot)
toSellOrNotToSell(dutchOven)
// console.log(usePottery())

let displayString = PotteryList()
console.log(displayString)

let targetHTML = document.querySelector(".potteryList")
targetHTML.innerHTML = displayString
