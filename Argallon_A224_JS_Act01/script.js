const btnCount = document.getElementById("btnCount")
const txtCounter = document.getElementById("txtCounter");

let count = 0;
// lambda function
btnCount.addEventListener("click", () => {
    // logic
    count = count + 1 // count++ // count += 1
    txtCounter.textContent = count;
    console.log(count)
    console.log("Clicked")
})