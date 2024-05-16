mapboxgl.accessToken = 'pk.eyJ1IjoieWw5ODUwIiwiYSI6ImNsdXZndjQ2aDAzY20ycW8zeWxla3NoNnkifQ.2i00R3I8OIwqPtyqyInH9A';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-74.0060, 40.7128], // starting position [lng, lat]
    zoom: 10, // starting zoom
    maxBounds: [[-74.259, 40.477], [-73.7004, 40.9176]] // Set bounds to NYC area
});

const locations = [
    //Museums
    {
        lng: -73.978271,
        lat: 40.761509,
        title: 'The Museum of Modern Art',
        description: 'The Museum of Modern Art is an art museum located in Midtown Manhattan, New York City.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MoMa_NY_USA_1.jpg/250px-MoMa_NY_USA_1.jpg',
        address: '11 W 53rd St, New York, NY 10019',
        category: 'Museums'
    },
    {
        lng: -73.974113,
        lat: 40.781303,
        title: 'American Museum of Natural History',
        description: 'The American Museum of Natural History is a natural history museum on the Upper West Side of Manhattan in New York City.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA-NYC-American_Museum_of_Natural_History.JPG/290px-USA-NYC-American_Museum_of_Natural_History.JPG',
        address: '200 Central Park W, New York, NY 10024',
        category: 'Museums'
    },
    {
        lng: -73.986700,
        lat: 40.739320,
        title: 'Fotografiska',
        description: 'The Fotografiska gallery in Stockholm, Swedens New York branch resides in the heart of the Flatiron District.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fotografiska_New_York_%2851710073919%29.jpg/440px-Fotografiska_New_York_%2851710073919%29.jpg',
        address: '281 Park Avenue South, New York City, 10010',
        category: 'Museums'
    },
    {
        lng: -73.962590,
        lat: 40.779170,
        title: 'Metropolitan Museum of Art',
        description: 'The Metropolitan Museum of Art, colloquially referred to as the Met,[a] is an encyclopedic art museum in New York City. It is the largest art museum in the Americas。',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/480px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg',
        address: '1000 5th Ave, New York',
        category: 'Museums'
    },
    {
        lng: -74.009369,
        lat: 40.739498,
        title: 'Whitney Museum of American Art',
        description: 'The Whitney Museum of American Art, known informally as "The Whitney", is a modern and contemporary American art museum located in the Meatpacking District and West Village neighborhoods.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Whitney_Museum_of_American_Art_%2849051573133%29.jpg/500px-Whitney_Museum_of_American_Art_%2849051573133%29.jpg',
        address: '99 Gansevoort Street, Lower Manhattan, New York City',
        category: 'Museums'
    },
    //Landmarks
    {
        lng: -74.044502,
        lat: 40.689247,
        title: 'Statue of Liberty',
        description: 'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, United States.',
        image: 'https://github.com/JulyZhou99/CityMap-Website/blob/main/img_test.png?raw=true',
        address: 'Liberty Island, New York, NY 10004',
        category: 'Landmarks'
    },
    {
        lng: -74.013382,
        lat: 40.712742,
        title: 'One World Trade Center',
        description: 'One World Trade Center is the tallest building in the United States, the tallest building in the Western Hemisphere, and the seventh-tallest in the world.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/One_World_Trade_Center_%28cropped_9_to_16%29.jpg/250px-One_World_Trade_Center_%28cropped_9_to_16%29.jpg',
        address: '285 Fulton St, New York, NY 10007',
        category: 'Landmarks'
    },
    {
        lng: -73.985428,
        lat: 40.748817,
        title: 'Empire State Building',
        description: 'The Empire State Building is a 102-story Art Deco skyscraper in the Midtown South neighborhood of Manhattan.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St., New York, NY 10001',
        category: 'Landmarks'
    },
    {
        lng: -73.985130,
        lat: 40.758896,
        title: 'Times Square',
        description: 'Times Square is a major commercial intersection, tourist destination, entertainment hub, and neighborhood in Midtown Manhattan.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
        address: 'Manhattan, NY 10036',
        category: 'Landmarks'
    },
    {
        lng: -73.977410,
        lat: 40.752370,
        title: 'Grand Central Terminal',
        description: 'Grand Central Terminal, is a commuter rail terminal located at 42nd Street and Park Avenue in Midtown Manhattan, New York City.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Image-Grand_central_Station_Outside_Night_2.jpg/298px-Image-Grand_central_Station_Outside_Night_2.jpg',
        address: '89 East 42nd Street, Manhattan, New York City',
        category: 'Landmarks'
    },
    //Parks
    {
        lng: -73.968285,
        lat: 40.785091,
        title: 'Central Park',
        description: 'Central Park is an urban park between the Upper West Side and Upper East Side neighborhoods of Manhattan in New York City that was the first landscaped park in the United States.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/300px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg',
        address: 'New York, NY 10024',
        category: 'Parks'
    },
    {
        lng: -74.016678,
        lat: 40.703564,
        title: 'Battery Park',
        description: 'The Battery, formerly known as Battery Park, is a 25-acre public park located at the southern tip of Manhattan Island in New York City facing New York Harbor.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Battery_Park.JPG/300px-Battery_Park.JPG',
        address: 'New York, NY 10004',
        category: 'Parks'
    },
    {
        lng: -73.983559,
        lat: 40.753742,
        title: 'Bryant Park',
        description: 'Bryant Park is a 9.6-acre public park located in the New York City borough of Manhattan.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/325px-New-York_-_Bryant_Park.jpg',
        address: 'New York, NY 10018',
        category: 'Parks'
    },
    {
        lng: -74.004720,
        lat: 40.747920,
        title: 'High Line',
        description: 'The High Line is a 1.45-mile-long (2.33 km) elevated linear park, greenway, and rail trail created on a former New York Central Railroad spur on the west side of Manhattan in New York City.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/AHigh_Line_Park%2C_Section_1a.jpg/580px-AHigh_Line_Park%2C_Section_1a.jpg',
        address: 'New York, NY 10011',
        category: 'Parks'
    },
    {
        lng: -73.998077,
        lat: 40.730289,
        title: 'Washington Square Park',
        description: 'Washington Square Park is a 9.75-acre public park in the Greenwich Village neighborhood. One of the best known of New York Citys public parks, it is an icon as well as a meeting place and center for cultural activity.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Washington_Square_Arch-Isabella.jpg/600px-Washington_Square_Arch-Isabella.jpg',
        address: 'Washington Square, New York, NY 10012',
        category: 'Parks'
    },
    //Restaurants
    {
        lng: -73.98817,
        lat: 40.72214,
        title: 'Sami & Susu',
        description: 'Sami & Sasu gained a cult following for its Mediterranean flavors and family recipe inspiration after opening in 2020.',
        image: 'https://images.squarespace-cdn.com/content/v1/5ece9deeb32b8a7d6b903abb/01897d40-36cb-42bb-b56e-858b18118c1d/S_S+Dec+115848.jpeg?format=1500w',
        address: '190 Orchard St, New York, NY 10002',
        category: 'Restaurants'
    },
    {
        lng: -73.99977,
        lat: 40.71679,
        title: 'Nha Trang One',
        description: 'Have you ever craved a big warm bowl of pho or crispy spring rolls? Transport yourself to Vietnam by visiting this hidden gem located in Chinatown.',
        image: 'https://i0.wp.com/kubiti.org/wp-content/uploads/2023/03/image-16.png?resize=1024%2C576&quality=100&ssl=1',
        address: '87 Baxter St, New York, NY 10013',
        category: 'Restaurants'
    },
    {
        lng: -73.98274,
        lat: 40.74438,
        title: 'Atomix',
        description: 'Ever wondered what it would be like to dine at the best ranked restaurant in the country? Atomix it is! Atomix offers high-end Korean cuisine through a unique tasting menu experience.',
        image: 'https://pyxis.nymag.com/v1/imgs/e4a/ebe/43eca43d096042466947b2378c437cf1e1-atomix-01.rsocial.w1200.jpg',
        address: '104 E 30th St, New York, NY 10016',
        category: 'Restaurants'
    },
    {
        lng: -73.987590,
        lat: 40.733270,
        title: 'Joes Pizza',
        description: 'The restaurant is known for serving a classic New York street-style pizza and has been called a "Greenwich Village institution".',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Joe%27s_Pizza%2C_Greenwich_Village%2C_NYC.jpg/500px-Joe%27s_Pizza%2C_Greenwich_Village%2C_NYC.jpg',
        address: '150 East 14th Street, New York, NY 10003',
        category: 'Restaurants'
    },
    {
        lng: -73.981667,
        lat: 40.761421,
        title: 'Le Bernardin',
        description: 'Elite French restaurant offers chef Eric Riperts refined seafood, expert service & luxurious decor.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Interior_of_Le_Bernardin.jpg/500px-Interior_of_Le_Bernardin.jpg',
        address: '155 W 51st St, New York, NY 10019',
        category: 'Restaurants'
    },
    //SubwayStations
    {
        lng: -73.973347,
        lat: 40.764811,
        title: '5th Ave/59 St',
        description: 'Close to Cetral Park',
        address: '10 E 53rd St, New York, NY 10022',
        category: 'SubwayStations'
    },
    {
        lng: -73.982368,
        lat: 40.768021,
        title: '59 St-Columbus Circle',
        description: 'Close to Cetral Park',
        address: 'Columbus Cir, New York, NY 10023',
        category: 'SubwayStations'
    },
    {
        lng: -73.971550,
        lat: 40.781190,
        title: '81 St Station',
        description: 'Close to American Museum of Natural History',
        address: 'West 81st Street & Central Park West, New York, NY',
        category: 'SubwayStations'
    },
    {
        lng: -73.979080,
        lat: 40.761800,
        title: '6th Ave & W 53rd St',
        description: 'Close to Museum of Modern Art & Le Bernardin',
        address: '6th Ave & W 53rd St, New York, NY',
        category: 'SubwayStations'
    },
    {
        lng: -73.986310,
        lat: 40.739958,
        title: '23 St',
        description: 'Close to Fotografiska',
        address: '23 St, New York, NY',
        category: 'SubwayStations'
    },
    {
        lng: -74.002983,
        lat: 40.739670,
        title: '14 St / 8 Av',
        description: 'Close to Whitney Museum of American Art & High Line',
        address: '300 W 14th St, New York, NY 10014',
        category: 'SubwayStations'
    },
    {
        lng: -73.959846,
        lat: 40.773640,
        title: '77 St',
        description: 'Close to The Metropolitan Museum of Art',
        address: 'E 77th St, New York, NY 10075',
        category: 'SubwayStations'
    },
    {
        lng: -73.992618,
        lat: 40.730320,
        title: '8th St - NYU',
        description: 'Close to Washington Square Park',
        address: '8th St, New York, NY 10003',
        category: 'SubwayStations'
    },
];

// Store all markers by category for easy access
const markersByCategory = {
    'Museums': [],
    'Landmarks': [],
    'Parks': [],
    'Restaurants': [],
    'SubwayStations': []
};

locations.forEach(location => {
    const el = document.createElement('div');
    el.className = 'marker ' + location.category; // Single category

    const popupContent = `
        <div class="popup-content ${location.category}">
            <h3>${location.title}</h3>
            ${location.image ? `<img src="${location.image}" alt="${location.title}">` : ''}
            <p id="popup_des">${location.description}</p>
            <p id="popup_add"><strong>Address:</strong> ${location.address}</p>
        </div>`;

    const popup = new mapboxgl.Popup({
        offset: 25, // Helps position the popup away from the marker
        className: 'my-popup',
        maxWidth: location.category === 'SubwayStations' ? '150px' : '200px' // Smaller max width for subway stations
    }).setHTML(popupContent);

    const marker = new mapboxgl.Marker(el)
        .setLngLat([location.lng, location.lat])
        .setPopup(popup)
        .addTo(map);

    markersByCategory[location.category].push(marker);
});

function changeCategory(selectedCategory) {
    Object.keys(markersByCategory).forEach(category => {
        markersByCategory[category].forEach(marker => {
            const element = marker.getElement();
            if (selectedCategory === category) {
                element.style.visibility = 'visible'; // Show marker
            } else {
                element.style.visibility = 'hidden'; // Hide marker
                marker.getPopup().remove(); // Close the popup if it's open
            }
        });
    });

    // Hide all explanations
    document.querySelectorAll('.explanation').forEach(explanation => {
        explanation.style.display = 'none';
    });

    // Show the selected category explanation
    const explanationId = selectedCategory + 'Explanation';
    const explanationElement = document.getElementById(explanationId);
    if (explanationElement) {
        explanationElement.style.display = 'block';
    }

    if (selectedCategory === 'Museums') {
        document.getElementById('jumpBox').style.display = 'none';
    }
}

// Initially show nothing
changeCategory('');

map.on('popupopen', function (e) {
    var popup = e.popup;
    map.panTo(popup.getLngLat(), {
        duration: 500  // Smooth pan to the popup location
    });
});

function showAll() {
    Object.keys(markersByCategory).forEach(category => {
        markersByCategory[category].forEach(marker => {
            marker.getElement().style.visibility = 'visible'; // Show the marker
        });
    });

    // Hide all explanations
    document.querySelectorAll('.explanation').forEach(explanation => {
        explanation.style.display = 'none';
    });
}

// Function to remove the blur mask and show the jump box
function removeBlurMask() {
    document.getElementById('blurMask').style.display = 'none';
    document.getElementById('jumpBox').style.display = 'block';
}

// Add click event to jump box
document.getElementById('jumpBox').addEventListener('click', function () {
    document.getElementById('museumsTab').click();
    document.getElementById('jumpBox').style.display = 'none';
});