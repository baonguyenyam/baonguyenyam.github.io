;$(document).ready(function() {
"use strict";

//Toggle////////////////////////////////////////////////
  $(".cc-m-toggle .info").click(function(){
    $(this).toggleClass('open');   
  });

var latlng = new google.maps.LatLng(40.801485408197856, -73.96745953467104);
  var options = {  
    zoom: 12, // This number can be set to define the initial zoom level of the map
    center: latlng,
    scrollwheel: false,
    // styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}],
    styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}],
    mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
  };  
  // Calling the constructor, thereby initializing the map  
  var map = new google.maps.Map(document.getElementById('gmap_canvas'), options);  
  
  // Define Marker properties
  var image = new google.maps.MarkerImage('images/map-marker.png');
  
  // Add Marker
  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(40.801485408197856, -73.96745953467104), 
    map: map,   
    icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  }); 
  
  google.maps.event.addListener(marker1, 'click', function() { infowindow1.open(map, marker1); });
  var infowindow1 = new google.maps.InfoWindow({ content: '<div class="infowindow"><h4>Winter</h4>1571 Hidden Terrace,<br />New York, NY, 13247,<br />(917) 600-4570<br /><br /></div>' }); 


});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

});


