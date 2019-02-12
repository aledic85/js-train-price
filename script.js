var kilometers = prompt("Quanti kilometri desideri percorrere?");
var age = prompt("Quanti anni hai?");
var price = Number(kilometers) * 0,21;
var underage = price / 100 * 20;
var overage = price / 100 * 40;

if (age > 18 && age < 60 && kilometers > 0) {
  alert ("Il prezzo del biglietto è: " + price);
}
if (age <= 18 && kilometers > 0) {
  alert ("Il prezzo del biglietto è: " + underage);
}
if (age >= 60 && kilometers > 0) {
  alert ("Il prezzo del biglietto è: " + overage);
}
