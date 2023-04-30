$(function() {
	$('nav.menu-mobile h2').click(function(){
			var menu = $('nav.menu-mobile ul');

			if(menu.is(':hidden') == true)
			{
				var icon = $('.menu-mobile').find('i');
				icon.removeClass('fa fa-bars');
				icon.addClass('fas fa-times');
				$('nav.menu-mobile ul').slideToggle();
			}
			else
			{
				var icon = $('.menu-mobile').find('i');
				icon.removeClass('fas fa-times');
				icon.addClass('fa fa-bars');
				$('nav.menu-mobile ul').slideToggle();
			}
	});
});