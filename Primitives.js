/**
 * Created by yangh_000 on 12/28/2016.
 */

function cylinder_x() {
    if(cyx)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var cy_xMesh= new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,2.2,32),material);
    var cy_xCSG=new ThreeBSP(cy_xMesh);
    csgs.push(cy_xCSG);
    addtoObjs(cy_xCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyx";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyx=true;
}

function cylinder_y() {
    if(cyy)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var cy_yMesh=new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,2.2,32),material);
    cy_yMesh.rotation.x=Math.PI/2;
    var cy_yCSG= new ThreeBSP(cy_yMesh);
    csgs.push(cy_yCSG);
    addtoObjs(cy_yCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyy";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyy=true;
}

function cylinder_z() {
    if(cyz)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var cy_zMesh=new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,2.2,32),material);
    cy_zMesh.rotation.z=Math.PI/2;
    var cy_zCSG= new ThreeBSP(cy_zMesh);
    csgs.push(cy_zCSG);
    addtoObjs(cy_zCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyz";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyz=true;
}

function cube() {
    if(excube)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var cubeMesh	= new THREE.Mesh( new THREE.CubeGeometry( 1.6, 1.6, 1.6 ),material);
    cubeMesh.position.x=0;
    var cubeCSG= new ThreeBSP(cubeMesh);
    csgs.push(cubeCSG);
    addtoObjs(cubeCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="excube";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    excube=true;
}

function sphere() {
    if(exsphere)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var sphereMesh = new THREE.Mesh( new THREE.SphereGeometry( 1, 32, 16),material);
    var sphereCSG=new ThreeBSP(sphereMesh);
    csgs.push(sphereCSG);
    addtoObjs(sphereCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="exsphere";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    exsphere=true;

}

//post-test3 primitives

function big_sphere() {
    if(exsphere)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var sphereMesh = new THREE.Mesh( new THREE.SphereGeometry( 1.2, 32, 16),material);
    var sphereCSG=new ThreeBSP(sphereMesh);
    csgs.push(sphereCSG);
    addtoObjs(sphereCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="exsphere";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    exsphere=true;

}

function ssphere_x(){
    if(cyx)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var sphereMesh = new THREE.Mesh( new THREE.SphereGeometry( 0.18, 32, 16),material);
    sphereMesh.translateY(0.8);
    sphereMesh.translateX(-0.45);
    sphereMesh.translateZ(-0.45);
    var sphereCSG=new ThreeBSP(sphereMesh);
    csgs.push(sphereCSG);
    addtoObjs(sphereCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyx";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyx=true;
}

function ssphere_y(){
    if(cyy)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var sphereMesh = new THREE.Mesh( new THREE.SphereGeometry( 0.18, 32, 16),material);
    sphereMesh.translateY(0.8);
    var sphereCSG=new ThreeBSP(sphereMesh);
    csgs.push(sphereCSG);
    addtoObjs(sphereCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyy";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyy=true;
}

function ssphere_z(){
    if(cyz)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var sphereMesh = new THREE.Mesh( new THREE.SphereGeometry( 0.18, 32, 16),material);
    sphereMesh.translateY(0.8);
    sphereMesh.translateX(0.45);
    sphereMesh.translateZ(0.45);
    var sphereCSG=new ThreeBSP(sphereMesh);
    csgs.push(sphereCSG);
    addtoObjs(sphereCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyz";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyz=true;
}

//post-test 4 primitivies

function big_cylinder(){
    if(cyx)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var cy_xMesh= new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,1.8,32),material);
    cy_xMesh.rotation.z=Math.PI/6;
    cy_xMesh.translateZ(0.2);
    cy_xMesh.translateX(-0.1);
    var cy_xCSG=new ThreeBSP(cy_xMesh);
    csgs.push(cy_xCSG);
    addtoObjs(cy_xCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyx";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyx=true;
}

function small_cylinder() {
    if(cyy)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var cy_xMesh= new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.1,32),material);
    cy_xMesh.rotation.x=Math.PI/1.9;
    cy_xMesh.rotation.z=Math.PI/20;
    cy_xMesh.translateZ(-0.1);
    cy_xMesh.translateX(-0.4);
    cy_xMesh.translateY(0.2);
    var cy_xCSG=new ThreeBSP(cy_xMesh);
    csgs.push(cy_xCSG);
    addtoObjs(cy_xCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyy";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyy=true;
}

function sphere_x() {
    if(cyz)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var sphereMesh = new THREE.Mesh( new THREE.SphereGeometry( 1.2, 32, 16),material);
    var sphereCSG=new ThreeBSP(sphereMesh);
    csgs.push(sphereCSG);
    addtoObjs(sphereCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="cyz";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    cyz=true;
}

function sphere_y() {
    if(exsphere)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var sphereMesh = new THREE.Mesh( new THREE.SphereGeometry( 1, 32, 16),material);
    sphereMesh.translateY(-0.8);
    sphereMesh.translateX(-0.8);
    var sphereCSG=new ThreeBSP(sphereMesh);
    csgs.push(sphereCSG);
    addtoObjs(sphereCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="exsphere";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    exsphere=true;
}

function cuboid() {
    if(excube)
        return -1;
    var material=new THREE.MeshLambertMaterial({color: 0xa9ff, shading: THREE.SmoothShading });
    var cubeMesh	= new THREE.Mesh( new THREE.CubeGeometry( 0.3, 0.1, 0.13 ),material);
    //cubeMesh.position.x=0;

    cubeMesh.rotation.x=Math.PI/1.9;
    cubeMesh.rotation.z=Math.PI/20;
    cubeMesh.translateZ(-0.1);
    cubeMesh.translateX(-0.4);
    cubeMesh.translateY(0.2);

    var cubeCSG= new ThreeBSP(cubeMesh);
    csgs.push(cubeCSG);
    addtoObjs(cubeCSG);
    var obj=csgobjs[csgobjs.length-1];
    obj.name="excube";
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    excube=true;
}