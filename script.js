var nameList = [
	'gio',
	'anna',
	'chiara',
	'ella',
	'sarah',
	'sara'
];

$(document).ready(function(){
	$('section').on('click', '#go', function(){
		luckyName(nameList);
    });
});

function luckyName(nameList) {
	var section = $('section');
	var currentSanta = $('#santaName').val();
    console.log('current name is', currentSanta);

    var randomName;
    do {
        randomName = pickRandomName(nameList); 
    } while(currentSanta === randomName);
    
    $('p').html(randomName);
    console.log('random name is', randomName);
    return;
}

var pickRandomName = function(randomName){
	var randomNameString = nameList[Math.floor(Math.random() * nameList.length)];
	return randomNameString;
};
