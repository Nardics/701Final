const map = L.map("iiif-map", {
    center: [0,0],
    crs: L.CRS.Simple,
    zoom:3,
});
const mappLayer = new L.tileLayer.iiif(
    "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:q524n368c/info.json"
).addTo(map);

map.on('click', function(e) {
    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
});



let text = document.getElementById('pageOn').textContent;
console.log(text);


function addInteraction(){
 

    const eventLatLng = [[-82,127], [-57, 327],[-263, 708], [-255, 588], [-317, 255], [-133, 641], [-310, 430], [-295, 323]]
    const eventZoom   = [2, 2, 3, 3, 3, 3, 3, 3]
    
    const desc = [`Text for the first page.`,

        `<h3>Title for second page</h3><p>Text for second page</p>`,
        `<h3>Page 3 title</h3><p>Page 3 content</p>`,
        `<h3>Page 4 title</h3><p>Page 4 content</p>`,
        `<h3>Page 4 title</h3><p>Page 4 content.</p>`,
        `<h3>Page 5 title</h3><p>Page 5 content.</p>`,
        `<h3>Page 6 title</h3><p>Page 6 content</p>`,
        `<h3>Page 7 title</h3><p>Page 7 content</p>`,
        // `This map reveals a snapshot in time of New England’s complex history and relationship between the colonists, 
        // indigenous communities, and the land.  <a href = “https://collections.leventhalmap.org/exhibits/25”> 
        // The Leventhal Map Center Collection online exhibition ‘America Transformed’ provides additional materials to 
        // learn more about the history of land dispossession in the United States</a>.`
    ];

    document
        .getElementById("next")
        .addEventListener("click", () => {
            let text = document.getElementById('pageOn').textContent;
            if(text < eventLatLng.length){n = parseInt(text) +1}
            else{n = 1}
            // var n = parseInt(text) + 1;
            map.flyTo(eventLatLng[n - 1], eventZoom[n - 1]);
            document.getElementById('pageOn').innerHTML = n;
            document.getElementById('desc').innerHTML = desc[n - 1];

            if(n == 8){
                document.getElementById('next').innerHTML = `&#8634;`
            }
            else{
                document.getElementById('next').innerHTML = `Next &raquo;`
            }
        });
}

addInteraction();
