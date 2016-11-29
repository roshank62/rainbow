require('./repository.scss');

export default password;

function password() {
    'ngInject';

    return {
        restrict: 'E',
        template: require('./repository.html'),
        controller: repositoryController
    };

    function repositoryController($scope) {
        'ngInject';
        var vm = this;

    }
}
