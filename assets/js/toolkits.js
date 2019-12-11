
console.log('hello');

//
// $( function() {
//     $( ".content" ).hide();
//     $("#icon-tab li a").click(function(e){
//         e.preventDefault();
//       let display = $(this).attr('href');
//       $(".content").hide();
//       $(display).show();
//     })
//   } );
//
  // $( function() {
  //   $( "#tabs" ).tabs();
  // } );

  $(document).ready(function() {
    // var active_tab_selector = window.location.hash;
    // var actived_nav = $('.nav-tabs > li.active');
		// actived_nav.removeClass('active');
    //
		// //add 'active' css into clicked navigation
		// $(this).parents('li').addClass('active');
    //
		// //hide displaying tab content
		// $(active_tab_selector).removeClass('active');
		// $(active_tab_selector).addClass('hide');
    //
		// //show target tab content
		// var target_tab_selector = $(this).attr('href');
    // console.log(target_tab_selector);
    // var target_tab = $(target_tab_selector)
    // console.log(target_tab);
		// target_tab.removeClass('hide');
		// target_tab.addClass('active');

		$('.nav-tabs > li > a').click(function(event){
		event.preventDefault();//stop browser to take action for clicked anchor

		//get displaying tab content jQuery selector
		var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');
    console.log(active_tab_selector);
    console.log('===========');
		//find actived navigation and remove 'active' css
		var actived_nav = $('.nav-tabs > li.active');
		actived_nav.removeClass('active');

		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');

		//hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');

		//show target tab content
		var target_tab_selector = $(this).attr('href');
    console.log(target_tab_selector);
    var target_tab = $(target_tab_selector)
    console.log(target_tab);
		target_tab.removeClass('hide');
		target_tab.addClass('active');
	     });
	  });
