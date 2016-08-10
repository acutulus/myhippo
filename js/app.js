angular.module("hippo", ['liveaddress'])

.controller('pageController', ['$scope', '$location', '$sce', '$rootScope', '$timeout', '$http', '$window', function($scope, $location, $sce, $rootScope, $timeout, $http, $window) {
    var apiHost = 'https://hippo-acutulus.herokuapp.com';

    $scope.startAddress = '';

    $scope.leadData = {
        personalInformation:{
            address:'',
            firstName:'',
            middleName:'',
            lastName:'',
            email:'',
            dateOfBirth:'',
            previousAddress:'',
            phoneNumber:'',
            mailingAddress:'',
            selectedPlan:''
        },
        propertyData:{
            buildingQuality:'',
            yearBuilt:'',
            updatedElectric:'',
            updatedPlumbing:'',
            updatedHeating:'',
            roofAge:'',
            roofType:'',
            roofMaintainedLast15Years:'',
            squareFootage:'',
            swimmingPool:'',
            numberOfFamilyUnits:'',
            constructionType:'',
            purchaseDate:'',
            earthquakeRetrofitted:'',
            builtOnStilts:'',
            unusualHome:'',
            unusualHeating:'',
            daycare:'',
            businessOnPremises:'',
            businessPhoneNumber:'',
            businessName:'',
            houseUnderConstruction:'',
            previousPolicyCancelled:'',
            residenceType:'',
            homeFence:'',
            fireAlarm:'',
            fireExt:'',
            guard:'',
            burglarAlarm:'',
            sprinklers:'',
            seasonalSecondaryHome:'',
            woodStovePelletCoalNoHeat:'',
            woodStoveAsPrimary:'',
            numberOfStories:'',
            gatedCommunity:'',
            goPaperless:'',
            affinityDiscount:'',
            hoaMembership:'',
            hoaName:'',
            numOfInservantEmployees:'',
            numOfOutservantEmployees:'',
            numOfOtherEmployees:''
        },
        additionalInsured:[],
        /*
                    firstName:'',
            lastName:'',
            middleName:'',
            dateOfBirth:''
*/
        lossHistory:[],
        /*
            date:'',
            category:'',
            sum:''
        */
        product:'HO-3'
    };


    $scope.startNewLead = function() {
        if ($scope.address) {
            $scope.activePage = 0;
            $(document).unbind();

            var address = {
                street1:$scope.address.delivery_line_1,
                street2:$scope.address.delivery_line_2,
                city:$scope.address.components.city_name,
                state:$scope.address.components.state_abbreviation,
                zip:$scope.address.components.zipcode
            };

            $scope.leadData.personalInformation.address = address;

            $http.post(apiHost+'/v1/lead', {address:address, product:'HO-3'})
            .then(function(response) {
                $scope.leadId = response.data.leadId;
                $window.localStorage.leadId = $scope.leadId;
                $http.get(apiHost+'/v1/lead/'+$scope.leadId+'/prefill')
                .then(function(response) {
                    var prefill = humps.camelizeKeys(response.data);
                    for (var i in prefill) {
                        $scope.leadData.propertyData[i] = prefill[i];
                    }
                    $location.path('/page-'+$scope.pages[0].key);
                    $scope.activePage = 0;
                    $scope.preparePage();
                }, function(err) {
                    console.log(err);
                });
            }, function(err) {
                console.log(err);
            });
        }
    };

    $scope.processIncomingData = function(data) {
        data= humps.camelizeKeys(data);
        for (var i in data) {
            for (var j in data[i]) {
                if (typeof data[i][j] === 'object' && 'isDefault' in data[i][j] && 'value' in data[i][j]) {
                    if (j === 'year_built') {
                        $scope.leadData[i][j] = parseInt(data[i][j].value);
                    }
                } else {
                    $scope.leadData[i][j] = data[i][j];
                }
            }
        }
    };

    $scope.saving = false;
    $scope.save = function() {
        $scope.saving = true;
        $scope.error = false;

        var data = humps.decamelizeKeys($scope.leadData);
        for (var i in data) {
            for (var j in data[i]) {
                if (data[i][j] === '') {
                    delete data[i][j];
                }
                if (j === 'year_built') {
                    if (data[i][j]) {
                        data[i][j] = data[i][j].toString();                        
                    } else {
                        delete data[i][j];
                    }
                }
                if (j === 'roof_type') {
                    delete data[i][j];
                }
            }
        }
        $http.post(apiHost+'/v1/lead/'+$scope.leadId, {lead_data:data, page:'asdf', quote_response:false})
        .then(function(response) {
            $scope.processIncomingData(response.data.data);
            $scope.saving = false;
            $scope.animateToPage($scope.activePage+1, 0.5);
        }, function(err) {
            $scope.saving = false;
            $scope.error = err;
        });
    };

    $scope.activeModal = false;
    $scope.activeModalShowing = false;

    $scope.showModal = function(modal, event) {
        if (modal in $scope.modals) {
            $scope.activeModal = $scope.modals[modal];
            $timeout(function() {
                $scope.activeModalShowing = true;
            }, 400);
        }
        event.preventDefault();
    };

    $scope.hideModal = function() {
        if ($scope.activeModalShowing) {
            $scope.activeModalShowing = false;
            $timeout(function() {
                $scope.activeModal = false;                
            }, 500);
        }
    };

    $scope.modals = window.getHippoModals($sce);
    $scope.pages = window.getHippoPages($sce);

    $scope.activePage = -1;
    $scope.purple = false;
    $scope.product = 'home';

    $rootScope.$on('$locationChangeSuccess', function() {
        var path = $location.path();
        if (!$scope.leadId && $window.localStorage.leadId) {
            $scope.leadId = $window.localStorage.leadId;
            $http.post(apiHost+'/v1/lead/'+$scope.leadId, {lead_data:{}})
            .then(function(response) {
                $scope.processIncomingData(response.data.data);
            }, function(err) {
                $scope.leadId = false;
                $scope.activePage = -1;
            });
        }
        if (path && $scope.leadId) {
            for (var i = 0; i < $scope.pages.length; i++) {
                if (path == '/page-'+$scope.pages[i].key && $scope.activePage !== i) {
                    $scope.activePage = i;
                    $(document).unbind();
                    setTimeout(function() {
                        //window.document.getElementById('pagecontainer').style.height = Math.max((window.document.getElementById('page-container-'+$scope.pages[$scope.activePage].key).clientHeight + 250), window.innerHeight, 600) + 'px';
                        $(document).unbind();
                    }, 200);
                }
            }
        } else {
            $scope.activePage = -1;
        }
    });

    window.scope = $scope;

    $scope.animateToPage = function(page, midpoint) {
        //window.document.getElementById('pagecontainer').style.height = Math.max((window.document.getElementById('page-container-'+$scope.pages[$scope.activePage].key).clientHeight + 250), window.innerHeight, 600) + 'px';
        if (page < $scope.pages.length && page >= 0) {
            if ($scope.purple) {
                $scope.activePage += midpoint;
                $timeout(function() {
                    $scope.purple = $scope.pages[page].purple;
                }, 1000);
                $timeout(function() {
                    $location.path('/page-'+$scope.pages[page].key);
                    $scope.activePage = page;
                    $scope.preparePage();
                }, 3500);
            } else {
                $timeout(function() {
                    $scope.purple = $scope.pages[page].purple;
                }, 1000);
                if ($scope.pages[page].apiCall === 'quotequick') {
                    $timeout(function() {
                        $scope.activePage = page;
                        $scope.preparePage();
                        $location.path('/page-'+$scope.pages[page].key);
                    }, 3500);


                    $scope.activePage += midpoint;

                    $http.get(apiHost+'/v1/lead/'+$scope.leadId+'/quote/quick')
                    .then(function(response) {
                        $scope.activePage += page;
                        $scope.preparePage();
                        $scope.prelim = humps.camelizeKeys(response.data);
                    }, function(err) {
                        console.log(err);
                    });
                } else if ($scope.pages[page].apiCall === 'finalquote') {
                    $timeout(function() {
                        $scope.activePage = page;
                        $scope.preparePage();
                        $location.path('/page-'+$scope.pages[page].key);
                    }, 3500);

                    $scope.activePage += midpoint;

                    $http.get(apiHost+'/v1/lead/'+$scope.leadId+'/quote/full')
                    .then(function(response) {
                        $scope.activePage += page;
                        $scope.preparePage();
                        $scope.quote = humps.camelizeKeys(response.data);
                    }, function(err) {
                        console.log(err);
                    });   
                } else {
                    $scope.activePage = page;
                    $scope.preparePage();
                    $location.path('/page-'+$scope.pages[$scope.activePage].key);
                }
            }
        }
    };

    $scope.preparePage = function() {
        $timeout(function() {
            var elems = document.querySelectorAll('.mdl-js-textfield');
            for (var i = 0; i < elems.length; i++) {
                elems[i].MaterialTextfield.updateClasses_();
            }
            getmdlSelect.init('.getmdl-select');
        });
    };

    $scope.setSelect = function(field, $event) {
        if ($event.srcElement.dataset.val === 'false') {
            $scope.leadData[field.keyParent][field.key] = false;
        } else if ($event.srcElement.dataset.val === 'true') {
            $scope.leadData[field.keyParent][field.key] = true;
        } else {
            $scope.leadData[field.keyParent][field.key] = $event.srcElement.dataset.val;            
        }
    };

    $scope.next = function() {
        $scope.save();
        //$scope.animateToPage($scope.activePage+1, 0.5);
    };

    $scope.back = function() {
        $scope.animateToPage($scope.activePage-1, -0.5);
    };
}])
.directive('mhFields', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/fields.html',
    //controllerAs: 'addressBarCtrl',
    controller: function($scope) {


        $timeout(function() {
            var elems = document.querySelectorAll('ul.mdl-menu');
            for (var i = 0; i < elems.length; i++) {
                elems[i].classList.add('mdl-js-menu');
            }
            componentHandler.upgradeDom();
            getmdlSelect.init('.getmdl-select');
        }, 200);

        $scope.isValid = function() {
            var count = 0;
            for (var i in $scope.fieldData.form) {
                if ($scope.fieldData.form.hasOwnProperty(i)) {
                    count++;
                }
            }
            return $scope.fieldForm.$valid && count === 10;
        };

    }
};}])
.directive('mhPage', [function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/page.html',
    //controllerAs: 'addressBarCtrl',
    controller: function($scope) {

    }
};}])
.directive('mhPrelim', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/prelim.html',
    controller: function($scope) {
        $scope.animate = false;
        $timeout(function() {
            $scope.animate = true;
        }, 9000);
    }
};}])
.directive('mhFinalquote', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/finalquote.html',
    controller: function($scope) {
        $scope.animate = false;
        $timeout(function() {
            $scope.animate = true;
        }, 9000);
    }
};}])
.directive('mhClaims', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/claims.html',
    controller: function($scope) {
        $scope.animate = false;
        $timeout(function() {
            $scope.animate = true;
        }, 9000);
    }
};}])
.directive('mhCheckout', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/checkout.html',
    controller: function($scope) {
        $scope.animate = false;
        $timeout(function() {
            $scope.animate = true;
        }, 9000);
    }
};}])
.directive('mhConfirmation', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/confirmation.html',
    controller: function($scope) {
        $scope.animate = false;
        $timeout(function() {
            $scope.animate = true;
        }, 9000);
    }
};}])
.directive('mhQuestions', [function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/questions.html',
    //controllerAs: 'addressBarCtrl',
    controller: function($scope) {

        $scope.isValid = function() {
            var count = 0;
            for (var i in $scope.fieldData.form) {
                if ($scope.fieldData.form.hasOwnProperty(i)) {
                    count++;
                }
            }
            return $scope.fieldForm.$valid && count === 10;
        };

    }
};}])
.directive('mhTiles', [function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/tiles.html',
    //controllerAs: 'addressBarCtrl',
    link: function(scope, element, attrs) {
        scope.hoverTile = function(event, tile, hovered){
            var elem = event.target;
            while (elem !== null && !elem.classList.contains('tile')) {
                elem = elem.parentElement;
            }
            if (elem !== null) {
                if (hovered) {
                    elem.style.border = '1px solid '+tile.color;
                } else {
                    elem.style.border = '';
                }                
            }
        };
    },
    controller: function($scope) {

        $scope.tileClicked = function(tile) {
            if ($scope.page.multi) {
                tile.selected = !tile.selected;
            } else {
                $scope.save();                
            }
        };

        $scope.isValid = function() {
            var count = 0;
            for (var i in $scope.questionData.form) {
                if ($scope.questionData.form.hasOwnProperty(i)) {
                    count++;
                }
            }
            return $scope.questionForm.$valid && count === 10;
        };

    }
  };
}])
.directive('mhDateInput', ['$window', function ($window) {
    return {
        require:'^ngModel',
        restrict:'A',
        link:function (scope, elm, attrs, ctrl) {
            var moment = $window.moment;
            var dateFormat = attrs.mhDateInput;
            attrs.$observe('mhDateInput', function (newValue) {
                if (dateFormat == newValue || !ctrl.$modelValue) return;
                dateFormat = newValue;
                ctrl.$modelValue = new Date(ctrl.$setViewValue);
            });

            ctrl.$formatters.unshift(function (modelValue) {
                if (!dateFormat || !modelValue) return "";
                var retVal = moment(modelValue).format(dateFormat);
                return retVal;
            });

            ctrl.$parsers.unshift(function (viewValue) {
                var date = moment(viewValue);
                return (date && date.isValid() && date.year() > 1950 ) ? date.toDate() : "";
            });
        }
    };
}]);