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

function cycleBackground() {
	// bg-primary / bg-secondary / bg-success / bg-danger / bg-warning / bg-info / bg-light / bg-dark
	var bg1 = document.getElementsByClassName("bg-primary"), a = bg1.length;
	var bg2 = document.getElementsByClassName("bg-secondary"), b = bg2.length;
	var bg3 = document.getElementsByClassName("bg-success"), c = bg3.length;
	var bg4 = document.getElementsByClassName("bg-danger"), d = bg4.length;
	var bg5 = document.getElementsByClassName("bg-warning"), e = bg5.length;
	var bg6 = document.getElementsByClassName("bg-info"), f = bg6.length;
	var bg7 = document.getElementsByClassName("bg-dark"), g = bg7.length;
	var bg8 = document.getElementsByClassName("bg-light"), h = bg8.length;
	
	if (a > b)
	{
		while(a--)
		{			
			bg1[a].classList.add("bg-secondary");
			bg1[a].classList.remove("bg-primary");
		}
	}
	else if (b > c)
	{
		while(b--)
		{
			bg2[b].classList.add("bg-success");
			bg2[b].classList.remove("bg-secondary");
		}
	}
	else if (c > d)
	{
		while(c--)
		{			
			bg3[c].classList.add("bg-danger");
			bg3[c].classList.remove("bg-success");
		}
	}
	else if (d > e)
	{
		while(d--)
		{
			bg4[d].classList.add("bg-warning");
			bg4[d].classList.remove("bg-danger");
		}
	}
	else if (e > f)
	{
		while(e--)
		{
			bg5[e].classList.add("bg-info");
			bg5[e].classList.remove("bg-warning");
		}
	}
	else if (f > g)
	{
		while(f--)
		{
			bg6[f].classList.add("bg-dark");
			bg6[f].classList.remove("bg-info");
		}
	}
	else if (g > h)
	{
		while(g--)
		{
			bg7[g].classList.add("bg-light");
			bg7[g].classList.remove("bg-dark");
		}
	}
	else if (h > a)
	{
		while(h--)
		{
			bg8[h].classList.add("bg-primary");
			bg8[h].classList.remove("bg-light");
		}
	}
}

function cycleButtons() {
		// btn-primary / btn-secondary / btn-success / btn-danger / btn-warning / btn-info / btn-light / btn-dark
	var btn1 = document.getElementsByClassName("btn-primary"), a = btn1.length;
	var btn2 = document.getElementsByClassName("btn-secondary"), b = btn2.length;
	var btn3 = document.getElementsByClassName("btn-success"), c = btn3.length;
	var btn4 = document.getElementsByClassName("btn-danger"), d = btn4.length;
	var btn5 = document.getElementsByClassName("btn-warning"), e = btn5.length;
	var btn6 = document.getElementsByClassName("btn-info"), f = btn6.length;
	var btn7 = document.getElementsByClassName("btn-dark"), g = btn7.length;
	var btn8 = document.getElementsByClassName("btn-light"), h = btn8.length;
	
	if (a > b)
	{
		while(a--)
		{			
			btn1[a].classList.add("btn-secondary");
			btn1[a].classList.remove("btn-primary");
		}
	}
	else if (b > c)
	{
		while(b--)
		{
			btn2[b].classList.add("btn-success");
			btn2[b].classList.remove("btn-secondary");
		}
	}
	else if (c > d)
	{
		while(c--)
		{			
			btn3[c].classList.add("btn-danger");
			btn3[c].classList.remove("btn-success");
		}
	}
	else if (d > e)
	{
		while(d--)
		{
			btn4[d].classList.add("btn-warning");
			btn4[d].classList.remove("btn-danger");
		}
	}
	else if (e > f)
	{
		while(e--)
		{
			btn5[e].classList.add("btn-info");
			btn5[e].classList.remove("btn-warning");
		}
	}
	else if (f > g)
	{
		while(f--)
		{
			btn6[f].classList.add("btn-dark");
			btn6[f].classList.remove("btn-info");
		}
	}
	else if (g > h)
	{
		while(g--)
		{
			btn7[g].classList.add("btn-light");
			btn7[g].classList.remove("btn-dark");
		}
	}
	else if (h > a)
	{
		while(h--)
		{
			btn8[h].classList.add("btn-primary");
			btn8[h].classList.remove("btn-light");
		}
	}
}

