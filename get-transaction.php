<?php 

include_once('config.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

   
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * from `Transaction`";

    $result = $conn->query($sql);

    $total_record = [];

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
         $total_record[] = $row;
        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
      }


    } else {
      // echo "0 results";
    }


    echo json_encode(array(
        'total_record' => $total_record,
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


