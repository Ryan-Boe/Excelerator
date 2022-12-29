function handleClick() {
    console.log("clicked")
    
    const currentCash = localStorage.getItem("money")
    const currentCashAsInt = parseInt(currentCash)
    const currentCashAsIntIncrement = currentCashAsInt + 1
    
    localStorage.setItem("money", currentCashAsIntIncrement)
    
    console.log(localStorage.getItem("money"))

    document.getElementById("cash").innerHTML = currentCashAsIntIncrement
    
}

function initializeState() {

    if (localStorage.getItem("money") == null) {
        const money = 0
        localStorage.setItem("money", money)
        document.getElementById("cash").innerHTML = money
    } else {
        document.getElementById("cash").innerHTML = localStorage.getItem("money")
    }

}