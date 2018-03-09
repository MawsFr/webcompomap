Creating a <cc-map></cc-map> Web Component allowing to add a Google map and to get and to set its properties through a custom API

To test the API, add an id to the web component :
```
<cc-map zoom="12" id="my-map"></cc-map>  
```

To change zoom level, simply change the zoom value: 
```
// before
<cc-map zoom="12" id="my-map"></cc-map>  
// after
<cc-map zoom="8" id="my-map"></cc-map>   
```

To change the GPS coordinates and map title, open a console:
```
myMap = document.getElementById('my-map');
myMap.geoData = {center:{lat:48.4, lng:-4.4833}, zoom: 12, title: 'Brest'}
```

To get new data :
```
myMap.geoData 
// result
{center: {…}, zoom: 12, title: "Brest"}
```


Ajouter un marker :
myMap = document.getElementById('my-map');
myMap.mostRecentMarker = { position: { lat: 48.1145, lng: -1.6812 }, content: 'Place Sainte Anne'};
myMap.mostRecentMarker = { position: { lat: 48.1128, lng: -1.6781 }, content: 'Parlement de Bretagne'};
