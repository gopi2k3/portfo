let headBtn=document.querySelector('.head-icon')
let nav=document.querySelector('.nav2')

headBtn.addEventListener('click',()=>{
   nav.classList.toggle('active')
})

let headLi=document.querySelectorAll('.head-li')       //resposive nav bar ==============

headLi.forEach((e)=>{
    e.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
})






                         //Dark mood =============


                             
let mood=document.querySelector('.dark-mood')
let sun =document.querySelector('.sun')
let moodIcons=document.querySelectorAll('.change-mood')

mood.addEventListener('click',()=>{
    // sun.classList.toggle('dark')

    moodIcons.forEach((e)=>{
        e.classList.toggle('dark')
    })

    
})



                                       //Arrow up

let up=document.querySelector('.arrow')
 window.addEventListener('scroll',(e)=>{
                                        // console.log(window.pageYOffset)
 if(pageYOffset==0){
        up.style.display='none'
 }
 else if(pageYOffset>140){
         up.style.display='flex'
                                             
}
else{
        up.style.display='none'
    }
                                        
    })