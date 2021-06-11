import angular from 'angular';

import html from './home.html'

const HomeComponent = angular.module('app.components')
  .component('home', {
    template: html,
    bindings: { $state$: '<' },
  });
  

export default HomeComponent;