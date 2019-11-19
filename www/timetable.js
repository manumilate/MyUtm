
 function getsemsite() {
      var title = $("[name='title']").val();
      var url = "http://192.168.43.120:45457/getall/timetable?operation=1";
      $.get(url, function(data, status) {

		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		
		  document.getElementById("parasite").innerHTML=array[0];
		  document.getElementById("site").setAttribute("href",array[1]);
		  
		 }
        //}
      });
    }
	
	function getsemsbmf() {
     
      var url = "http://192.168.43.120:45457/getall/timetable?operation=4";
      $.get(url, function(data, status) {

		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		
		  document.getElementById("parasbmf").innerHTML=array[0];
		  document.getElementById("sbmf").setAttribute("href",array[1]);
		 }
      });
    }
	
function getsemssdt() {
      
      var url = "http://192.168.43.120:45457/getall/timetable?operation=7";
      $.get(url, function(data, status) {

		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){

		  document.getElementById("parassdt").innerHTML=array[0];
		  document.getElementById("ssdt").setAttribute("href",array[1]);
		 }
      });
    }
	
	function getsemshs() {
     
      var url = "http://192.168.43.120:45457/getall/timetable?operation=5";
      $.get(url, function(data, status) {

		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		
		  document.getElementById("parashs").innerHTML=array[0];
		  document.getElementById("shs").setAttribute("href",array[1]);
		 }
      });
    }
 function getexamsite() {
      
      var url = "http://192.168.43.120:45457/getall/timetable?operation=2";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		
		  document.getElementById("paraesite").innerHTML=array[0];
		  document.getElementById("esite").setAttribute("href",array[1]);
		  
		 }
  
      });
    }
 function getexamsbmf() {

      var url = "http://192.168.43.120:45457/getall/timetable?operation=3";
      $.get(url, function(data, status) {

		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		
		  document.getElementById("paraesbmf").innerHTML=array[0];
		  document.getElementById("esbmf").setAttribute("href",array[1]);
		 }
      });
    }
	
function getexamssdt() {
 
      var url = "http://192.168.43.120:45457/getall/timetable?operation=8";
      $.get(url, function(data, status) {
		
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		
		  document.getElementById("paraessdt").innerHTML=array[0];
		  document.getElementById("essdt").setAttribute("href",array[1]);
		 }
      });
    }
	
	function getexamshs() {

      var url = "http://192.168.43.120:45457/getall/timetable?operation=6";
      $.get(url, function(data, status) {
	
		var a = data;
		var array = a.split(",");
		console.log(array);
		
		for(var i=0; i < array.length; i++){
		
		  document.getElementById("paraeshs").innerHTML=array[0];
		  document.getElementById("eshs").setAttribute("href",array[1]);
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

addLoadEvent(getsemsite); 
addLoadEvent(getsemshs); 
addLoadEvent(getsemssdt); 
addLoadEvent(getsemsbmf); 
addLoadEvent(getexamshs); 
addLoadEvent(getexamssdt); 
addLoadEvent(getexamsbmf); 
addLoadEvent(getexamsite); 
addLoadEvent(function() { 
	    document.body.style.backgroundColor = '#EFDF95'; 
}) 

