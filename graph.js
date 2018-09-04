/*
 * Author      : Jackson Currie
 * Date        : 2018-09-04
 * Description : Display graph for controlling shares
 */

// Get graph
var ctx = document.getElementById('myGraph').getContext('2d');

// Create chart
var chart = new Chart(ctx, {

    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {

        // Lables on x axis
        labels: [],

        // Two lines
        datasets: [
            {
                label: "Price",
                borderColor: '#F00',
                fill: false,
                data: [],
                lineTension: 0
            },
            {
                label: "Average",
                borderColor: '#0F0',
                fill: false,
                data: [],
                lineTension: 0
            }
        ]
    },
});

// Remove data
var  removeData = () => {

    // Reset graph
    chart.data.datasets[0].data = [];
    chart.data.datasets[1].data = [];
    chart.data.labels = [];
    label = 0;

    // Update
    chart.update();
}

// Set label number
var label = 0;

// Add data
var addData = (price, average) => {
    label++;
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(price);
    chart.data.datasets[1].data.push(average);
    chart.update();
}