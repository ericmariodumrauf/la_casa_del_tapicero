<?php
function mychildtheme_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style-min', get_stylesheet_directory_uri() . '/style.min.css', array('parent-style'), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'mychildtheme_enqueue_styles');