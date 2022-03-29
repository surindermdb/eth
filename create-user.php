<?php 

include_once('config.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

   

  
    if(empty($_POST)){
        die('go away!');
    }

    extract($_POST);
   
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    $ReferranceId = $ReferranceId ? $ReferranceId : 0;

    $sql = "INSERT INTO `User`( `user`,`unique_id`, `ReferranceId`) VALUES ('$user','$unique_id','$ReferranceId');";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array(
            'status' => 1,
            'message' => 'New record created successfully'
        ));
    } else {
        echo json_encode(array(
            'status' => 0,
            'message' => "Error: " . $sql . "<br>" . $conn->error
        ));
    }

    $conn->close();


