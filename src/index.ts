import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import { UI_ROUTER_REACT_HYBRID } from '@uirouter/react-hybrid';
import './style.css';

// angular components
import AngularComponentsModule from './angular/components';
import './angular/home';

// react components
import ReactFunctionalComponent from './react/ReactFunctionalComponent';
import SignIn from './react/SignIn';

const ngmod = angular.module('app', [
  'ui.router', 
  UI_ROUTER_REACT_HYBRID,
  AngularComponentsModule.name,
]);
ngmod.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
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
      name: 'react', 
      url: '/react', 
      component: ReactFunctionalComponent
    })
    .state({ 
      name: 'angular', 
      url: '/angular', 
      component: 'home'
    });

  $urlRouterProvider.otherwise("/")
}]);

const root = document.getElementById('root');
angular.bootstrap(root, ['app']);
