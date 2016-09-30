$(document).ready(function(){


	//initialiser la var coubt par la valeur de span
	var count = 0;
	//var tab=["oups","Serieux","va faire un tour!"];
	//var len=tab.lenght;
	//votre code
	//quand je clique sur le cake j'incremente mon count
	$("img.cake-is-a-lie").click(function(){
		count++;
		$(".counter").text(count);
		if(count % 20=== 0){
			alert("va voir ailleurs");
			}

			
		
	});




	


});