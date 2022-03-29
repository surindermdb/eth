<?php 

include_once('config.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

    if(empty($_GET)){
        die('go away!');
    }

    extract($_GET);
   
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * from `Exchange` where user='$user' ";

    $result = $conn->query($sql);

    $user_record = [];

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        $user_record[] = $row;
        //   print_r(json_encode(array($row)));
        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
      }
    }

    echo json_encode(array(
        'exchnage' => $user_record,
    ));


    $conn->close();


