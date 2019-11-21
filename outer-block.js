 /*
  *	Outer Block:
  *		A Gutenberg editor block that can have an id attribute and inner blocks.
  */
( function( blocks, element, editor, components) {
    var el = element.createElement;
    var RichText = editor.RichText;
	let icon = el('svg', {
		width: 24,
		height: 24,
		viewBox: '0 0 24 24'
		}, [
			el('rect', {
				x:1, y:1,
				width:22,
				height:22,
				rx:1,
				stroke: 'black',
				fill: 'none'
			}),
			el('rect', {
				x: 4, y: 4,
				width: 16,
				height: 6,
				rx: 1,
				stroke: 'black',
				fill: 'none'
			}),
			el('rect', {
				x: 4, y: 14,
				width: 16,
				height: 6,
				rx: 1,
				stroke: 'black',
				fill: 'none'
			})
		]
	);
    blocks.registerBlockType( 'jh-blocks/outer-block', {
        title: 'Outer Block',
		description: 'A simple block with an id attribute and inner blocks.',
        icon: icon,
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
				el(
					components.TextControl,
					{	value: props.attributes.id,
						onChange: function( v ){
							props.setAttributes({ id: v });
						},
						placeholder: 'id'
					}
				),
				el(editor.InnerBlocks, {})
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