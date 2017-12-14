<?php
    header("Content-Type:application/json");
    $userName=$_REQUEST['name'];
    $result=['tip'=>"Hello".$userName];
    echo json_encode($result);
?>