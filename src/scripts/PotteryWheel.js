let keyValue = 1

export const makePottery = (shape, weight, height) => {
    const clayObject = {
        id: keyValue,
        shape: shape,
        weight: weight,
        height: height
    }
    keyValue++
    return clayObject
}


// export const makePottery = (shape, weight, height) => {
//     const clayObject = {
//         id: 0,
//         shape: "",
//         weight: 0,
//         height: 0
//     }
//         for (const property in clayObject) {
//             if (clayObject[property] === "id") {
//                 for (let i = 0; i < clayObject[property]; i++) {
//                     clayObject[property] = i
//                 }
//             }
//         }
//         for (const property in clayObject) {
//             if (clayObject[property] === "shape") {
//                 clayObject[property] = shape
//             }
//         }
//         for (const property in clayObject) {
//             if (clayObject[property] === "weight") {
//                 clayObject[property] = weight
//             }
//         }
//         for (const property in clayObject) {
//             if (clayObject[property] === "height") {
//                 clayObject[property] = height
//             }
//         }
//     return clayObject
// }