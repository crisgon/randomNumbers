var $currentLottery = document.querySelector('[data-js="currentLottery"]');
var $numDrawns = document.querySelector('[data-js="numDrawns"]');
var $lastDrawn = document.querySelector('[data-js="lastDrawn"]');
var $newDrawn = document.querySelector('[data-js="newDrawn"]');





var oldDrawn;
$contDrawns = 0;
$newDrawn.addEventListener('click', changeHtml)


function drawnNumber(){
	return Math.round(Math.random() * 100 - 1);
}


function changeHtml(){
	oldDrawn = $currentLottery.innerText;
	$lastDrawn.innerHTML = oldDrawn;
	$currentLottery.innerHTML = drawnNumber();
	$numDrawns.innerHTML = $contDrawns += 1;
}