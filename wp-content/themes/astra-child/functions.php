<?php
function mychildtheme_enqueue_styles() {
    wp_enqueue_style('child-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.min.css', array('child-style'), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'mychildtheme_enqueue_styles');

function psw_custom_scripts_cdns() {
    ?>
	<link rel="stylesheet" href="http://localhost/la_casa_del_tapicero/wp-content/themes/astra-child/style.min.css" type="text/css"/>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <?php
}
add_action('wp_head', 'psw_custom_scripts_cdns');