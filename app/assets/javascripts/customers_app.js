var app = angular.module('customers',[]); 

app.controller("CustomerSearchController", [ 
          '$scope',                          
  function($scope) {                         
    $scope.customers = [];
    $scope.search = function(searchTerm) {   
      $scope.customers = [
        {
          "first_name" : "C.R.",
          "last_name" : "Myers",
          "email" : "myers3.cr@gmail.com",
          "username" : "myers3cr",
          "created_at" : "2015-06-12",
        },
        {
          "first_name" : "Joanne",
          "last_name" : "Redmore",
          "email" : "jredmore4@gmail.com",
          "username" : "jsr",
          "created_at" : "2015-12-04",
        },
        {
          "first_name" : "Harvey",
          "last_name" : "Foonman",
          "email" : "hxf@example.com",
          "username" : "hfoonman",
          "created_at" : "2015-07-04",
        }
      ]
      
    }
  }
]);
