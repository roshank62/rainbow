import repositoryScreenComponents from '../compositions/repository-screen/login-screen';
//import supportScreenComponents from '../compositions/support-screen/support-screen.js';
import loginScreenComponent from '../compositions/rainbow-login/login-screen'
//import getSupportMapping from '../services/get-support-mapping/get-support-mapping.js';

angular.module('y', [
    // homeScreenComponents,
    loginScreenComponent,
    repositoryScreenComponents,
    // supportScreenComponents,
    'ui.router',
    'ui.bootstrap',
    // 'angularXml2json'
    'restangular',
    'auth0',
    'angular-storage',
    'angular-jwt'
    //   getSupportMapping
])
    .config(require('../routes/routesConfig.js'));
/* .constant('appName', 'hello-webpack')
 .constant('appVersion', '0.0.0.2');*/
