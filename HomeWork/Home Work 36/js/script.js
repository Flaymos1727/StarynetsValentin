jQuery(document).ready(function(){
	jQuery(".header-btn").click(function () {
		jQuery(".fixed-overlay").fadeToggle(400);
	});
	jQuery("label.btnMessage").click(function(){
		jQuery("textarea.formMessage").toggle(400);
	});
	jQuery(".formExit").click(function(){
		jQuery(".fixed-overlay").hide();
	});
	
});

