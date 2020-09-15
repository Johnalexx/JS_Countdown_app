var tym = new Date();
var min = 24;
var hoursleft = Number(min) - tym.getHours();
var minutesleft = tym.getMinutes();	 
var secondsleft = 0;
var millisecondsleft = 0;
var finishedtext = "Countdown finished!"    // the text that appears when the countdown reaches 0

    end = new Date();
    end.setHours(end.getHours()+hoursleft);
    end.setMinutes(end.getMinutes()+minutesleft);
    end.setSeconds(end.getSeconds()+secondsleft);
    end.setMilliseconds(end.getMilliseconds()+millisecondsleft);
    function cd(){	now = new Date();
            diff = end - now;	diff = new Date(diff);
                var msec = diff.getMilliseconds();
                    var sec = diff.getSeconds();
                        var min = diff.getMinutes();
                            var hr = diff.getHours()-1;	if (min < 10){
                                        min = "0" + min;	}
                                        
    if (sec < 10){
            sec = "0" + sec;	}	
        if(msec < 10){	
            msec = "00" +msec;	}
        else if(msec < 100){
                msec = "0" +msec;	}	
        if(now >= end){	
                clearTimeout(timerID);
                
    document.getElementById("cdtime").innerHTML = finishedtext;	}

    else{	document.getElementById("cdtime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec;
    }		
            timerID = setTimeout("cd()", 10); }window.onload = cd;