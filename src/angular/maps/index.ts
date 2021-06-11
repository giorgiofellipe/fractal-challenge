import angular from 'angular';
import api from '../../services/api';

import html from './maps.html'

const { L } = window as any;

function MapsComponentController($scope) {
  (function init() {
    const map = L.map('map').setView([-27.35280, -48.80190], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    async function loadPolygons() {
      const { data }: { data: Array<GeoCoord> } = await api.get('poligono.json');
      L.polygon(data.map(polygon => [polygon.lat, polygon.lng])).addTo(map);
    }
    loadPolygons();

    async function loadLines() {
      const { data }: { data: Array<GeoCoord> } = await api.get('linhas.json');
      L.polyline(data.map(line => [line.lat, line.lng]), { color: 'red' }).addTo(map);
    }
    loadLines();

    async function loadPoints() {
      const { data }: { data: Array<GeoPoint> } = await api.get('pontos.json');
      data.forEach(point => L.marker([point.lat_stt, point.lng_stt]).addTo(map));
    }
    loadPoints();

  })();
}

const MapsComponent = angular.module('app.components')
  .component('maps', {
    template: html,
    controller: MapsComponentController
  });


export default MapsComponent;