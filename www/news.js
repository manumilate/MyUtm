function getnews() {
      var url = "http://192.168.43.120:45457/getall/getall2?operation=1";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
		
			$('#list').append("<li><h2>" + array[i] + "</h2><p>" + array[i+1] + "</p><p><strong>Date Posted:</strong>" + array[i+2] + "</p></li>");
			i=i+3;
		}
      });
    }
	
	
	function getevent() {
      var url = "http://192.168.43.120:45457/getall/getall2?operation=3";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
		
			$('#list2').append("<li><h2>" + array[i] + "</h2><p>" + array[i+1] + "</p><p>" + array[i+2] + "</p><p><strong>Start Date:</strong>"+array[i+3]+"</p><p><strong>End Date:</strong>"+array[i+4]+"</p></li>");
			i=i+4;
		}
      });
    }

function addLoadEvent(func) { 
			  var oldonload = window.onload; 
			  if (typeof window.onload != 'function') { 
				window.onload = func; 
			  } else { 
				window.onload = function() { 
				  if (oldonload) { 
					oldonload(); 
      } 
      func(); 
    } 
  } 
}

addLoadEvent(getnews); 
addLoadEvent(getevent); 

 
addLoadEvent(function() { 
	    document.body.style.backgroundColor = '#EFDF95'; 
})


