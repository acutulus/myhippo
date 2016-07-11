angular.module("myHippoPublicData", [])
.controller("PublicDataController", function($scope) {

    $scope.publicDataData = {form:{},submitted:false};

    $scope.printModel = function() {
        console.log($scope.publicDataData);
        $scope.publicDataData.submitted = true;
    };

    $scope.isValid = function() {
        var count = 0;
        for (var i in $scope.publicDataData.form) {
            if ($scope.publicDataData.form.hasOwnProperty(i)) {
                count++;
            }
        }
        return $scope.publicDataForm.$valid && count === 10;
    };

});