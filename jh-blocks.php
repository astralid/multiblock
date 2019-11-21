<?php
/**
 * Plugin Name:		JH Blocks
 * Plugin URI:		https://github.com/astralpub/jh-blocks
 * Description:		Additional Gutenberg editor blocks.
 * Version:			1.0.0
 * Author:			JaniH
 * Author URI:		https://janih.eu
 * License:			GPL-2.0+
 * License URI:		http://www.gnu.org/licenses/gpl-2.0.txt
 */

function outer_block_register_block() {
    wp_register_script(
        'outer-block',
        plugins_url( 'outer-block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'outer-block.js' )
    );
 
    wp_register_style(
        'outer-block-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );
 
    wp_register_style(
        'outer-block',
        plugins_url( 'style.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );
 
    register_block_type( 'jh-blocks/outer-block', array(
        'style' => 'outer-block',
        'editor_style' => 'outer-block-editor',
        'editor_script' => 'outer-block',
    ) );
}
add_action( 'init', 'outer_block_register_block' );