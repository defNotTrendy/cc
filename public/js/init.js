(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $(".dropdown-button").dropdown();
        $(document).ready(function() {
            $('.collapsible').collapsible();
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

  function init(){
	  console.log('hi');
  }
  
window.addEventListener("load",init,true);