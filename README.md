# [Component composition  Slot props](https://svelte.dev/tutorial/context-api)

The context API provides a mechanism for components to 'talk' to each other without passing around data and functions as props, or dispatching lots of events. It's an advanced feature, but a useful one.

Take this example app using a [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/overview/) map. We'd like to display the markers, using the `<MapMarker>` component, but we don't want to have to pass around a reference to the underlying Mapbox instance as a prop on each component.

There are two halves to the context API — `setContext` and `getContext`. If a component calls `setContext(key, context)`, then any _child_ component can retrieve the context with `const context = getContext(key)`.

Let's set the context first. In `Map.svelte`, import `setContext` from `svelte` and `key` from `mapbox.js` and call `setContext`:

```js
import { onDestroy, setContext } from 'svelte';
import { mapbox, key } from './mapbox.js';

setContext(key, {
  getMap: () => map
});
```

The context object can be anything you like. Like [lifecycle functions](https://svelte.dev/tutorial/onmount), `setContext` and `getContext` must be called during component initialisation. Calling it afterwards - for example inside `onMount` - will throw an error. In this example, since `map` isn't created until the component has mounted, our context object contains a `getMap` function rather than `map` itself.

On the other side of the equation, in `MapMarker.svelte`, we can now get a reference to the Mapbox instance:

```js
import { getContext } from 'svelte';
import { mapbox, key } from './mapbox.js';

const { getMap } = getContext(key);
const map = getMap();
```

The markers can now add themselves to the map.

> A more finished version of `<MapMarker>` would also handle removal and prop changes, but we're only demonstrating context here.

## Context keys

In `mapbox.js` you'll see this line:

```js
const key = Symbol();
```

Technically, we can use any value as a key — we could do `setContext('mapbox', ...)` for example. The downside of using a string is that different component libraries might accidentally use the same one; using [symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), on the other hand, means that the keys are guaranteed not to conflict in any circumstance, even when you have multiple different contexts operating across many component layers, since a symbol is essentially a unique identifier.

## Contexts vs. stores

Contexts and stores seem similar. They differ in that stores are available to _any_ part of an app, while a context is only available to _a component and its descendants_. This can be helpful if you want to use several instances of a component without the state of one interfering with the state of the others.

In fact, you might use the two together. Since context is not reactive, values that change over time should be represented as stores:

```js
const { these, are, stores } = getContext(...);
```

## NOTE

### BUG

```
map 정보는 가져오나, rendering 안됨
```

### Install

```bash
mpm i dotenv
npm i mapbox-gl
```

### get Token

```
https://docs.mapbox.com/help/glossary/access-token/
```

Full Name: `Moon In Learn`
Work Email: `mooninlearn@gmail.com`
Username: `mooninlearn`
Password: `A*********!`


Payment Information

`NHCard CHECK`

## https://docs.mapbox.com/mapbox-gl-js/guides/

## https://github.com/beyonk-group/svelte-mapbox


## .env
https://velog.io/@aseungbo/0929-Uncaught-ReferenceError-process-is-not-defined-error-muw77bbz


## chrome 설정 변경

https://browserhelp.com/browser-does-not-support-mapbox-gl/

## svelte-mapbox
https://www.npmjs.com/package/@beyonk/svelte-mapbox



## CODES
<!-- 
  // GOOGLE MAP
	<script>
  import { onMount } from "svelte";

  // init google maps
  onMount(async () => {
    let google = window.google;
    let map = document.getElementById("map-canvas");
    let lat = map.getAttribute("data-lat");
    let lng = map.getAttribute("data-lng");

    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#ed8936" }, { visibility: "on" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Hello World!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Notus Svelte</h2>' +
      "<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
</script>

<div
  id="map-canvas"
  class="relative w-full rounded h-600-px"
  data-lat="40.748817"
  data-lng="-73.985428"
></div> -->

<!-- 4. SVELTE-MAPBOX-GL

<script>
  import {
    Map,
    Marker,
    NavigationControl,
    Popup
  } from "svelte-mapbox-gl";
	const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
	const coordinates = { lat: 48, lng: 3 };
</script>

<Map
  accessToken={token}
  style="mapbox://styles/mapbox/streets-v11"
  center={coordinates}
  zoom={10}>
  <NavigationControl />
  <Marker {coordinates}>
    <Popup>I'm a popup attached to a marker!</Popup>
  </Marker>
</Map> -->

<!-- 3. SVELTE-MAPBOX 2

<script>
  import { Map, Geocoder, Marker, controls } from '@beyonk/svelte-mapbox'
	import Earthquakes from './Earthquakes.svelte' // custom component
	const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  const { GeolocateControl, NavigationControl, ScaleControl } = controls

  // Usage of methods like setCenter and flyto
  mapComponent.setCenter([lng,lat],zoom) // zoom is optional
  mapComponent.flyTo({center:[lng,lat]}) // documentation (https://docs.mapbox.com/mapbox-gl-js/example/flyto)

  // Define this to handle `eventname` events - see [GeoLocate Events](https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol-events)
  function eventHandler (e) {
    const data = e.detail
    // do something with `data`, it's the result returned from the mapbox event
  }
</script>

<Map
  accessToken={token}
  bind:this={mapComponent}
  on:recentre={e => console.log(e.detail.center.lat, e.detail.center.lng) }
  options={{ scrollZoom: false }}
>
  <Earthquakes /> // Any custom component you create or want here - see marker example
  <Marker lat={someLat} lng={someLng} color="rgb(255,255,255)" label="some marker label" popupClassName="class-name" /> // built in Marker component
  <NavigationControl />
  <GeolocateControl options={{ some: 'control-option' }} on:eventname={eventHandler} />
  <ScaleControl />
</Map>


<style>
    :global(.mapboxgl-map) {
        height: 200px;
    }
</style> -->

<!-- 
2. SVELTE-MAPBOX 1
<script>
  import { Map, Marker } from '@beyonk/svelte-mapbox'
  let mapComponent
	const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
	console.log(token)

	function onReady() {
    mapComponent.flyTo({center:[40.7127281,-74.0060152]}) 
	}
</script>

<Map accessToken={token} 
	style="mapbox://styles/mapbox/outdoors-v11"
  bind:this={mapComponent} 
  on:ready={onReady}
>
	 <Marker lat=-74.0060152 lng=40.7127281 label="NYC" />
</Map> -->