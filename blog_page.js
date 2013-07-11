$(document).ready(function(){

//see about_page.js for comments on how this works. 


  
	console.log("blog_page.js is working");
	
	var my_website = ["This is my first website, my first Django project, and it is my first time putting my code on a real server!",
	                  " This is an historical moment is my life. Give me a minute so that I can take it all in.",
	                  "<br/><br/>",
	                  "**Takes a deep breath**",
	                  "<br/><br/>",
	                  "Okay, the moment is over.",
	                  " The code for this website can be found on my github account.",
	                  " You can find a link for the repository in the portfolio section of the site. "].join("\n");
	                  
	var want_more = ["Give me time.",
	                 "<br/><br/>",
	                 " I am sure I will find something to ramble on about soon."].join("\n");
	                 
	var content = [my_website, want_more];
	
	
	$(".content").html(content[0]);
	
	$(".side_bar p strong").click(function(){
		
		var $content_selector = $(".side_bar p strong").index(this);
		
		$(".content p").remove();
		
		$(".content").html(content[$content_selector]);
		
	});
	                 
	
	$(".side_bar p strong").mouseenter(function(){
		
		var $index = $(".side_bar p strong").index(this);
		
		$(".side_bar p strong:eq("+$index+")").attr("id", "side_bar_hover");
		
	});
	
	$(".side_bar p strong").mouseleave(function(){
		
		var $index = $(".side_bar p strong").index(this);
		
		$(".side_bar p strong:eq("+$index+")").removeAttr("id", "side_bar_hover");
		
	});
	                 
	                 
});
