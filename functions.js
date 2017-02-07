/**
 * Created by yangh_000 on 1/10/2017.
 */

xhr=function(){
    var request = false;
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else if (window.ActiveXObject){
        try{
            request = new window.ActiveXObject('Microsoft.XMLHTTP');
        }catch(e){
        }
    }

    return request;
}();

request = function(method,src,argv,content_type){
    xhr.open(method,src,false);//同步方式,异步把false改为true
    if(method=='POST')xhr.setRequestHeader('Content-type',content_type);
    //设置表单的content-type类型，常见的是application/x-www-form-urlencoded
    //如果是文件上传的表单则content-type为multipart/form-data第二个例子中会有
    xhr.send(argv);//发送POST数据
    return xhr.responseText;//返回响应的内容
};
attack_a = function(src,argv_0,argv_1){
    //var src     = "http://www.dzx2.com/forum.php";
    var argv=argv_0+argv_1;
    //var argv_0  = "&name1=value1&name2=value2";
    //request("POST",src,argv,"application/x-www-form-urlencoded");
    request("POST",src,argv,"application/x-www-form-urlencoded");
};

function getuserID(){
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    if(userID.length>0) return -1;
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var mid;
    for (i in vars) {
        var pair = vars[i].split("=");
        if(pair[0]=="MID"){
            mid=pair[1];
        }
    }
    userID.push(mid);
    //return mid;
}

function getuserGROUP() {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    if(userG.length>0) return -1;
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var mid;
    for (i in vars) {
        var pair = vars[i].split("=");
        if(pair[0]=="GROUP"){
            mid=pair[1];
        }
    }
    userG.push(mid);
    //return mid;
}

function getstageindex() {
    if(stageI.length>0) return -1;
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var mid;
    for (i in vars) {
        var pair = vars[i].split("=");
        if(pair[0]=="STAGE"){
            mid=pair[1];
        }
    }
    stageI.push(mid);
}

function getuserHISOP() {
    if(Number(stageI[0])==3||Number(stageI[0])==4||Number(stageI[0])==6)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        var mid;
        for (i in vars) {
            var pair = vars[i].split("=");
            if(pair[0]=="HISOP"){
                mid=pair[1];
            }
        }
        var ele=mid.split(",");
        for (i=0;i<ele.length;i++)
        {
            sele=ele[i];
            nele=Number(sele);
            ele.splice(i,1,nele);
        }
        if(ele.length/4==1){
            usedsq.push(ele);
        }
        if(ele.length/4==2){
            first=ele.slice(0,4);
            second=ele.slice(4,8);
            usedsq.push(first);
            usedsq.push(second);
        }

        /*if(ele.length>4)
        {
            first4=ele.slice(0,4);
            second4=ele.slice(4,8);
            ele=[];
            ele.push(first4);
            ele.push(second4);
        }
        usedsq.push(ele);*/
    }else
        return -1;
}

function submit() {
    var stageexp=stages[stageI[0]];
    var stageindex=Number(stageI[0])+1;
    var goal = parent.window.document.getElementById("Goalwindow");
    var tutor=parent.window.document.getElementById("Tutorial");
    //steplog=steplog+" , "+stageexp+"_end;";
    //attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
    switch(Number(stageI[0])){
        case 0:
            //direct to pre-test
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            break;
        case 1:
            //direct to training-1
            var complete=check_complete();
            if(complete==-1)
            {
                alert("Task not done yet.");
                return -1;
            }
            var win=check_win();
            if(win==1)
            {
                steplog=steplog+opstep;
                steplog=steplog+" success";
            }
            else
                steplog=steplog+opstep;
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            goal.innerHTML=null;
            tutor.innerHTML=null;
            break;
        case 2:
            //direct to training-2
            var complete=check_complete();
            if(complete==-1)
            {
                alert("Task not done yet.");
                return -1;
            }
            var win=check_win();
            if(win==-1)
            {
                if(userG[0]==1 || userG[0]==3)
                {
                    alert("Task not done yet.");
                    return -1;
                }
                steplog=steplog+opstep;
            }
            else{
                steplog=steplog+opstep;
                steplog=steplog+" success";
            }
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex+'&HISOP='+usedsq);
            goal.innerHTML=null;
            tutor.innerHTML=null;
            break;
        case 3:
            //direct to training-3
            var complete=check_complete();
            if(complete==-1)
            {
                alert("Task not done yet.");
                return -1;
            }
            var win=check_win();
            if(win==-1)
            {
                if(userG[0]==1 || userG[0]==3)
                {
                    alert("Task not done yet.");
                    return -1;
                }
                steplog=steplog+opstep;
            }
            else{
                steplog=steplog+opstep;
                steplog=steplog+" success";
            }
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex+'&HISOP='+usedsq);
            goal.innerHTML=null;
            tutor.innerHTML=null;
            break;
        case 4:
            //direct to post-test_1
            var complete=check_complete();
            if(complete==-1)
            {
                alert("Task not done yet.");
                return -1;
            }
            var win=check_win();
            if(win==-1)
            {
                if(userG[0]==1 || userG[0]==3)
                {
                    alert("Task not done yet.");
                    return -1;
                }
                steplog=steplog+opstep;
            }
            else{
                steplog=steplog+opstep;
                steplog=steplog+" success";
            }
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            goal.innerHTML=null;
            tutor.innerHTML=null;
            break;
        case 5:
            //direct to post-test_2
            var complete=check_complete();
            if(complete==-1)
            {
                alert("Task not done yet.");
                return -1;
            }
            var win=check_win();
            if(win==1)
            {
                steplog=steplog+opstep;
                steplog=steplog+" success";
            }
            else
                steplog=steplog+opstep;
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex+'&HISOP='+usedsq);
            goal.innerHTML=null;
            tutor.innerHTML=null;
            break;
        case 6:
            //direct to post-test_3
            var complete=check_complete();
            if(complete==-1)
            {
                alert("Task not done yet.");
                return -1;
            }
            var win=check_win();
            if(win==1)
            {
                steplog=steplog+opstep;
                steplog=steplog+" success";
            }
            else
            {
                steplog=steplog+opstep;
                var r=confirm("Current sequence is incorrect, do you want to try one more time?");
                if(r)
                    return -1;
            }
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('post-test03.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            goal.innerHTML=null;
            tutor.innerHTML=null;
            break;
        case 7:
            //direct to post-test_4
            var complete=check_complete();
            if(complete==-1)
            {
                alert("Task not done yet.");
                return -1;
            }
            var win=check_win();
            if(win==1)
            {
                steplog=steplog+opstep;
                steplog=steplog+" success";
            }
            else
                steplog=steplog+opstep;
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('post-test04.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            goal.innerHTML=null;
            tutor.innerHTML=null;
            break;
        case 8:
            //direct to result page
            var complete=check_complete();
            if(complete==-1)
            {
                alert("Task not done yet.");
                return -1;
            }
            var win=check_win2();
            if(win==1)
            {
                steplog=steplog+opstep;
                steplog=steplog+" success";
            }
            else
                steplog=steplog+opstep;
            steplog=steplog+" , "+stageexp+"_end;";
            attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
            window.location.replace('Logs/result.php');
            break;

    }

}