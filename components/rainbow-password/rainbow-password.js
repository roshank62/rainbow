require('./rainbow-password.scss');

export default password;

function password() {
    'ngInject';

    return {
        restrict: 'E',
        template: require('./rainbow-password.html'),
        controller: passwordController
    };

    function passwordController($scope) {
        'ngInject';
        var vm = this;

    }
}
