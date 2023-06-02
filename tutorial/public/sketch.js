function setup(){
    let lat, lon, message ;
    let data ;
    let available = false ;

    if ("geolocation" in navigator) {
    console.log('available') ;
    available = true ;
    navigator.geolocation.getCurrentPosition(async (position) => {
    lat = position.coords.latitude ;
    lon = position.coords.longitude ;
    data = {lat, lon} ;
    document.getElementById('latitude').textContent = lat ;
    document.getElementById('longitude').textContent = lon ;
    })
    }

    else {
        available = false ;
        console.log('not available') ;
    }

    if(available){
        document.getElementById("submit").addEventListener("click", async () => {
        message = document.getElementById('favourite').value  ;
        video.loadPixels() ;
        const image64 = video.canvas.toDataURL() ;
        data.message = message ;
        data.image64 = image64 ;
        const options = {
            method : 'POST' , 
            body : JSON.stringify(data) ,
            headers :{
                'Content-Type' : 'application/json'
            }   
        } ;
        const response = await fetch('/api', options) ;
        const info = await response.json() ;
        console.log(info) ;
        });
    }
    noCanvas() ;
    const video = createCapture(VIDEO) ;
    video.size(320, 240) ;
}