import mapbox from 'mapbox-gl';
// import mapbox from 'mapbox';

// https://docs.mapbox.com/help/glossary/access-token/
// https://velog.io/@aseungbo/0929-Uncaught-ReferenceError-process-is-not-defined-error-muw77bbz
mapbox.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const key = Symbol();
// console.log('key', key);
export { mapbox, key };