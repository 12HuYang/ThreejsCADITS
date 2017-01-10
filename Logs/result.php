<?php
/**
 * Created by PhpStorm.
 * User: yangh_000
 * Date: 1/10/2017
 * Time: 2:29 PM
 */
    //$code=$_GET["code"];
    $code = unique_id();

function unique_id($l=8){
    return substr(md5(uniqid(mt_rand(), true)), 0, $l);
}
    echo "<html>";
    echo "<b> Copy the highlighted code draggingpaste it into your Amazon Mechanical Turk page, then close this page.<br>
    Make sure the code you submit to Amazon is completely same with the code here.<br></b>";
    echo "<span id=copytext style=height:auto;width:auto;background-color:pink>";
    echo $code;
    echo "<br><br>";
    echo "</span>";
    echo "<b>Copy the code: Click just before the first letter or number of the code above, hold down the mouse button while dragging your mouse to the right, 
and then release after you have selected the highlighted code. 
At the top of your browser, \"Edit\" right next to \"File\". Click Edit to reveal the drop down menu and select Copy.<br><br>
    Paste the code: At the top of your browser, \"Edit\" right next to \"File\". Click Edit to reveal the drop down menu and select Paste.<br><br></b>";

    echo "<a href='http://casas.wsu.edu'>Know more about SHiB project</a>";

?>
