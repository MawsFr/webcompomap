class CcMap extends HTMLElement {
    constructor() {
        super();       
    }
    
    connectedCallback() {
        console.log('cc-map added to the DOM');
        this.innerHTML = `
        <style>
        #map {
            height: 400px;
            width: 100%;
        }
        </style>
        <div id="map">
        </div>
        `;
        this._mapDiv = document.getElementById('map');        
        this._render();
    }

    _render() {
        if(!window.google) {
            console.log('Google maps NOT ready');
            return;
        }
        const rennes = {
            lat: 48.1173,
            lng: -1.6778
        };
        this._initMap(rennes);
    }

    _initMap(center) {
        var map = new window.google.maps.Map(this._mapDiv, {
            zoom: 12,
            center: center
        });
    }
} // end class
window.customElements.define('cc-map', CcMap);