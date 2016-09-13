CKEDITOR.dialog.add( 'singDialog', function( editor ) {
	return {
		title: "Singular Two Cols",
		minWidth: 600,
		minHeight: 400,

		contents: [
			{
				id: 'id-left-col',
				label: 'Left column',
				elements: [
					{
			            type: 'textarea',
			            id: 'el-left-col',
			            label: 'Left column',
		            	'default':''
			        }
				]
			},
			{
				id: 'id-right-col',
				label: 'Right column',
				elements: [
					{
			            type: 'textarea',
			            id: 'el-right-col',
			            label: 'Right column',
		            	'default':''
			        }
				]
			}
		],
		onOk: function() {
            var dialog = this;
            //var colWrap = dialog.getContentElement('id-left-col');
            //editor.insertElement( colWrap );
            var left_col_text = dialog.getContentElement( 'id-left-col','el-left-col' ).getInputElement();
            var right_col_text = dialog.getContentElement( 'id-right-col','el-right-col' ).getInputElement();

            editor.insertElement( left_col_text );
            editor.insertElement( right_col_text );
        }

	};
});