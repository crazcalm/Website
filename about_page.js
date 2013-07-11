$(document).ready(function(){
  
  
  //check to see if the file is being read
  
	console.log("The about page script os working");
  
  
  //This is all the content for the page.
  //Each variable is a array filed with string entries. I made each entry a sentence to
  //make it easy to edit. Then i join all the strings to make a paragraph
  
	
	var education = ["<p>Undergraduate: Mathematics degree from Arizona State",
	                 "University. <p/>",
	                 "<br/><br/>",
	                 "<p>Graduate     : Masters in Teaching Chinese from ",
	                 "Rutgers University (expected Spring '13)"].join("\n");
	                 
	                 
	var programming_beginnings = ["<p>I started programming in January of 2013.",
	                              "That is not to say that this was the first time that I heard of or studied programming, but this is when I started to program out of personal interest.",
	                              "At the time, I was bored in my current classes and I had decided to solve Project Euler problems to entertain myself.",
	                              "Coming from a Mathematical background, I had a sound understanding of the mathematics used to solve the Project Euler problems, but what I lacked was the programming ability to write out solutions.",
	                              "So I set out to learn a programming language.",
	                              "<br/><br/>",
	                              "At this point, I would like to thank Codecademy for existing.",
	                              "Without their learning by doing lessons, I would never have known how much I enjoy programming.",
	                              "After finishing a number of their tracks I continued to study and program on my own, and I have not stopped since. "].join("\n");
	                              
	
	var why_python = ["I cannot accurately express why I love python, I just do. When I hear that people are programming in python, I want to give them hug.",
	                  "It is not that I do not like other languages, it is just that python feels like my language."].join("\n");
	                  
	                  
	var favorite_hackathon = ["That would have to be the Music Education Hackathon that was hosted by Spotify in New York City.",
	                          " I went to the event by myself, and I had originally planned on building a boring website by myself, but, in the end, I ended up joining a project that was pitched after the API presentations.",
	                          " The project I joined was called 'Rosetta Tone' and we ended taking third place (which was AWESOME), but the best part about the event was programming with a team of people.",
	                          " This was the first time I ever programmed with other people and it was a wonderful experience!",
	                          "<br/><br/>",
	                          "Sigh, I wish I had programming friends..."].join("\n");
	                          
	
	var who_is_crazcalm = ["I know this is going to sound silly, but back in the day when I was setting up my first AOL instant messenger account, I couldn't think of a screen name.",
	                       " At the time, AOL had a screen name generator.",
	                       " All you had to do was give them three words and the generator would produce a list of possible screen names.",
	                       " Two of the words I gave the generator were 'crazy' and 'calm.' The generator gave me 'Crazcalm' and I have been using that screen name ever since. ",
	                       "<br/><br/>",
	                       "The cool part is that no one else uses this screen name, so when I google 'crazcalm' all I see is my history!"].join("\n");
	
  //I put all the content into an array called content so that I can
  //find my content by indenx
  
	var content = [education, programming_beginnings, why_python, favorite_hackathon, who_is_crazcalm];                          
	
  //Check to makesure the above worked...
  
	console.log(content.length);
	
	
  //The html has place holder content in it. On load,
  //that content gets replaced with the js content
  
	$(".content").html(content[0]);
	
	
  //This part is nice!
  
  //I create a click function for the html side_bar titles.
  //The titles match the name and order of the variables in content.
  //As a result, they also have the same index!
  //So I used the corresponding indext to make the connections between the
  // titles and content. Thus, clicking on title index 0 will give you content index 0.
  //After clicking, the html content is replaced with the new content.
  
	
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






