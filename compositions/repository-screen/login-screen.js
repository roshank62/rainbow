const MODULE_NAME = 'rainbowRepository.components';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .directive('repository',
        require('../../components/repository/repository'));
