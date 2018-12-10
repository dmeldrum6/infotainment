function doDate()
{
    var str = "";
    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var now = new Date();
    str += days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ":" + (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
    document.getElementById("todaysDate").innerHTML = str;
}

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||	(!document.mozFullScreen && !document.webkitIsFullScreen)) {
		if (document.documentElement.requestFullScreen) {	document.documentElement.requestFullScreen();	} 
		else if (document.documentElement.mozRequestFullScreen)	{	document.documentElement.mozRequestFullScreen();  } 
		else if (document.documentElement.webkitRequestFullScreen)	{	document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  }  
	} else {  
		if (document.cancelFullScreen)	{	document.cancelFullScreen();	} 
		else if (document.mozCancelFullScreen)	{	document.mozCancelFullScreen();	} 
		else if (document.webkitCancelFullScreen)	{	document.webkitCancelFullScreen();  }  
  }  
}
