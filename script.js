const url = "https://covid19.mathdro.id/api";


let app = angular.module("myApp",[]);

app.controller("myController",($scope,$http)=>{

    //demo var
    $scope.countryName = "India";


    //demo func
    $scope.changeValue = ()=>{
        $scope.countryName = "kashmir";
    };

    //calling api

    $http.get(url).then((response)=>{

        //if success
        console.log(response);

        $scope.all_data = response.data ;

    }, (error)=>{

        //if failed
        console.log(error);
    });


    // console.log($scope);

    // //2 way binding

    // $scope.get_countryName = ()=>{
    //     let countr = $scope.country;
    //     console.log(countr);
    // };

    // //calling api for other countries

    // $http.get(`${url}/countries/${countr}`).then((response)=>{

    //     //if success
    //     console.log(response);

    //     $scope.get_data = response.data ;

    // }, (error)=>{

    //     //if failed
    //     console.log(error);
    // });

});

