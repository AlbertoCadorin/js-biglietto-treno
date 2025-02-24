// chiedere l'età del passeggiero
const myAge = prompt("Please enter your age");
console.log(myAge);
// chiedere quanti chilometri deve fare
const enterKm = prompt("Enter the km to be done");
console.log(enterKm);
// calcolare il prezzo del biglietto in base ai km
if (myAge>18 && myAge<65){
    const priceKm = (0.21);
    const tottPrice = priceKm * enterKm;
    const formattedPriceNormal = tottPrice.toFixed(2); 
    console.log(formattedPriceNormal);
// altrimenti se l'utente e minorenne applicare uno sconto del 20%
}else if (myAge<18) {
    const priceKm = (0.21);
    const tottPrice = priceKm * enterKm;
    const twentypercent = 20;
    const percentageKm = ((twentypercent / 100) * tottPrice);
    const priceDiscountMinor = tottPrice - percentageKm;
    const formattedPriceMinor = priceDiscountMinor.toFixed(2)
    console.log(formattedPriceMinor);
// altrimenti se l' utente e un over 65 applicare uno sconto del 40%  
}else if (myAge>65){
    const priceKm = (0.21);
    const tottPrice = priceKm * enterKm;
    const fortyPercent = 40;
    const fortyPercentKm = ((fortyPercent / 100) * tottPrice);
    const priceDiscountOver = tottPrice - fortyPercentKm;
    const formattedPriceOver = priceDiscountOver.toFixed(2)
    console.log(formattedPriceOver);
} 