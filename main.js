$(document).ready(function(){
  
	//Just checking to see if the file is being read
  
	console.log("The main js is working");
	
	//Creating a hover event for the items in the tab bar
  //I used mouseenter and mouseleave over the hover option
  //because, in the end, it is the same amout of code.
  //Plus, this is clearer to me.
	
	$(".tab_bar td").mouseenter(function(){
		
		var $index = $(".tab_bar td").index(this);
		
		console.log("The index of the item is:" + $index);
		
		$(".tab_bar td:eq("+$index+")").attr("id", "tab_bar_hover");
		
	});
	
		
	$(".tab_bar td").mouseleave(function(){
		
		var $index = $(".tab_bar td").index(this);
			
		$(".tab_bar td:eq("+$index+")").removeAttr("id", "tab_bar_hover");
			
	});
		
});
