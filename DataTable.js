var filter_template = '';
var datatable;

$(function(){
	

	$("#filter_template").change(function() {
		//$(this).parents("form").submit();
		filter_template = $(this).val();
		// refresh data table
		datatable.fnDraw();
	});
	
	if( $("#filter_template:selected") ){
		filter_template = $("#filter_template option:selected").val();
		// refresh data table
		//datatable.fnDraw();
	};

	var datatable = $('.dataTable').dataTable({
		"sPaginationType": "full_numbers",
		"bJQueryUI": true,
		"bStateSave": true,

		"oLanguage": {
			"sProcessing": config.ProcessDataTable.sProcessing,
			"sLengthMenu": config.ProcessDataTable.sLengthMenu,
			"sZeroRecords": config.ProcessDataTable.sZeroRecords,
			"sEmptyTable": config.ProcessDataTable.sEmptyTable,
			"sInfo": config.ProcessDataTable.sInfo,
			"sInfoEmpty": config.ProcessDataTable.sInfoEmpty,
			"sInfoFiltered": config.ProcessDataTable.sInfoFiltered,
			"sSearch" : config.ProcessDataTable.sSearch,
			
			"oPaginate": {
			"sFirst":    config.ProcessDataTable.sFirst,
			"sPrevious": config.ProcessDataTable.sPrevious,
			"sNext":     config.ProcessDataTable.sNext,
			"sLast":     config.ProcessDataTable.sLast
				}
			},
		
		"bProcessing": true,
		"bServerSide": true,
		"sAjaxSource": "getdata",
		"fnServerData": function ( sSource, aoData, fnCallback ) {
			// add filter template selection
			aoData.push( { "name" : "filter_template", "value" : filter_template  } );
		    $.ajax( {
                "dataType": 'json', 
                "type": "GET", 
                "url": sSource,
                "data": aoData,
				"success": fnCallback
            } );
		 },
		"aoColumns": [ 
		            { "bSortable": true },
		            { "bSortable": true },
		            { "bSortable": false },
		            { "bSortable": true },
					{ "bSortable": true },
					{ "bSortable": false }
		        ]
		});
	
	$('body').ajaxStop( function(){
	
	});

	
	
	$(".dataTable").delegate('a.edit-modal',"click", function(e){
		e.preventDefault();
		$.fancybox({
			'type': 'iframe',
			'href' : $(this).attr('href'),
			'autoScale' : false,
			'width' : "90%",
			'height' : "90%",
		    'afterClose' : function(){
		    	document.location.href = "./";
		    }
		});
		
	}); 

});