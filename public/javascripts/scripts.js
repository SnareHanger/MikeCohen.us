jQuery(document).ready(function(){
	
	jQuery('.back').click(function(){
		window.location = "index.html";
	});
	
	jQuery('#projects > div').click(function(){
		window.location = jQuery(this).attr('id') + '.html';
	});
		
	jQuery('.projectImages').find('a').each(function(){
		jQuery(this).attr('rel','prettyPhoto[' + jQuery(this).parent().parent().attr("id") + ']');
	});
	
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
		markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
		overlay_gallery: false,
		social_tools: false,
		deeplinking: false,
		animation_speed: 'slow'
	
	});

});