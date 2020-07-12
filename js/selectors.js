// declare your functions here...
function paragraphSelector(){
  return $("p").get();
}

function lastImageSelector(){
  return $("img:last").get(0);
}

function ninjaBabySelector(){
  return $('#baby-ninja').get(0);
}

function divSelector(){
  return $('.pics').get();
}

function firstListItem(){
  return $('ul #pic-list: first-child').get();
}
