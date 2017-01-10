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

function submit() {
    var stageexp=stages[stageI[0]];
    var stageindex=Number(stageI[0])+1;
    steplog=steplog+" , "+stageexp+"_end;";
    attack_a("Logs/steplog.php","&MID="+userID[0],"&log="+steplog);
    switch(Number(stageI[0])){
        case 0:
            //direct to training-1
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            break;
        case 1:
            //direct to training-2
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            break;
        case 2:
            //direct to training-3
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            break;
        case 3:
            //direct to post-test_1
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            break;
        case 4:
            //direct to post-test_2
            window.location.replace('csgtest.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            break;
        case 5:
            //direct to post-test_3
            window.location.replace('post-test03.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            break;
        case 6:
            //direct to post-test_4
            window.location.replace('post-test04.html?MID='+userID[0]+'&GROUP='+userG[0]+'&STAGE='+stageindex);
            break;
        case 7:
            window.location.replace('Logs/result.php');
            break;

    }

}