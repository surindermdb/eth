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

    $sql = "SELECT * from `User` where ReferranceId='$ReferranceId' ";

    $result = $conn->query($sql);

    $sql2="SELECT * FROM `User` WHERE ReferranceId='$ReferranceId'
    UNION
    select * from `User` where ReferranceId in(select unique_id from `User` where  ReferranceId='$ReferranceId')";

    $result2 = $conn->query($sql2);

    $user_record = [];

    $user_team=[];

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        $user_record[] = $row;
        //   print_r(json_encode(array($row)));
        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
      }
    }
    
    if ($result2->num_rows > 0) {
      // output data of each row
      while($row = $result2->fetch_assoc()) {
        $user_team[] = $row;
        //   print_r(json_encode(array($row)));
        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
      }
    }

    echo json_encode(array(
        'directpromote' => $user_record,
        'team'=>$user_team
    ));

    // if ($conn->query($sql) === TRUE) {
    //     echo json_encode(array(
    //         'status' => 1,
    //         'message' => 'user already join '
    //     ));
    // } else {
    //     echo json_encode(array(
    //         'status' => 0,
    //         'message' => "Error: " . $sql . "<br>" . $conn->error
    //     ));
    // }

    $conn->close();


