CKEDITOR.plugins.add( 'singtwocols',
{
	init: function( editor )
	{
		editor.addCommand( 'singtwocolscom',
			{
				exec : function( editor )
			{    
				
				editor.insertHtml( '<p> singtwocols </p>' , 'unfiltered_html' );
			}
		});


		
		editor.ui.addButton( 'singtwocols',
			{
				label: 'Insert singtwo phrase',
				command: 'singtwocolscom',
				icon: this.path + 'icons/twocols.png'
			} );

	}
} );

