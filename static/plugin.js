CKEDITOR.plugins.add( 'sing2ocls',
{
	requires: 'widget',

	icons: 'icons/twocols.png',

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