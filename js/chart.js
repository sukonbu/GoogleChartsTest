// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'time');
  data.addColumn('number', 'value');
  data.addRows([
    [1, 1],
    [2, 20],
    [3, 5],
    [4, 50],
    [5, 30]
  ]);

  data.addRows([[6,100]]);


  //var data = new google.visualization.arrayToDataTable([
  //  ['Year','Sales','Expenses'],
  //  ['2004',  1000,      400],
  //        ['2005',  1170,      460],
  //        ['2006',  660,       1120],
  //        ['2007',  1030,      540]
  //]);


  // Set chart options
  var options = {'title':'ninki no kenkyusitsu',
                 'width':900,
                 'height':400};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}