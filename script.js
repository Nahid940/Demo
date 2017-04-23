  google.charts.load('current', { 'packages': ['map'] });
    google.charts.setOnLoadCallback(drawMap);

    function drawMap() {
      var data = google.visualization.arrayToDataTable([

          ['Lat', 'Long', 'Name'],
          [22.00, 77.00,'Industry'],
          [35.00, 103.00,'Industry'],
          [38.00, 97.00,'Industry'],
          [36.2048,138.2529,'Industry'],
          [30.5595,22.9375,'Industry'],
         
      ]);

    var options = {
      showTooltip: true,
      showInfoWindow: true,
         zoom:10
    };
    

    var map = new google.visualization.Map(document.getElementById('map-canvas'));

    map.draw(data, options);
  };

		
   

    