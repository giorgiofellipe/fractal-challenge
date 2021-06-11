import angular from 'angular';

import html from './menu.html'

function HomeComponentController($scope, $state, $mdSidenav, $mdMedia) {
  $scope.userName = null;

  (function init() {
    const config: Config = JSON.parse(localStorage.getItem('config'));
    if (!config) {
      $state.go('signin');
      return;
    }

    $scope.userName = config.nome;

    $scope.menus = [];
    if (config?.cliente?.produtos_contratados?.graficos) {
      $scope.menus.push({
        name: 'Gráficos',
        state: 'graphs'
      });
    }
    if (config?.cliente?.produtos_contratados?.mapas) {
      $scope.menus.push({
        name: 'Mapas',
        state: 'maps'
      });
    }
    if (config?.cliente?.produtos_contratados?.analises) {
      $scope.menus.push({
        name: 'Análises',
        state: 'analysis'
      });
    }
    if (config?.cliente?.produtos_contratados?.energia) {
      $scope.menus.push({
        name: 'Energia',
        state: 'energy'
      });
    }
    if (config?.cliente?.produtos_contratados?.hidrico) {
      $scope.menus.push({
        name: 'Hídrico',
        state: 'hydro'
      });
    }
  })();

  $scope.toggleMenu = () => {
    $mdSidenav('left').toggle();
  };

  $scope.close = () => {
    $mdSidenav('left').close();
  };

  $scope.navigateTo = (state: string) => {
    $state.go(`menu.${state}`);
    if (!$mdMedia('gt-md') && $mdSidenav('left').isOpen()) {
      $scope.close();
    }
  };

  $scope.isStateActive = (state: string) => $state.current.name === `menu.${state}`;

  $scope.shouldHideMenu = () => $mdMedia('gt-md');
}

const MenuComponent = angular.module('app.components')
  .component('menu', {
    template: html,
    controller: HomeComponentController
  });


export default MenuComponent;