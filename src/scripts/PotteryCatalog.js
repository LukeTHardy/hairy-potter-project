const inventory = []

// for me later: use more complex if statements?  && or || ?

export const toSellOrNotToSell = (object) => {
    if (object.weight >= 6 && object.cracked === false) {
        object.price = 40
        inventory.push(object)
    }
    else if (object.weight < 6 && object.cracked === false) {
        object.price = 20
        inventory.push(object)
    }
    return object
}

export const usePottery = () => {
    return inventory
}