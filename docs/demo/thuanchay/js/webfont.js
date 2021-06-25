/*! Copyright (c) Bao Nguyen
 */

  WebFontConfig = {
    google: { families: [ 'Open+Sans:
						 300italic,
						 400italic,
						 600italic,
						 700italic,
						 800italic,
						 400,
						 300,
						 800,
						 700,
						 600
						 :latin,vietnamese' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
