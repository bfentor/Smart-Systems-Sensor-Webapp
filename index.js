const button = document.getElementById("button")
const img = document.getElementById("img")
const value = document.getElementById("value")


var current = 0

for(var i = 0; i < 10; i++){
    current++
}

if (current > 3){
    img.src = "/assets/spilled_cup.png"
    img.scale(current)
}


value.innerText = current + "m/s^2"


button.addEventListener("click", (e) => {
    console.log("Button clicked")
});


var dataset = [0, 1, 1.1, 1.3, 1.6, 2, 3, 4]
const chartData = {
    labels: [0, 0, 0, 0, 0, 0, 0, 0],
    datasets: [0, 1, 1.1, 1.3, 1.6, 2, 3, 4]
}
console.log(chartData)

const chart = new frappe.Chart("#chart", {
        data: chartData,
        type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
        height: 200,
        colors: ['#f45a5fff']
})