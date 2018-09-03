// Table for output
var table = document.getElementsByTagName("table")[0];

// Add headings
table.innerHTML = '<thead><tr><th>Volume</th><th>Price Per Share</th><th>Transaction Cost</th><th>Total Cost</th><th>Total Volume Held</th><th>Moving Average</th><th>Profit/Loss</th></tr></thead><tbody></tbody>';

// Set volumes and prices
var volumes = [5000, 5500, 6300, 9000, 6000, 5000];
var price = [0.55, 0.58, 0.60, 0.63, 0.65, 0.70];

// Total running cost and volumes
var totalCost = 0;
var totalVolume = 0;

// Go to body of table
table = document.getElementsByTagName("tbody")[0];

// Loop for all headings
for(var i = 0; i < volumes.length; i++) {

    // New Row
    table.innerHTML += '<tr></tr>';

    // Select row
    var row = document.getElementsByTagName("tr")[i + 1];

    // Volume
    row.innerHTML += '<td>' + volumes[i] + '</td>';

    // Cost per share
    var costPerShare = +(Math.round(price[i] + "e+2")  + "e-2")
    row.innerHTML += '<td>$' + costPerShare.toFixed(2) + '</td>';

    // Transaction cost
    var transactionCost = +(Math.round(volumes[i] * price[i] + "e+2")  + "e-2");
    row.innerHTML += '<td>$' + transactionCost.toFixed(2) + '</td>';

    // Total cost
    totalCost += transactionCost;
    row.innerHTML += '<td>$' + totalCost.toFixed(2) + '</td>';

    // Total volume
    totalVolume += volumes[i];
    row.innerHTML += '<td>' + totalVolume + '</td>';

    // Moving average
    var movingAverage = totalCost / totalVolume;
    var movingAverageRound = +(Math.round(movingAverage + "e+4")  + "e-4");
    row.innerHTML += '<td>' + movingAverageRound.toFixed(4) + '</td>';

    // Profit
    var profit = 100 - (100 * movingAverage / costPerShare)
    profit = +(Math.round(profit + "e+7")  + "e-7")
    row.innerHTML += '<td>' + profit + '%</td>';
}