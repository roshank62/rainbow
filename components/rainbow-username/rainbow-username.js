require('./rainbow-username.scss');

export default username;

function username() {
    'ngInject';

    return {
        restrict: 'E',
        template: require('./rainbow-username.html'),
        controller: usernameController
    };

    function usernameController($scope) {
        'ngInject';
        var vm = this;
    }
}
