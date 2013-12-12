<?php $meta_values = post_custom('hoge');
  if(empty($meta_values)) {
    echo "空です";
  } else {
    echo post_custom('hoge');
  }
?>