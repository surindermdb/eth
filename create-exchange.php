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

    $sql = "INSERT INTO `Exchange`( `ETH`, `USDT`,`user`) VALUES ('$ETH','$USDT','$user');";

    $insert = "INSERT INTO `tbl_income_wallet`(`user`,`amount`,`type`,`description`) VALUES ('".$user."','".-$ETH."','wihdraw_reqiest', 'Wihdraw Reqiest')";
           
    if ($conn->query($sql) === TRUE) {
        if ($conn->query($insert) === TRUE) {
            
            echo json_encode(array(
                'status' => 1,
                'message' => 'New record created successfully'
            ));
            print_r($row);
        }
        
    } else {
        echo json_encode(array(
            'status' => 0,
            'message' => "Error: " . $sql . "<br>" . $conn->error
        ));
    }

    $conn->close();


