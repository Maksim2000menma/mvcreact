<?php
    $conn = mysqli_connect("localhost", "root", "");
    $select_db = mysqli_select_db($conn,'appusers');
    mysqli_query($conn, "SET CHARACTER SET 'utf8'");

    $last_name= $_POST['last_name'];
    $first_name= $_POST['productCode'];

    $sql_check = "INSERT INTO userinfo (last_name, first_name) VALUES ('$last_name', '$first_name')";

    $list = mysqli_query( $conn, $sql_check);
    $num  = mysqli_fetch_assoc($list);

    if($num >0)
        echo "OK";

    else
        echo "NOK";

?>
