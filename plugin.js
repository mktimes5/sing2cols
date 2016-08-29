CKEDITOR.plugins.add( 'mikesCK',
{
	init: function( editor )
	{
		editor.addCommand( 'mikesCKcom',
			{
				exec : function( editor )
			{    
				
				editor.insertHtml( '<p>MikesCK</p>' , 'unfiltered_html' );
			}
		});


		
		editor.ui.addButton( 'mikesCK',
			{
				label: 'Insert mikes phrase',
				command: 'mikesCKcom',
				icon: this.path + 'icons/circle.png'
			} );

	}
} );