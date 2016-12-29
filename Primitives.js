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
    var last=csgs.length-1;
    mesh=csgs[last].toMesh(new THREE.MeshLambertMaterial({color: 0xa9ff,shading:THREE.SmoothShading}));
    currentHex=mesh.material.emissive.getHex();
    meshs.push(mesh);
    scene.add(mesh);
    exsphere=true;

}