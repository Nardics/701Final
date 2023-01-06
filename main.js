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
    
    const desc = [`The cartographer Chase constructed his map some five years after the conclusion of WWII in 1945, and the formation
    of the United Nations. <a href="https://www.archives.gov/milestone-documents/united-nations-charter">The United Nations </a>itself was formed
    in response to what America and her allies considered the Axis Powers. These were namely German, Italy and Japan.
    <p> Througout this period and beyond, there has been several episodes in World History which play on the played on the 
    theme of "Us vs Them", as it relates to differing political ideologies. The map author chooses to employ <a href = "https://en.wikipedia.org/wiki/Yin_and_yang"> Yin and Yang</a> to symbolise
    these tensions that would continue to orient the rest of the world to the ideological battles that would continue to play out.`,

        `<h3>Title for second page</h3><p>Text for second page</p>`,
        `<h3>Page 3 title</h3><p>Page 3 content</p>`,
        `<h3>Page 4 title</h3><p>Page 4 content</p>`,
        `<h3>Page 4 title</h3><p>Page 4 content.</p>`,
        `<h3>Page 5 title</h3><p>Page 5 content.</p>`,
        `<h3>Page 6 title</h3><p>Page 6 content</p>`,
        `<h3>Page 7 title</h3><p>Page 7 content</p>`,
        
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
