

const billTotalInputDiv = document.getElementById("billTotalInput")


const tipInputDiv = document.getElementById("tipInput")


const numberOfPeopleDiv = document.getElementById("numberOfPeople")


const perPersonTotalDiv = document.getElementById("perPersonTotal")


let noOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
    const billTotal = Number(billTotalInputDiv.value)
    const tipInput = Number(tipInputDiv.value)
    let tipPercent = tipInput/100;
    let tipAmt = tipPercent*billTotal
    let totalBill = (billTotal+tipAmt)/noOfPeople;
    perPersonTotalDiv.innerText = totalBill.toFixed(2)
}
const increasePeople = () => {
    noOfPeople++
    numberOfPeopleDiv.innerText = noOfPeople
    calculateBill()
}
const decreasePeople =() => {
    if(noOfPeople ==1){
        alert("You cannot go less than 1 !!")
        return
    }
    noOfPeople-=1;
    numberOfPeopleDiv.innerText = noOfPeople
    calculateBill()
}
