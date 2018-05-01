const a = 1;

console.log(a);


/* final after meeting Taq*/


const remindFormOpen = () => {
	const $confremindbtn = $('.js-confremindbtn');
	const $confremindform = $('.js-confremindform');
  	const $submitremind =  $('.js-submitremind')

	$confremindbtn.on('click', e => {
	 $confremindform.removeClass('hidden')
  });

  $submitremind.on('click', e => {
    $confremindform.addClass('hidden')
  })

};
remindFormOpen()



$.fn.dataTable.ext.type.detect.unshift(
    function ( d ) {
        return d === 'January' || 
               d === 'February' || 
               d === 'March' ||
               d === 'April' ||
               d === 'May' ||
               d === 'June' ||
               d === 'July' ||
               d === 'August' ||
               d === 'September' ||
               d === 'October' ||
               d === 'November' ||
               d === 'December' ?
            'month-value' :
            null;
    }
);
 
$.fn.dataTable.ext.type.order['month-value-pre'] = function ( d ) {
    switch ( d ) {
      case 'January': return 1;
      case 'February': return 2;
      case 'March': return 3;
      case 'April': return 4;
      case 'May': return 5;
      case 'June': return 6;
      case 'July': return 7;
      case 'August': return 8;
      case 'September': return 9;
      case 'October': return 10;
      case 'November': return 11;
      case 'December': return 12;
    }
    return 0;
};


$(document).ready(function() {
    $('#example').DataTable( {
        "order": [[ 0, "asc" ]]
    } );
});


/*
 For the sponsor update button,

 in your onclick, do this:
 window.location.href = 'sponsoreventupdate.html'
*/

const redirectConfHub = () => {
	const $goConfHub = ('.goconfhub', e => {
		$goConHub.on('click', e => {
			window.location.href = 'conferencehub2018.html'
		} )
	})
}

const $sponsorEventFormOpen = () => {
	const $sponsorUpdateBtn = $('.js-sponsorupdatebtn');
	$sponsorUpdateBtn.on('click', e => {
		window.location.href = 'sponsoreventupdate.html'
		redirectConfHub;
	})
};

/* this has something to do with creating a modal but I 
don't know what else is needed. Something in HTML?

const $eventLoginOpen = $('.js-eventlogin');
	$eventLoginOpen.modal({

	})


const $modalOpen = $('.js-modal-open');

$modalOpen.on('click', e => {
	$modalOpen.modal({
		fadeDuration: 1000
	});
});

*/




/* my attempt map
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



/* My attempt
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








