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

    $sql_mining_history = "SELECT id,amount,description,created_at FROM `tbl_income_wallet` where user='$user';";

    $result = $conn->query($sql_mining_history);

    $sql_totoal_mining= "SELECT SUM(amount) as totalamount FROM `tbl_income_wallet` where user='$user';";

    $result2 = $conn->query($sql_totoal_mining);

    $sql_today_mining= "SELECT SUM(amount) as todayamount FROM `tbl_income_wallet` where user='$user' and cast(created_at as Date) = cast(CURRENT_TIMESTAMP as Date);";

    $result3 = $conn->query($sql_today_mining);

    $user_mining_history = [];

    $user_total_mining=[];

    $user_today_mining=[];

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        $user_mining_history[] = $row;
      }
    }
    
    if ($result2->num_rows > 0) {
      // output data of each row
      while($row = $result2->fetch_assoc()) {
        $user_total_mining[] = $row;
      }
    }

    if ($result3->num_rows > 0) {
        // output data of each row
        while($row = $result3->fetch_assoc()) {
          $user_today_mining[] = $row;
        }
      }

    echo json_encode(array(
        'mininghistory' => $user_mining_history,
        'total'=> $user_total_mining,
        'today' => $user_today_mining
    ));

    $conn->close();


