"use strict";

var __appChanting = function __appChanting() {
  // Turn on Audio
  document.getElementById('buddha_loading__tungkinh').load();
  document.getElementById('buddha_loading__tungkinh').play(); // Hide Hand click and disable next time

  document.getElementById('handanimation').style.display = 'none';
  localStorage.setItem('chanting', 'true'); // Call API Chanting

  jQuery.ajax({
    url: 'https://randomuser.me/api/?results=1',
    cache: false,
    success: function success(data) {
      // Mockup the data
      var newData = {
        num: 53,
        left: 47
      }; // Update the UI

      document.getElementById('countchanting').innerText = numberWithCommas(newData.num);
      document.querySelector('#countchantingleft .num').innerText = numberWithCommas(newData.left);
    }
  });
};