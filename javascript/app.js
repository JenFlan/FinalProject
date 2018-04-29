const a = 1;

console.log(a);


/*
const remindFormOpen = () => {
	const $confremindbtn = $('.confremindbtn');
	const $confremindform = $('.confremindform');

	$confremindbtn.on('click', e => {
	$confremindform.removeClass('hidden')

});
*/

/*
const remindFormOpen = () => {
	const $confremindbtn = $('.confremindbtn');
	const $confremindform = $('.confremindform');

	$confremindbtn.on('click', e => {
	$confremindform.removeClass('hidden')

});



*/

$(document).ready(function() {
    $('#example').DataTable( {
        "order": [[ 0, "asc" ]]
    } );
});


/*
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  }); 
}

$(document).ready( function () {
    $('#table_id').DataTable();
} );
*/