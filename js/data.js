document.body.style.backgroundColor = "#efdfd1";

var x = document.getElementById("time-container");

$.ajax({
  url: "https://geoip-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function( location ) {
    $('#time-container').html(location.city + ", " + location.country_name);
    // $('#state').html(location.state);
    // $('#city').html(location.city);
    // $('#latitude').html(location.latitude);
    // $('#longitude').html(location.longitude);
    // $('#ip').html(location.IPv4);
  }
});
