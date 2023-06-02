getData() ;
async function getData() {
    const response = await fetch('/api') ;
    const data = await response.json() ;
    console.log(data) ;
    for(item of data){
        const root = document.createElement('p') ;
        const geo = document.createElement('div') ;
        const mood = document.createElement('div') ;
        const time = document.createElement('div') ;
        const image = document.createElement('img') ;
        root.append(mood, geo, time, image) ;

        geo.textContent = `geo : latitude = ${item.lat} , longitude = ${item.lon} ` ;
        mood.textContent = `mood : ${item.message}` ;
        time.textContent = `time : ${item.timestamp}` ;
        image.src = item.image64 ;
        document.body.append(root) ;
    }
}