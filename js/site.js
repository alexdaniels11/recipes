
// Search Expandable Table
	$("#searchExpandableTable").keyup(function(){
	    _this = this;
	    $.each($("#searchTable tbody tr.expand-tr"), function() {
	        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
	           $(this).hide();
	        else
	           $(this).show();                
	    });
	});

// Expand rows with more data
    $('tr.expand-tr').click(function(){
	    $(this).nextUntil('tr.expand-tr').css('display', function(i,v){
	        return this.style.display === 'table-row' ? 'none' : 'table-row';
	    });
	});
	$(document).on('click', '.expand-tr', function () {
	    $(this).find('.minus, .plus').toggleClass('minus plus');
	    $(this).find('.background--white, .background--gray').toggleClass('background--white background--gray');
	});