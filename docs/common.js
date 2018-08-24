
var markerFound = function(){
    if(document.querySelector("a-marker").object3D.visible == true) {
        document.getElementById('marker-found-label').style.display = "block"
        console.log("MarkerFound")
    } else {
        document.getElementById('marker-found-label').style.display = "none"
    }
} 
setInterval(markerFound, 100);

