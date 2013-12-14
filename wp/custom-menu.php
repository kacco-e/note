// カスタムメニューをサイドバーに
<nav class="row-fluid">
<?php
$mcon = array(
  'theme_location'  => 'main-content',
  'menu'            => '',
  'container'       => '',
  'container_class' => '',
  'container_id'    => '',
  'menu_class'      => 'cat-item',
  'menu_id'         => '',
  'echo'            => true,
  'fallback_cb'     => 'wp_page_menu',
  'before'          => '',
  'after'           => '',
  'link_before'     => '',
  'link_after'      => '',
  'items_wrap'      => '<ul id="%1$s" class="nav nav-pills nav-stacked well-white well-mini">
  <li class="padding-left-large"><h4>関連ページ</h4></li>
  <li class="divider-gray"></li>%3$s</ul>',
  'depth'           => 0,
  'walker'          => ''
);

wp_nav_menu( $mcon );

?>
<!-- .row-fluid --></nav>