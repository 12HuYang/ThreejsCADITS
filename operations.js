/**
 * Created by yangh_000 on 12/28/2016.
 * Boolean operations with selected primitives
 */

function addtoObjs() {
    var obj={};
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