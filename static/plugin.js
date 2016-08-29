/*
CKEDITOR.plugins.add( 'sing2ocls',
{
	//requires: 'widget',

	//icons: 'icons/twocols.png',

	init: function( editor ) {
			editor.widgets.add( 'sing2cols'),
				//code here
		} );
	}

	// create a button
	editor.widgets.add( 'sing2cols' ), {
		button: 'Singular 2 columns'
	} );


} );
*/


CKEDITOR.plugins.add( 'singtwocols',
{
	init: function( editor )
	{
		editor.addCommand( 'singtwocolscom',
			{
				exec : function( editor )
			{    
				
				editor.insertHtml( '<p>sing2cols</p>' , 'unfiltered_html' );
			}
		});


		
		editor.ui.addButton( 'singtwocols',
			{
				label: 'singular 2 cols',
				command: 'singtwocolscom',
				icon: this.path + 'icons/twocols.png'
			} );

	}
} );
