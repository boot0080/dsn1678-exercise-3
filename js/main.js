
var salesDetails = $('.sales__details');
var sales = $('.sales');


var buttonClickHandler = function () {
	var isActive = salesDetails.attr('data-state');
	
	if (isActive == 'active') {
		salesDetails.attr('data-state', 'inactive');
	} else {
		salesDetails.attr('data-state', 'active');
	}
};	

sales.on('click', buttonClickHandler);


var salesDetailsRight = $('.sales__details-right');
var salesRight = $('.sales-right');


var buttonClickHandlerRight = function () {
	var isActive = salesDetailsRight.attr('data-state');
	
	if (isActive == 'active') {
		salesDetailsRight.attr('data-state', 'inactive');
	} else {
		salesDetailsRight.attr('data-state', 'active');
	}
};	

salesRight.on('click', buttonClickHandlerRight);

