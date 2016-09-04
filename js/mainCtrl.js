angular.module( 'friendsList' ).controller( 'mainCtrl', function ($scope) {

  $scope.addFriend = function( friend ){
    var obj = {
      name: friend
    };
    $scope.friends.unshift( obj );
  };

  $scope.friends = [
    { name: "Chad" }
    , { name: "Douglas" }
    , { name: "Donovan" }
    , { name: "Brian" }
    , { name: "Luke" }
  ];
});
