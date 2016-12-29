/**
 * Created by yangh_000 on 12/28/2016.
 * Boolean operations with selected primitives
 */

function addtoObjs(csg,base1,base2) {
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
    csgobjs.splice(small,1);
    csgobjs.splice(big-1,1);
    csgs.push(newcsg);
    scene.remove(meshs[first]);
    scene.remove(meshs[second]);
    var mesh=csgs[csgs.length-1].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    meshs.splice(small,1);
    meshs.splice(big-1,1);
    meshs.push(mesh);
    scene.add(meshs[meshs.length-1]);
    selection=[];
}

function union() {
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
    csgobjs.splice(small,1);
    csgobjs.splice(big-1,1);
    scene.remove(meshs[first]);
    scene.remove(meshs[second]);
    var mesh=csgs[csgs.length-1].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    meshs.splice(small,1);
    meshs.splice(big-1,1);
    meshs.push(mesh);
    scene.add(meshs[meshs.length-1]);
    selection=[];
}

function intersect() {
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
    csgobjs.splice(small,1);
    csgobjs.splice(big-1,1);
    csgs.push(newcsg);
    scene.remove(meshs[first]);
    scene.remove(meshs[second]);
    var mesh=csgs[csgs.length-1].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    meshs.splice(small,1);
    meshs.splice(big-1,1);
    meshs.push(mesh);
    scene.add(meshs[meshs.length-1]);
    selection=[];
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
        meshs=[];
        csgs=[];
        selection=[];
    }
}

function GoBack() {
    var mesh=meshs.pop();
    scene.remove(mesh);
    csgs.pop();
    var csgobj=csgobjs.pop();
    InitValidation(csgobj);
    if(csgobj.baseobj1 && csgobj.baseobj2)
    {
        addtoObjs(csgobj.baseobj1);
        var obj1=csgobjs[csgobjs.length-1];
        obj1.name=csgobj.basename1;
        addtoObjs(csgobj.baseobj2);
        var obj2=csgobjs[csgobjs.length-1];
        obj2.name=csgobj.basename2;
        csgs.push(csgobj.baseobj1);
        csgs.push(csgobj.baseobj2);
        var mesh1=csgobj.baseobj1.toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
        meshs.push(mesh1);
        scene.add(mesh1);
        var mesh2=csgobj.baseobj2.toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
        meshs.push(mesh2);
        scene.add(mesh2);
    }

}

function InitValidation(csgobj) {
    if(csgobj.name=="exsphere") exsphere=false;
    if(csgobj.name=="excube") excube=false;
    if(csgobj.name=="cyz") cyz=false;
    if(csgobj.name=="cyy") cyy=false;
    if(csgobj.name=="cyx") cyx=false;
    
}