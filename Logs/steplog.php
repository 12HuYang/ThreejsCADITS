<?php
/**
 * Created by PhpStorm.
 * User: yangh_000
 * Date: 1/10/2017
 * Time: 2:15 PM
 */

$input_mid=$_POST["MID"];
$steps=$_POST["log"];

$file = "log_$input_mid.txt";
file_put_contents($file,PHP_EOL.$steps,FILE_APPEND);
?>