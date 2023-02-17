const ownerRadio = document.querySelector("#owner");
const renterRadio = document.querySelector("#renter");
const cusRenterRadio = document.querySelector("#cusRenter");
const subCusRenterRadio = document.querySelector("#subCusRenter");
var ownerRadioState = ownerRadio.checked;
var renterRadioState = renterRadio.checked;

ownerRadio.addEventListener('click', () => {
    console.log('Az eladó egy tulajdonos');

    ownerRadioState = !ownerRadioState;
    ownerRadio.checked = ownerRadioState;
})
renterRadio.addEventListener('click', () => {
    console.log('Az eladó eleve bérlő');
    renterRadioState = !renterRadioState;
    renterRadio.checked = renterRadioState;
})