import * as React from 'react';
import {useState, useMemo} from 'react';
import {render} from 'react-dom';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';



const TOKEN = 'pk.eyJ1IjoicGF0ZWx2NzEyIiwiYSI6ImNsYjBjeXptYjBhd3UzcG1sZTlsanFyajkifQ.lKcVnbgW_y8d17HJXCMK2w'; // Set your mapbox token here

export default function Directory() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [popupInfo2, setPopupInfo2] = useState(null);
  const [popupInfo3, setPopupInfo3] = useState(null);
  



  return (
    <>

      <Map
        initialViewState={{
          latitude: 33.776,
          longitude: -84.398,
          zoom: 16,
          bearing: 0,
          pitch: 0
        }}
        style={{width: "100%", height: 750}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={"pk.eyJ1IjoicGF0ZWx2NzEyIiwiYSI6ImNsYjBjeXptYjBhd3UzcG1sZTlsanFyajkifQ.lKcVnbgW_y8d17HJXCMK2w"}
      >

        <Marker /* Ferst Center*/
        longitude={-84.3917}
        latitude={33.7818}
        anchor="bottom"
        onClick={e => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          setPopupInfo3("hello3");
        }}
        >
        </Marker> 
        <Marker /* KLAUS*/
        longitude={-84.3888}
        latitude={33.78384}
        anchor="bottom"
        onClick={e => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          setPopupInfo2("hello2");
        }}
        >
        </Marker>
        <Marker /* Tech green */
        longitude={-84.390}
        latitude={33.782}
        anchor="bottom"
        onClick={e => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          setPopupInfo("hello");
        }}
        >
        </Marker>

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={-84.3972}
            latitude={33.7838}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <p>party on tech green</p>
            </div>
          </Popup>
        )}

        {popupInfo2 && (
          <Popup
            anchor="top"
            longitude={-84.396}
            latitude={33.786}
            onClose={() => setPopupInfo2(null)}
          >
            <div>
              <p>studying at klaus</p>
            </div>
          </Popup>
        )}
        {popupInfo3 && (
          <Popup
            anchor="top"
            longitude={-84.4}
            latitude={33.7844}
            onClose={() => setPopupInfo3(null)}
          >
            <div>
              <p>dancing at ferst</p>
            </div>
          </Popup>
        )}

      </Map>
    </>
  );
}

export function renderToDom(container) {
  render(<Directory />, container);
}