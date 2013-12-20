<?php
function has_parents_term()
// タームを特定せず、親を持つタームで分岐
{
  $title = single_term_title('', true);
  $term = get_queried_object();
  $tax = '[所属するタクソノミー名]';
  $parents = $term->parent;
  if($parents == 0 && !is_post_type_archive()){
    $title = $title . '[任意の文字]';
  } elseif(is_post_type_archive()) {
    $title = wp_title('', false, '') ;
  } else {
    $title = $title . '[任意の文字]';
  }
  return esc_html($title);
}

/*
// タームを特定する場合はこちら
function has_parents_term()
{
  $title = single_term_title('', true);
  if(is_tax('[所属するタクソノミー名]', array('[ターム名]','[ターム名]','[ターム名]','[ターム名]'))) {
    $title = $title . '[任意の文字]';
  } elseif(is_post_type_archive()) {
    $title = wp_title('', false, '') ;
  } else {
    $title = $title . '[任意の文字]';
  }
  return esc_html($title);
}
*/

// 参考
http://wordpress.stackexchange.com/questions/62763/list-child-terms-and-posts-in-the-current-term