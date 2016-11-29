export default routesConfig;

import rainbowRepositoryController from './rainbow-repository/rainbow-repository';
import rainbowLoginController from './rainbow-login/rainbow-login';

function routesConfig($stateProvider, $urlRouterProvider,$provide,authProvider,$httpProvider,jwtInterceptorProvider) {
    'ngInject';
    authProvider.init({
        domain:'rainbows.au.auth0.com',
        clientID:'DpVaPQsnC6DoVnZBV9BaFgeMOFrvpFhe'
    })
    $urlRouterProvider.when('/', '/login');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
         .state('repository', {
             url         : '/repository',
             template    : require('./rainbow-repository/rainbow-repository.html'),
             controllerAs: 'repository',
             controller  : rainbowRepositoryController
         })

        .state('login', {
            url         : '/login',
            template    : require('./rainbow-login/rainbow-login.html'),
            controllerAs: 'login',
            controller  : rainbowLoginController,
            params : {
                ID: '',
                level: '',
                type: '',
                method: ''
            }
        });
}
