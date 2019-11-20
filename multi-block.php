<?php
/**
 * Plugin Name: MultiBlock
 */
 
function multi_block_register_block() {
    wp_register_script(
        'multi-block',
        plugins_url( 'block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
    );
 
    wp_register_style(
        'multi-block-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );
 
    wp_register_style(
        'multi-block',
        plugins_url( 'style.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );
 
    register_block_type( 'multi-block/multi-block', array(
        'style' => 'multi-block',
        'editor_style' => 'multi-block-editor',
        'editor_script' => 'multi-block',
    ) );
}
add_action( 'init', 'multi_block_register_block' );