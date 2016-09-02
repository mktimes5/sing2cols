CKEDITOR.dialog.add( 'singDialog', function( editor ) {
	return {
		title: "Singular Two Cols",
		minWidth: 400,
		minHeight: 200,

		contents: [
			{
				id: 'left-col',
				label: 'left column',
				elements: [
					{
			            type: 'html',
		                html:'<div class="col-wrap"><p>col-wrap</p></div>'
			        }
				]
			},
			{
				id:'tab-adv',
				label: 'Advanced Settings',
				elements: [
					{
		                type: 'text',
		                id: 'id',
		                label: 'Id'
            		}
				]
			}
		],
		onOk: function() {
            var dialog = this;
            var colWrap = CKEDITOR.dom.element.createFromHtml( '<div class="col-wrap"><div class="left-col"></div><div class="right-col"></div></div>' );
            editor.insertElement(colWrap);
            //var twocols = dialog.getContentElement( 'left-col' );

            //editor.insertElement( twocols );
        }

	};
});