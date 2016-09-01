CKEDITOR.plugins.add( 'singtwocols',
{
	init: function( editor )
	{
		editor.addCommand( 'singtwocolscom', new CKEDITOR.dialogCommand( 'singDialog' ) );


		
		editor.ui.addButton( 'singtwocols',
			{
				label: 'Insert singtwo phrase',
				command: 'singtwocolscom',
				icon: this.path + 'icons/twocols.png'
		} );

		editor.addContentsCss( this.path + 'styles/singtwocols.css' );

		CKEDITOR.dialog.add( 'singDialog', this.path + 'dialogs/singcolsDialog.js' );

	}
} );

