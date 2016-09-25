$(document).ready(function() {
    
    $("table tr").click(function() {
        alert("hi");
        if(to_hide != undefined){
            var to_hide = document.getElementsByClassName("tr .active")[0];
            $(to_hide).removeClass("active");
        };
        
        $(this).parentElement.addClass("active");
        
    });

    $(".main-view").hide();
    $(document.getElementById("profile")).show();
    
    $("#tabs ul li a").click(function(){  
        var elem_id = $(this).attr("href").substring(1);
        var elem = document.getElementById(elem_id);
        
        if(!$(elem).hasClass("active-view")) {
            var hide_elem = document.getElementsByClassName("active-view")[0];
            $(elem).show();
            $(hide_elem).hide();
            $(hide_elem).removeClass("active-view");
            $(elem).addClass("active-view");
        }

    });
});

var app = angular.module('investmentsTable', []);
app.controller('investmentsCtrl', function($scope, $http) {
    $http.get("http://127.0.0.1:8081/get_investments").then(function (response) {
        $scope.names = response.data.records;
        $scope.orderByMe = function(x) {
            $scope.myOrderBy = x;
        };

        
    });
});

app.controller('myInvestmentsCtrl', function($scope, $http) {
    $scope.highlight = function(x) {
        $http.get("http://127.0.0.1:8081/get_more_info?name="+ x.name).then(function (response) {
            $scope.myCompany = response.data.records;
            //console.log($scope.myCompany);
            
            hi($scope.myCompany);

            
            
    });
    };

});

function hi(myCompany) {
    var nameI = document.getElementById("nameInv");
    nameI.innerHTML = myCompany[0]["name"];
    
    
    var descI = document.getElementById("descriptionInv");
    descI.innerHTML = myCompany[0]["description"];
    
    var picI = document.getElementById("imgInv");
    picI.src = myCompany[0]["url_pic"];


};







