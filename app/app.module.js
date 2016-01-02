var technoCircles = angular.module("technoCircles", ["ngRoute"])
    .run(function($rootScope){
        $rootScope.page_title = "Welcome beginners ...";
    })
    .config(["$routeProvider", function($routeProvider){
        //$routeProvider.otherwise({redirectTo: 'index'});
        $routeProvider
            .when("/home", {
                templateUrl: "/app/components/home/templates/home.html",
                controller: "homeCtrl"
            })
            .when("/about", {
                templateUrl: "/app/components/about/templates/about.html",
                controller: "aboutCtrl"
            })
            .when("/contact", {
                templateUrl: "/app/components/contact/templates/contact.html",
                controller: "contactCtrl"
            })
}]);
