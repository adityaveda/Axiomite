var axiomite = angular.module('axiomite', []);
var selected_day = "";


axiomite.controller('SearchController', ['$scope', '$http', '$location', '$anchorScroll', function ($scope,$http, $location, $anchorScroll) {
    $scope.items = [{
            id: 1,
            collection: 'earth_collection',
            name: "Earth Day"
        }, {
            id: 2,
            collection: 'aids_collection',
            name: "World AIDS Day"
        }, {
            id: 3,
            collection: 'autism_collection',
            name: "World Autism Day"
        }, {
            id: 4,
            collection: 'cancer_collection',
            name: "World Cancer Day"
        }, {
            id: 5,
            collection: 'environment_collection',
            name: "World Environment Day"
        }, {
            id: 6,
            collection: 'women_collection',
            name: "World Women's Day"
        }, {
            id: 7,
            collection: 'yoga_collection',
            name: "World Yoga Day"
        }, {
            id: 8,
            collection: 'friendship_collection',
            name: "Friendships Day"
        }];
    //$scope.selectedDay = $scope.items[0].name;
console.log("inside SearchController");

    $scope.sloganSearch = function (searchInput, day) {
        console.log(searchInput);
        console.log("day : "+day);
        selected_day = day;
        $http.get('/api/searchSlogan', {params: {searchString: searchInput, collection:day}}).then(function (result) {
            console.log(result.data);
            var sloganData = result.data;
            var sloganArray = new Array;
            for(var o in  sloganData){
                sloganArray.push(sloganData[o].body[0]);
            }
            console.log("sloganarray : "+sloganArray);
            $scope.slogans = sloganArray;
            $location.hash('portfolio');

            // call $anchorScroll()
            $anchorScroll();
        });
        
        $scope.useSlogan = function (slogan) {
            console.log("chosen day :"+day);
            addText(slogan);
            addImage(selected_day);
            $location.hash('search-result');

            // call $anchorScroll()
            $anchorScroll();
        }
        
        
    }}]);