
/**
 * Created by PhpStorm.
 * User: yangh_000
 * Date: 12/21/2016
 * Time: 11:14 AM
 */
<html>
<head>
    <script src="http://mrdoob.github.com/three.js/src/core/Raycaster.js"></script>
    <!--script src="https://threejs.org/build/three.js"></script-->
    <script src="vendor/three.js/Three.js"></script>
    <script src="vendor/three.js/RequestAnimationFrame.js"></script>
    <script src="vendor/three.js/Stats.js"></script>
    <script src="vendor/three.js/Detector.js"></script>

    <!--script src="http://mrdoob.github.com/three.js/build/three.min.js"></script-->
    <!--script src="http://github.com/evanw/csg.js"></script-->

    <script src="vendor/csg.js"></script>
    <script src="vendor/ThreeCSG.js"></script>

    <script src="THREEx.GeometryUtils.js"></script>
    <script src="THREEx.screenshot.js"></script>
    <style>
        body {
            background: #408040;
            overflow:hidden;
            padding:0;
            margin:0;

            color: #CCCCCC;
            font-family:Monospace;
            font-size:13px;
            text-align:center;
        }
        #info {
            position: absolute;
            top: 0px; width: 100%;
            padding: 5px;
        }
        #info a {
            color	: #FFAAFF;
        }
    </style>
</head>
<body>
<div id="container"></div>
<div id="info">
    <a href="/blog/2011/12/10/constructive-solid-geometry-with-csg-js/" target="_blank">LearningThree.js</a> - Contructive Solid Geometry
    <br/>
    Use
    <a href="http://evanw.github.com/csg.js/" target="_blank">csg.js</a>
    ,
    <a href="http://chandler.prallfamily.com/2011/12/constructive-solid-geometry-with-three-js/" target="_blank">ThreeCSG.js</a>
    and
    <a href="https://github.com/mrdoob/three.js/" target="_blank">three.js</a>
    <br>
    Basic Shapes:
    <a href="#cylinder_x" onclick="window.location.href=this.href;window.location.reload();">cylinder_x</a>
    <a href="#cylinder_y" onclick="window.location.href=this.href;window.location.reload();">cylinder_y</a>
    <a href="#cylinder_z" onclick="window.location.href=this.href;window.location.reload();">cylinder_z</a>
    <a href="#cube" onclick="window.location.href=this.href;window.location.reload();">cube</a>
    <a href="#sphere" onclick="window.location.href=this.href;window.location.reload();">sphere</a>
    <br>
    Operations:
    <a href="#substract" onclick="window.location.href=this.href;window.location.reload();">subtract</a>
    -
    <a href="#union" onclick="window.location.href=this.href;window.location.reload();">union</a>
    -
    <a href="#intersect" onclick="window.location.href=this.href;window.location.reload();">intersect</a>
</div>
</body>
</html>