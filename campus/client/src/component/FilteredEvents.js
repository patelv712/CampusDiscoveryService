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
import "./Events.css"
function FilteredEvents() {
    const [popupInfo, setPopupInfo] = useState(null);
    const [popupInfo2, setPopupInfo2] = useState(null);


const TOKEN = 'pk.eyJ1IjoicGF0ZWx2NzEyIiwiYSI6ImNsYjBjeXptYjBhd3UzcG1sZTlsanFyajkifQ.lKcVnbgW_y8d17HJXCMK2w'; // Set your mapbox token here

    function filter() {
        document.getElementById("green").classList.add("visible");
    };
    
  return (
    <div>
        <h1> Welcome to Filtered Events</h1>
        <button onClick={()=>{ filter() }}>Refresh Filters</button>
        <section> 
                <p>Event Name: {"party on tech green"}, Host Name: {"jain"}, Event Description: {"test"}, Event Location: {"tech green"}, Event Time: {"08:08 AM"}, Guest Capactity: {12}</p>
        </section>
        <section id="green" > 
                <p>Event Name: {"studying at klaus"}, Host Name: {"test"}, Event Description: {"test"}, Event Location: {"klaus"}, Event Time: {"12:12 AM"}, Guest Capactity: {12}</p>
        </section>
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
            id="green"
          >
            <div>
              <p>studying at klaus</p>
            </div>
          </Popup>
        )}

      </Map>
    </div>
  )
}

export default FilteredEvents