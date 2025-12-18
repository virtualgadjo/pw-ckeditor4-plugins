CKEDITOR.plugins.add('softhyphen', {
	icons: 'softhyphen',
	init : function( editor )
	{
		editor.ui.addButton( 'softhyphen', {
			label: 'Insert soft hyphen',
			command: 'insertSh',
		});
		editor.addCommand( 'insertSh', {
			exec: function( editor ) {
				editor.insertHtml('&shy;', 'text');
			}
		});
		// editor.setKeystroke( CKEDITOR.SHIFT + 32, 'insertSh' );
	}
});