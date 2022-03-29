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

    $sql = "SELECT * from `User` where user='$user' ";

    $result = $conn->query($sql);

    $user_record = [];

    $sql2 = "SELECT * from `Transaction` where user='$user' ";

    $result2 = $conn->query($sql2);

    $user_tranasction = [];

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
        $user_tranasction[] = $row;
        //   print_r(json_encode(array($row)));
        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
      }
    } 

    echo json_encode(array(
        'user' => $user_record,
        'transaction'=>$user_tranasction
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


