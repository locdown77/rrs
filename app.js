var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
}
$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title=""Вверх"">Вверх</a>');
});

