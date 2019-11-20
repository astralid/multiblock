( function( blocks, element, editor, components) {
    var el = element.createElement;
    var RichText = editor.RichText;
 
    blocks.registerBlockType( 'multi-block/multi-block', {
        title: 'MultiBlock',
        icon: 'universal-access-alt',
        category: 'layout',
        example: {},
		
        attributes: {
			id: {
				type: 'string',
				source: 'attribute',
				selector: 'div',
				attribute: 'id'
			}
		},
		
        edit: function( props ) {
            return el('div', { className: props.className }, [
				el(editor.InnerBlocks, {}),
				el(
					components.TextControl,
					{	value: props.attributes.id,
						onChange: function( val ){
							props.setAttributes({ id: val });
						},
						placeholder: 'id'
					}
				)
            ]);
        },
		
        save: function( props ) {
            return el('div', {id: props.attributes.id, className: props.className}, [
                el(editor.InnerBlocks.Content, {})
            ]);
        },
		
    } );
}(
    window.wp.blocks,
    window.wp.element,
	window.wp.editor,
	window.wp.components
) );