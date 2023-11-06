/*// quand on clique sur le bouton , bascule entre afficher et cacher  
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  //Ferme le dropdown quand on clique en dehors 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/

  const dropdown = document.querySelector('dropdown')
  const btnDrop = document.querySelector('bloc-top')

  let toggleIndex = 0;

  btnDrop.addEventListener('click', function()=>{
    console.log(dropdown.scrollHeight);
    if (toggleIndex===0){
        dropdown.computedStyleMap.height = `${dropdown.scrollHeight}px`;
        toggleIndex++;
    }else{
        dropdown.computedStyleMap.height = `${btnDrop.scrollHeight}px`;
        toggleIndex --;
    }
  })