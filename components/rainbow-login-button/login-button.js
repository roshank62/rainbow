require('./login-button.scss');

export default loginButton;

function loginButton() {
    'ngInject';

    return {
        restrict: 'E',
        template: require('./login-button.html'),
        controller: loginButtonController
    };

    function loginButtonController($scope,$http,auth, store, $location) {
        'ngInject';
        var vm = this;
        $scope.click = function () {
           /* var js=   angular.element("#username").val();
             console.log("js",js);*/

             $http.get("https://bitbucket.org/account/shaileshsdaitkar/avatar/32/").then(function (res) {
                 vm.data = res.data;
                 console.log('vm.data', vm.data);
             });
        };


        vm.login = login;
        vm.logout = logout;
        vm.auth = auth;

        function login() {
            auth.signin({}, function (profile, token) {
                store.set('profile', profile);
                store.set('id-token', token);
                console.log("profile",profile);
                console.log("token",token);
                $location.path('/login');
            }, function (error) {
                console.log(error);
            })
        }
        login();
        function logout() {

            store.remove('profile');
            store.remove('id-token');
            auth.signout();
            $location.path('/login');

        }

    }

}
