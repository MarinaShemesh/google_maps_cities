var cities = [
              {
                  place : 'Tel Aviv',
                  desc : 'An old/new place',
                  lat : 32.08530,
                  long : 34.98957
              },
              {
                  place : 'Haifa',
                  desc : 'Harbour city in the north',
                  lat : 32.79405,
                  long : 34.98957
              },
              {
                  place : 'Cairo',
                  desc : 'Old enemies, new friends?',
                  lat : 30.04442,
                  long : 31.23571
              },
              {
                  place : 'Nicosia',
                  desc : 'Non-religious honeymoon city',
                  lat : 35.04002,
                  long : 33.12390
              },
              {
                  place : 'Aqaba',
                  desc : 'Red sea neighbours',
                  lat : 29.53192,
                  long : 35.00608
              }
          ];

app.controller("mapController", ["$scope", "mapFactory", function ($scope, mapFactory) {
  // $scope.cities = mapFactory.cities; not making a difference

   var initMap = {
    zoom: 6,
    center: new google.maps.LatLng(32,35),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

    $scope.map = new google.maps.Map(document.getElementById('map'), initMap);
   
    $scope.markers = [];

  var infoWindow = new google.maps.InfoWindow();

  var createMarker = function (info){

    var marker = new google.maps.Marker({
      map: $scope.map,
      position: new google.maps.LatLng(info.lat, info.long),
      title: info.place
    });
    marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + 'Latitude: ' + info.lat + '<br />' + 'Longitude: ' + info.long +  '</div>';

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.setContent('<h3>' + marker.title + '</h3>' +  marker.content); 
      infoWindow.open($scope.map, marker);
    });

   $scope.markers.push(marker);

    }  

    for (i = 0; i < cities.length; i++){
      createMarker(cities[i]);
    }

  $scope.openInfoWindow = function(e, selectedMarker){
    e.preventDefault();
    google.maps.event.trigger(selectedMarker, 'click');
  }
     
}]);