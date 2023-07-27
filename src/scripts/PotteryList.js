import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    let HTMLstring = ""
    let inventory = usePottery()
    for (let object of inventory) {
        HTMLstring += `<section class="pottery" id="pottery--${object.id}">
        <h2 class="pottery__shape">${object.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${object.weight} grams and is ${object.height} cm in height
        </div>
        <div class="pottery__price">Price is $${object.price}</div>
      </section>`
    }
    return HTMLstring
}

// {/* <section class=\"pottery\" id=\"pottery--2\"><h2 class=\"pottery__shape\">Ornament</h2><div class=\"pottery__properties\">Item weighs 2 grams and is 5 cm in height</div><div class=\"pottery__price\">Price is $20</div></section><section class=\"pottery\" id=\"pottery--3\"><h2 class=\"pottery__shape\">Platter</h2><div class=\"pottery__properties\">Item weighs 7 grams and is 2 cm in height</div><div class=\"pottery__price\">Price is $40</div></section> */}