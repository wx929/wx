<?php

$db = mysqli_connect("127.0.0.1","root","","zhuce");
// if($db){
//   echo 1;
// }
$password = $_REQUEST["password"];
$phone = $_REQUEST["phone"];
// var_dump($password);
// var_dump($phone);
// echo $password.$phone;
$sql = "INSERT INTO `zhuche1` ( `password`, `phone`) VALUES ('$password', '$phone')";
$result = mysqli_query($db, $sql);
// var_dump($result);
// #bool(false)  | bool(true)
// var_dump($result);

/* 返回JSON数据给客户端 */
/* 规范：{"status":"success","msg":"注册成功","data":""} */
$data = array("status"=>"", "msg"=>"", "data"=>"");
if($result)
{
  $data["status"] = "success";
  $data["msg"] = "恭喜你，注册成功！";
}else{
  $data["status"] = "error";
  $data["msg"] = "抱歉，用户名或者手机号码已经被注册了！";
}
echo json_encode($data,true);

?>