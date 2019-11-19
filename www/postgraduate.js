function getpostsite() {
      var url = "http://192.168.43.120:45457/getall/courses?operation=1";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
			$('#postsite').append("<tr><td>" + array[i] + "</td><td>" + array[i+1] + "</td><td>" + array[i+2] + "</td><td>" + array[i+3] + "</td></tr>");
			i=i+3;
		}
      });
    }
	
	function getpostsbmf() {
      var url = "http://192.168.43.120:45457/getall/courses?operation=2";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
			$('#postsbmf').append("<tr><td>" + array[i] + "</td><td>" + array[i+1] + "</td><td>" + array[i+2] + "</td><td>" + array[i+3] + "</td></tr>");
			i=i+3;
		}
      });
    }
	
		function getpostssdt() {
      var url = "http://192.168.43.120:45457/getall/courses?operation=3";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
			$('#postssdt').append("<tr><td>" + array[i] + "</td><td>" + array[i+1] + "</td><td>" + array[i+2] + "</td><td>" + array[i+3] + "</td></tr>");
			i=i+3;
			
		}
      });
    }
	
			function getpostshs() {
      var url = "http://192.168.43.120:45457/getall/courses?operation=4";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
			$('#postshs').append("<tr><td>" + array[i] + "</td><td>" + array[i+1] + "</td><td>" + array[i+2] + "</td><td>" + array[i+3] + "</td></tr>");
			i=i+3;
		}
      });
    }
	
	  function getundersite() {
      var url = "http://192.168.43.120:45457/getall/courses?operation=5";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
			$('#undersite').append("<tr><td>" + array[i] + "</td><td>" + array[i+1] + "</td><td>" + array[i+2] + "</td><td>" + array[i+3] + "</td></tr>");
			i=i+3;
		}
      });
    }
	
	function getundersbmf() {
      var url = "http://192.168.43.120:45457/getall/courses?operation=6";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
			$('#undersbmf').append("<tr><td>" + array[i] + "</td><td>" + array[i+1] + "</td><td>" + array[i+2] + "</td><td>" + array[i+3] + "</td></tr>");
			i=i+3;
		}
      });
    }
	
		function getunderssdt() {
      var url = "http://192.168.43.120:45457/getall/courses?operation=7";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
			$('#underssdt').append("<tr><td>" + array[i] + "</td><td>" + array[i+1] + "</td><td>" + array[i+2] + "</td><td>" + array[i+3] + "</td></tr>");
			i=i+3;
			
		}
      });
    }
	
			function getundershs() {
      var url = "http://192.168.43.120:45457/getall/courses?operation=8";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		
		for(var i=0; i < array.length; i++){
			$('#undershs').append("<tr><td>" + array[i] + "</td><td>" + array[i+1] + "</td><td>" + array[i+2] + "</td><td>" + array[i+3] + "</td></tr>");
			i=i+3;
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

addLoadEvent(getpostsite); 
addLoadEvent(getpostsbmf); 
addLoadEvent(getpostssdt); 
addLoadEvent(getpostshs); 
addLoadEvent(getundershs); 
addLoadEvent(getunderssdt); 
addLoadEvent(getundersbmf); 
addLoadEvent(getundersite); 
 
addLoadEvent(function() { 
	    document.body.style.backgroundColor = '#EFDF95'; 
})