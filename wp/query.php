// ナビゲーションを含む場合
<?php
 $paged = get_query_var('paged');
 $args = array (
  'post_type' => 'post',
  'posts_per_page' => '10',
  'paged' => $paged //ページ取得
 );
  query_posts( $args ); ?>
<?php
// 投稿の表示
while(have_posts()) : the_post();
?>
//ループ内
<?php endwhile; ?>
//ページナビなど
<?php
  wp_reset_query();
?>



// queryのみ
<?php
 $paged = get_query_var('paged');
 $args = array (
  'post_type' => 'post',
  'posts_per_page' => '10',
  'paged' => $paged
 );
  query_posts( $args );
 while( have_posts() )
 {
 the_post();
?>
//ループ内
<?php
 }
 wp_reset_query();
?>