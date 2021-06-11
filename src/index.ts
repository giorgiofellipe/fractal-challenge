import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';
import './style.css';

// angular components
import AngularComponentsModule from './angular/components';
import './angular/menu';

// react components
import SignIn from './react/SignIn';
import { angularFractalAccentTheme, angularFractalTheme } from './themes';


angular.module('app', [
  'ngMaterial',
  'ui.router',
  UI_ROUTER_REACT_HYBRID,
  AngularComponentsModule.name,
])
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state({
        name: 'signin',
        url: '/',
        component: SignIn,
        resolve: {
          state: '$state'
        }
      })
      .state({
        abstract: true,
        name: 'menu',
        url: '',
        component: 'menu',
      })
      .state({
        name: 'menu.maps',
        url: '/maps',
        component: 'maps'
      })
      .state({
        name: 'menu.graphs',
        url: '/graphs',
        component: Graphs
      });

    $urlRouterProvider.otherwise('/');
  }])
  .config(($mdThemingProvider) => {
    $mdThemingProvider.definePalette('fractal', angularFractalTheme);

    $mdThemingProvider.definePalette('fractalaccent', angularFractalAccentTheme);

    $mdThemingProvider.theme('default')
      .primaryPalette('fractal')
      .accentPalette('fractalaccent');
  })

const root = document.getElementById('root');
angular.bootstrap(root, ['app']);
