app.factory('mapFactory', function() {
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

 
    return {
        cities: cities
    };
});//not working at the moment.