module.exports = function(Auth, $window) {
  var vm = this;

  var user = $window.sessionStorage.getItem('currentUser');
  var actualUserObj = JSON.parse(user);

  vm.username = actualUserObj.username;

  vm.logout = logout;

  function logout() {
    Auth.logout();
  }
};