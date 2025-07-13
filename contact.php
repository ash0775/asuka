<?php

if($_POST) {
  echo $_POST['name'] . '<br>';
  echo $_POST['email'] . '<br>';
  echo $_POST['message'];
} else {
  echo "HTMLからのPOST送信受信に失敗しました";
}