angular.module('techlocoholicApp.moltin', []).factory('MoltinAuth', function($q) {
  var deferred = $q.defer();
  var moltin = new Moltin({publicId: 'F2iRicmyVXZQ6cutEJXaoJodwKXqrm9tndtBvcFb'});
  moltin.Authenticate(function() {
    deferred.resolve(moltin);
  })
return deferred.promise;
})
