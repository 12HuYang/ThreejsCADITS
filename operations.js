/**
 * Created by yangh_000 on 12/28/2016.
 * Boolean operations with selected primitives
 */

sub2=0;
uni2=0;
com2=0;
function showoplog() {
    var unioncount=0;
    var subcount=0;
    var intercount=0;
    for(var i=0;i<oplog.length;i++)
    {
        if(oplog[i]=="sub")
            subcount++;
        if(oplog[i]=="common")
            intercount++;
        if(oplog[i]=="union1")
            unioncount++;
        if(oplog[i]=="union2")
            unioncount++;
    }
    sub2=sub-subcount;
    uni2=uni-unioncount;
    com2=com-intercount;
    var goal=document.getElementById("operation");
    var goalcontent="Subtract: "+sub2+" Union: "+uni2+" Intersect: "+com2;
    goal.innerHTML=goalcontent;
}

function addtoObjs(csg,base1,base2) {   //csgobjs objects only could be deleted when user press "GoBack" or "Restart"
                                        //csgobjs is considered as a operation history of user
    if(typeof (base1)==='undefined') base1=null;
    if(typeof (base2)==='undefined') base2=null;
    var obj={
        csgobj: csg,
        baseobj1: base1,
        baseobj2: base2
    };
    csgobjs.push(obj);
}

function subtract() {
    if(sub2==0)
    {
        alert("No subtract operation available");
        return -1;
    }
    if(selection.length!=2)
    {
        alert("Invalid operation. selection.length =" + selection.length);
        return -1;
    }
    var first=meshfind(selection[0]);
    var second=meshfind(selection[1]);
    var newcsg=csgs[first].subtract(csgs[second]);
    addtoObjs(newcsg,csgs[first],csgs[second]);
    var obj=csgobjs[csgobjs.length-1];
    obj.basename1=csgobjs[first].name;
    obj.basename2=csgobjs[second].name;
    obj.name="subtract";
    obj.opcount=subtractcoutnt++;
    var big,small;
    if(first>second){
        big=first;
        small=second;
    }else{
        big=second;
        small=first;
    }
    csgs.splice(small,1);
    csgs.splice(big-1,1);
    //csgobjs.splice(small,1);
    //csgobjs.splice(big-1,1);
    csgs.push(newcsg);
    scene.remove(meshs[first]);
    scene.remove(meshs[second]);
    var mesh=csgs[csgs.length-1].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    meshs.splice(small,1);
    meshs.splice(big-1,1);
    meshs.push(mesh);
    scene.add(meshs[meshs.length-1]);
    selection=[];
    steplog=steplog+" ["+obj.basename1+", subtract ,"+obj.basename2+"], ";
    if(Number(stageI[0])!=8)
        if((oplog.indexOf("sub"))!=-1)
            return -1;
        oplog.push("sub");
    showoplog();
}

function union() {
    if(uni2==0)
    {
        alert("No union operation available");
        return -1;
    }
    if(selection.length!=2)
    {
        alert("Invalid operation. selection.length =" + selection.length);
        return -1;
    }
    var first=meshfind(selection[0]);
    var second=meshfind(selection[1]);
    var newcsg=csgs[first].union(csgs[second]);
    addtoObjs(newcsg,csgs[first],csgs[second]);
    var obj=csgobjs[csgobjs.length-1];
    obj.basename1=csgobjs[first].name;
    obj.basename2=csgobjs[second].name;
    obj.name="union";
    obj.opcount=unioncount++;
    var big,small;
    if(first>second){
        big=first;
        small=second;
    }else{
        big=second;
        small=first;
    }
    csgs.splice(small,1);
    csgs.splice(big-1,1);
    csgs.push(newcsg);
    //csgobjs.splice(small,1);
    //csgobjs.splice(big-1,1);
    scene.remove(meshs[first]);
    scene.remove(meshs[second]);
    var mesh=csgs[csgs.length-1].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    meshs.splice(small,1);
    meshs.splice(big-1,1);
    meshs.push(mesh);
    scene.add(meshs[meshs.length-1]);
    selection=[];
    steplog=steplog+" ["+obj.basename1+", union ,"+obj.basename2+"], ";
    if(Number(stageI[0])!=8)
        if((oplog.indexOf("union2"))!=-1)
           return -1;
        if((oplog.indexOf("union1"))!=-1)
            oplog.push("union2");
        else
            oplog.push("union1");
    showoplog();
}

function intersect() {
    if(com2==0)
    {
        alert("No intersect operation available.");
        return -1;
    }
    if(selection.length!=2)
    {
        alert("Invalid operation. selection.length =" + selection.length);
        return -1;
    }
    var first=meshfind(selection[0]);
    var second=meshfind(selection[1]);
    var newcsg=csgs[first].intersect(csgs[second]);
    addtoObjs(newcsg,csgs[first],csgs[second]);
    var obj=csgobjs[csgobjs.length-1];
    obj.basename1=csgobjs[first].name;
    obj.basename2=csgobjs[second].name;
    obj.name="common";
    obj.opcount=commoncount++;
    var big,small;
    if(first>second){
        big=first;
        small=second;
    }else{
        big=second;
        small=first;
    }
    csgs.splice(small,1);
    csgs.splice(big-1,1);
    //csgobjs.splice(small,1);
    //csgobjs.splice(big-1,1);
    csgs.push(newcsg);
    scene.remove(meshs[first]);
    scene.remove(meshs[second]);
    var mesh=csgs[csgs.length-1].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    meshs.splice(small,1);
    meshs.splice(big-1,1);
    meshs.push(mesh);
    scene.add(meshs[meshs.length-1]);
    selection=[];
    steplog=steplog+" ["+obj.basename1+", intersect ,"+obj.basename2+"], ";
    if(Number(stageI[0])!=8)
        if((oplog.indexOf("common"))!=-1)
            return -1;
        oplog.push("common");
    showoplog();
}

function Restart() {
    var r=confirm("This action will erase all shapes, do you still want to do that ?");
    if(r)  //true
    {
        for(var i=0;i<meshs.length;i++)
        {
            scene.remove(meshs[i]);
        }
        cyx=false;
        cyy=false;
        cyz=false;
        excube=false;
        exsphere=false;
        unioncount=0;
        commoncount=0;
        subtractcoutnt=0;

        for(i=0;i<meshs.length;i++)
        {
            meshs.pop();
            csgs.pop();
        }
        for(i=0;i<csgobjs.length;i++) csgobjs.pop();
        for(i=0;i<selection.length;i++) selection.pop();
        for(i=0;i<oplog.length;i++) oplog.pop();
    }

    steplog=steplog+" Restart, ";
    //window.location.href=this.href;
    //window.location.reload();
    showoplog();
}

function traverse_csgobjs(csgobj) {
    for(var i=0;i<csgobjs.length;i++)
    {
        var obj=csgobjs[i];
        if(obj.csgobj==csgobj)
            return i;
    }
    return -1;
}

function csgsfind(csgobj) {
    if(csgs.length>0)
    {
        for(var i=0;i<csgs.length;i++)
        {
            if(csgs[i]==csgobj)
                return i;
        }
    }
    return -1;
}

function GoBack() {
    var csgobj=csgobjs.pop();
    if(!csgobj) return -1;
    var csgindex=csgsfind(csgobj.csgobj);
    var mesh=meshs[csgindex];
    meshs.splice(csgindex,1);
    scene.remove(mesh);
    csgs.splice(csgindex,1);
    InitValidation(csgobj);
    if(csgobj.baseobj1 && csgobj.baseobj2)
    {
        var b1=traverse_csgobjs(csgobj.baseobj1);
        var b2=traverse_csgobjs(csgobj.baseobj2);
        var bobj1=csgobjs[b1].csgobj;
        var bobj2=csgobjs[b2].csgobj;
        csgs.push(bobj1);
        csgs.push(bobj2);
        var mesh1=bobj1.toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
        meshs.push(mesh1);
        scene.add(mesh1);
        var mesh2=bobj2.toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
        meshs.push(mesh2);
        scene.add(mesh2);
    }
    for(var i=selection.length-1;i>-1;i--){
        selection[i].material.emissive.setHex(selection[i].currentHex);
        selection.pop();
    }
    steplog=steplog+" GoBack, ";
    oplog.pop();
    showoplog();

}

function InitValidation(csgobj) {
    if(csgobj.name=="exsphere") exsphere=false;
    if(csgobj.name=="excube") excube=false;
    if(csgobj.name=="cyz") cyz=false;
    if(csgobj.name=="cyy") cyy=false;
    if(csgobj.name=="cyx") cyx=false;
}