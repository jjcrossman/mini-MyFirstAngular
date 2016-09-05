angular.module( 'friendsList' ).controller( 'mainCtrl', function ($scope) {

  $scope.addFriend = function( newFriendObj ){
    $scope.friends.unshift( newFriendObj );
    $scope.addNewFriend = {};
  };

  $scope.friends = [
    { name: "Chad" }
    , { name: "Douglas" }
    , { name: "Donovan" }
    , { name: "Brian" }
    , { name: "Luke" }
  ];
});
