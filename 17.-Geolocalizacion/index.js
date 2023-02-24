const casa = { lat: -12.041073, lng: -76.959883 };
const universidad = { lat: -12.057723391939797, lng: -77.08036874109746 };
const parque = { lat: -12.063062039071342, lng: -77.03516852708579 }

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
    center: casa,
    zoom: 12,
    });

    const markerCasa = new google.maps.Marker( {
        position: casa,
        map: map,
    });

    const markerUniversidad = new google.maps.Marker( {
        position: universidad,
        map: map,
    });

    const markerParque = new google.maps.Marker( {
        position: parque,
        map: map,
    });
}

window.initMap = initMap;