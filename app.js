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
                  desc : 'Non-religious honeyroom city',
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

          //Angular App Module and Controller
          var mapApp = angular.module('mapApp', []);
          mapApp.controller('MapController', function ($scope) {
              
              const mapOptions = {
                  zoom: 6,
                  center: new google.maps.LatLng(31,35),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.place
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h3>' + marker.title + '</h3>' + 
                        marker.content);
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

          });