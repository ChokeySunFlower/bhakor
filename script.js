 </script>
  </button>
       <h1>This is a &lt;script&gt; tag example</h1>
    <p>Click the button to enter your name and see JavaScript in action!</p>

    <button onclick="greetUser()">I will say Tashi Delek to your visior</button>
    <script>
      // This function runs when the button is clicked
      function greetUser() {
        let name = prompt("What's your name? \n ཁྱེད་རང་གི་མིང་ལ་ག་རེ་རེད།");
        if (name) {
          alert("Tashi Delek བཀྲ་ཤིས་བདེ་ལེགས།, " + name + "! 👋");
        } else {
          alert("You didn't enter a name.");
        }
      }  
  
  <body>const map = L.map('map').setView([28.3949, 84.1240], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const tracePoints = [
      [29.653, 91.117],   // Lhasa
      [27.7172, 85.324],  // Kathmandu
      [32.219, 76.323]    // Dharamshala
    ];

    const pathLine = L.polyline(tracePoints, { color: 'red' }).addTo(map);
    
    map.fitBounds(pathLine.getBounds());

    L.marker(tracePoints[0]).addTo(map).bindPopup('Lhasa');
    L.marker(tracePoints[1]).addTo(map).bindPopup('Kathmandu');
    L.marker(tracePoints[2]).addTo(map).bindPopup('Dharamshala');
