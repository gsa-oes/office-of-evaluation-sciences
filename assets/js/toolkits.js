
  $(document).ready(function() {
    var href = window.location.hash;

    if (href) {
    	var tabs_list = $('.nav-tabs > li > a');

      for (let i = 0; i < tabs_list.length; i++) {
        var href_split = tabs_list[i].href.split("/")
        var target = href_split[href_split.length - 1];
        if (target == href) {
          $(tabs_list[i]).parents('li').addClass('active')
          $(href).removeClass('hide')
          $(href).addClass('active')
        } else if (target < href) {
          $(tabs_list[i]).parents('li').addClass('active')
        }
      }
    }

		$('.nav-tabs > li > a').click(function(event){
		event.preventDefault();//stop browser to take action for clicked anchor

		//find actived navigation and remove 'active' css
		var actived_nav = $('.nav-tabs > li.active');
		actived_nav.removeClass('active');

		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');

    var thisId = $(this).attr('href');
    var tabs_list = $('.nav-tabs > li > a');

    for (let i =0; i < tabs_list.length; i++) {
      var target = $(tabs_list[i]).attr('href');
      if (target < thisId) {
        $(tabs_list[i]).parents('li').addClass('active')
      }
    }

		//hide displaying tab content
    var content_list = $('.tab-content.active')

		content_list.removeClass('active');
		content_list.addClass('hide');

		//show target tab content
		var target_tab_selector = $(this).attr('href');
    var target_tab = $(target_tab_selector)
		target_tab.removeClass('hide');
		target_tab.addClass('active');
	     });
	  });
