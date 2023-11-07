describe("Testing adding a marker to map", () => {
  test(
    "this should put a marker on the map",
  () => {


    const input = new Event("culc");

    const output = <Map
    initialViewState={{
      longitude: -84.3963,
      latitude: 33.7756,
      zoom: 15.9
    }}
    style={{width: "100%", height: 750}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <Marker longitude={-84.39619} latitude={33.78165} anchor="bottom" >
      <img src="https://assets.stickpng.com/images/588891e5bc2fc2ef3a1860a3.png" width="5%" height="5%"/>
    </Marker>
  </Map>;;

    expect(Directory(location="culc")).toEqual(output);

  });
});
