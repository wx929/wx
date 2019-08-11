<?php
$db = mysqli_connect("127.0.0.1","root","","zhuce");
mysqli_query($db,"set names 'utf8'"); 
mysqli_query($db,"set character set 'utf8'");//读库文字编码，解决乱码问题
$coint=$_REQUEST["coint"]*20;
$get="SELECT * FROM `goodlists` limit $coint,20 ";
$result = mysqli_query($db, $get);
echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC), true);
//把数据传入数据库
// $data = file_get_contents("../json/goodlist.json");
// $data = json_decode($data,true);
// for($i=0;$i<count($data);$i++){
//    $a= $data[$i]["a"];
//    $b= $data[$i]["b"];
//    $c= $data[$i]["c"];
//    $d= $data[$i]["d"]; 
//    $e= $data[$i]["e"];
//    $f= $data[$i]["f"];
//    $sql = "INSERT INTO `goodlists` ( `bigimg`, `smallimg`,`title`,`activit`,`sale_price`,`original_price`) VALUES
//     ('$a', ' $b','$c','$d','$e','$f')";
//     mysqli_query($db, $sql);
// }

?>