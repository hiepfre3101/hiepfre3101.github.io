function responsive(){
      const width = screen.width
      const openIcon = document.querySelector('#list')
      const closeIcon = document.querySelector('#xDot')
      const responsiveWrapper = document.querySelector('.responsive-block')
      if(width<1023){
             openIcon.style.display ='block'
             closeIcon.style.display='none'
             responsiveWrapper.style.display='none'
        openIcon.onclick=function (){
          responsiveWrapper.style.display='block'
           closeIcon.style.display='block'
           openIcon.style.display='none'
        } 
        closeIcon.onclick=function(){
          responsiveWrapper.style.display='none'
          closeIcon.style.display='none'
          openIcon.style.display='block'
        }
      }else{
        responsiveWrapper.style.display='flex'
        closeIcon.style.display='none'
        openIcon.style.display='none'
      }
}
responsive();
 
 


