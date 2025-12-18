CKEDITOR.plugins.add('wbr', {
	icons: 'wbr',
	init : function( editor )
	{
		editor.ui.addButton( 'wbr', {
			label: 'Insert wbr',
			command: 'insertWbr',
		});
		editor.addCommand( 'insertWbr', {
			exec: function( editor ) {
				editor.insertHtml('<wbr />', 'text');
			}
		});
		// editor.setKeystroke( CKEDITOR.CTRL + CKEDITOR.SHIFT + 32, 'insertWbr' );
	}

});