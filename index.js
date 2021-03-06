const sections=document.querySelectorAll(".section");
const sectBtns=document.querySelectorAll(".controls");
const sectBtn=document.querySelectorAll(".control");
const allSections=document.querySelectorAll(".main-content");


function pageTransition(){

  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click",function(){
      var currentBtn=document.querySelectorAll(".active-btn");
      currentBtn[0].className=currentBtn[0].className.replace("active-btn"," ");
      this.className +="active-btn";
    });
  }
  allSections[0].addEventListener("click",function(e){
    const id=e.target.dataset.id;
    if(id){
      sectBtns.forEach(function(btn){
        btn.classList.remove("active")
      })
      e.target.classList.add("active");

      sections.forEach(function(section){
        section.classList.remove("active");
      })
      const element=document.getElementById(id);
      element.classList.add("active");
    }
  });
  const themebtn=document.querySelector(".theme-btn");
  themebtn.addEventListener("click",function(){
    var element=document.body;
    element.classList.toggle("light-mode");
  })
  }

pageTransition();
