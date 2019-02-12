var kilometers = prompt("Quanti kilometri desideri percorrere?");
var age = prompt("Quanti anni hai?");
var price = Number(kilometers) * 0.21;
var underage = price - price / 100 * 20;
var overage = price - price / 100 * 40;

if (age > 18 && age < 60 && kilometers > 0) {
  alert ("Il prezzo del biglietto è: " + price);
} else if (age <= 18 && kilometers > 0) {
  alert ("Il prezzo del biglietto è: " + underage);
} else if (age >= 60 && kilometers > 0) {
  alert ("Il prezzo del biglietto è: " + overage);
}
