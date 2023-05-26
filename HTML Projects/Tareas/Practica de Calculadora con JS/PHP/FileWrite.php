<?php
$myFile = "../Assets/Procedure.txt";

$fh = fopen($myFile, 'w') or die("Can't Open File!");
$stringData = $_POST["name"];
fwrite($fh, $stringData);
fclose($fh);
?>  