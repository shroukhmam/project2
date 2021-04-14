var toggle=document.querySelector(".toggle"),
    togglediv=document.querySelectorAll(".toggle>div"),
    navul=document.querySelector("nav ul"),
    navli=document.querySelectorAll("nav ul li"),
    body = document.body,
    html = document.documentElement,
    nava=document.querySelectorAll("nav ul li a");
 

/*spinner css*/

 var width=0;
 var myspinner= setInterval(() => {
       width+=1
       document.querySelector(".topdiv").style.width =width+"%";
       document.querySelector(".precent").innerHTML=width+"%";
       if(width>=100){
        document.querySelector(".fixed").style.display="none";
        clearInterval(myspinner)
       }
       
      }, 60); 
      
 /*arrow up*/
 window.addEventListener("scroll",function(){
     if(window.scrollY>=1000){
         document.querySelector(".arrow-top").style.opacity="1"
     }else{
          document.querySelector(".arrow-top").style.opacity=0
     }
 })
 
 document.querySelector(".arrow-top").addEventListener("click",function(){
     window.scrollTo({
         top:0,
         left:0,
         behavior:"smooth"
     })
 })
/*navbar li*/
window.addEventListener("scroll",function(){
    
    navli.forEach(ele=>{
        if(window.scrollY>=document.querySelector(ele.dataset.navbar).offsetTop-1){
                     navli.forEach(ele=>{
                         ele.classList.remove("actives")
                     })
                    ele.classList.add("actives");    
        }
      
    });
    navli.forEach(ele=>{
        ele.addEventListener("mouseover",function(){
            ele.classList.add("activity")
            setTimeout(() => {
                ele.classList.add("fullwidth")
            }, 10);
        })
       
        ele.addEventListener("mouseleave",function(){
            if(!ele.classList.contains("actives")){
                ele.classList.remove("fullwidth");
                setTimeout(() => {
                        ele.classList.remove("activity")
                }, 10);
            }
           
        })
        if(ele.classList.contains("actives")){
            ele.classList.add("activity")
            setTimeout(() => {
                ele.classList.add("fullwidth")
            }, 10);
        }else{
            
            setTimeout(() => {
                   ele.classList.remove("fullwidth");
                    ele.classList.remove("activity")
            }, 10);
        }
       })
})


/*navbar button*/    
toggle.addEventListener("click",()=>{
    if( toggle.classList.contains("x")){
        togglediv.forEach(element => {
            element.style.marginTop="0px"
        });
        toggle.classList.toggle("animate");
        setTimeout(() => {
            toggle.classList.toggle("plus"); 
        }, 300);
        setTimeout(() => {
            togglediv.forEach(element => {
                element.style.marginTop="3px"
            });
        },600);
        toggle.classList.toggle("x");
        navul.style.height="0";
    }else{
        togglediv.forEach(element => {
            element.style.marginTop="0"
        });
        setTimeout(() => {
            toggle.classList.toggle("plus"); 
        }, 300);
       
        setTimeout(() => {
            togglediv.forEach(element => {
                element.style.marginTop="3px"
            });
            toggle.classList.toggle("animate");
        },600);

        toggle.classList.toggle("x");
        navul.style.height="200px"
    }
    
    
});


function removeliactive()
{
    navli.forEach(function(li){
        li.classList.remove('activity')
    });
}
navli.forEach(ele=>{
    ele.addEventListener("click",function(){
         ele.classList.add("actives")
        navli.forEach(ele=>{
            if(ele.classList.contains("actives")){
                ele.classList.add("activity")
                setTimeout(() => {
                    ele.classList.add("fullwidth")
                }, 10);
            }else{
                
                setTimeout(() => {
                       ele.classList.remove("fullwidth");
                        ele.classList.remove("activity")
                }, 10);
            }
           })
       document.querySelector(ele.dataset.a).click();

    })
});



//slider


var divpoints=document.querySelectorAll(".slider .points>div"),
    divslider=document.querySelectorAll(".slider-info"),
    ppoints=document.querySelector(".slider .information p"),
    buttonpoints=document.querySelectorAll(".slider .information button");
    

    function removeactive(div,newactive){
        div.forEach(ele=>{
            ele.classList.remove("active")
        })
        newactive.classList.add("active")
    
    
    }

 var widt=0;
 var numdiv=1;


var myvar= setInterval(() => {
    widt+=5
    document.querySelector(".top").style.width =widt+"%";
   
    if(widt>=100){
        numdiv++;
        document.querySelector(".point"+numdiv).click();
        widt=0;
        if(numdiv==2){
            numdiv=0;
        } 
        
    }

    
    
   }, 700);

    
function removeappear()
    {
        divslider.forEach(function(div){
            div.classList.remove("translate");
            div.classList.remove("fadeup");
    setTimeout(() => {
                  div.classList.remove("opacity");
        setTimeout(() => {
                  div.classList.remove("appear");
        },1000);
    }, 800);
            
           
        });
};
    divpoints.forEach(ele=>{
        ele.addEventListener("click",function(){

            if(ele.classList.contains("point1")){
                numdiv=1;
            }else{
                numdiv=0;
            }
            var activediv =document.querySelector(this.getAttribute("data-class"));
            if(!(activediv.classList.contains("active"))){
                
                removeappear();
                setTimeout(() => {
                     
                     activediv.classList.add("fadeup")
                     setTimeout(() => {
                        activediv.classList.add("translate");
                     }, 300);
                     setTimeout(() => {
                        activediv.classList.add("opacity");
                        activediv.classList.add("appear");
                     }, 800);
                     
                }, 1800);
        
                     removeactive(divslider,activediv)
            }
                     removeactive(divpoints,ele)
           
        })
    })

window.onload=function(){
    document.querySelector(".div1").classList.add("fadeup")
    setTimeout(() => {
        document.querySelector(".div1").classList.add("translate");
    }, 300);
    setTimeout(() => {
        document.querySelector(".div1").classList.add("opacity");
        document.querySelector(".div1").classList.add("appear");
    }, 800);
    document.querySelector(".div1").classList.add("active")
}

buttonpoints.forEach(ele=>{
    ele.addEventListener("click",function(){
        window.scrollTo({
            top:document.querySelector(".features").offsetTop,
            left:0,
            behavior:"smooth"   
        })
      
    
    })
})


/*start feature*/





  $('.owls').owlCarousel({
    
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    items:1
  });

 
 
 /*purchase*/
  $('.owl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    items:1
  });

