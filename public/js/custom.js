$( document ).ready(function() {
    $(document).on('click', 'div#FurnitureStyleInputDropDown .dropdown-menu', function (e) {
	  e.stopPropagation();
	});
	$(document).on('click', 'div#DeliveryTimeInputDropDown .dropdown-menu', function (e) {
	  e.stopPropagation();
	});
});