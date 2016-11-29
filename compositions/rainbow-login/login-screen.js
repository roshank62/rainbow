const MODULE_NAME = 'rainbowLogin.components';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .directive('rainbowUsername',
        require('../../components/rainbow-username/rainbow-username'))
    .directive('rainbowPassword',
        require('../../components/rainbow-password/rainbow-password'))
    .directive('loginButton',
        require('../../components/rainbow-login-button/login-button'));
