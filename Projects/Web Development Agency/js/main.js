const meniIcon= document.getElementById("meni-icon");
const sideoutMenu= document.getElementById('sideout-menu');
const searchIcon= document.getElementById('search-icon');
const searchBox= document.getElementById('searchbox');

searchIcon.addEventListener('click', function() {
  if(searchBox.style.top == '72px') {
    searchBox.style.top ='24px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.top ='72px';
    searchBox.style.pointerEvents ='auto';
  }
});


meniIcon.addEventListener('click', function(){
  if(sideoutMenu.style.opacity == "1"){
    sideoutMenu.style.opacity ='0';
    sideoutMenu.style.pointerEvents='none';
  } else {
    sideoutMenu.style.opacity ='1';
    sideoutMenu.style.pointerEvents='auto';
  }
}

)
