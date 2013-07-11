$(document).ready(function(){
  
  //a function to create a hover action
  //see main.js for more explanantion
  
	$(".portfolio_item .item_title p").mouseenter(function(){
		
		var $index = $(".portfolio_item .item_title p").index(this);
		
		$(".portfolio_item .item_title p:eq("+$index+")").attr("id", "description_title_hover");
		
	});
	
	$(".portfolio_item .item_title p").mouseleave(function(){
		
		var $index = $(".portfolio_item .item_title p").index(this);
		
		$(".portfolio_item .item_title p:eq("+$index+")").removeAttr("id", "description_title_hover");
		
	});
	
});
