function search(){
    if (document.querySelector('input').style.display == 'none'){
        
        document.querySelector('input').style.display = 'flex';
       //  document.querySelector('input').style.border = '0.5px solid #FFF'
     }
    
     else{
        document.querySelector('input').style.display = 'none';
        document.querySelector('input').style.border = 'none';
     }
    
    }

    function clicardireita1(){
      document.querySelector('.block__series').style.display = 'none'
      document.querySelector('.block__series--slide').style.display = 'flex'
   }
   
   function clicaresquerda1(){
      document.querySelector('.block__series--slide').style.display = 'none'
      document.querySelector('.block__series').style.display = 'flex'
   }
   
   function clicardireita2(){
      document.querySelector('.block__movies').style.display = 'none'
      document.querySelector('.block__movies--slide').style.display = 'flex'
   }
   
   function clicaresquerda2(){
      document.querySelector('.block__movies--slide').style.display = 'none'
      document.querySelector('.block__movies').style.display = 'flex'
   }
   
   function clicardireita3(){
      document.querySelector('.block__recently').style.display = 'none'
      document.querySelector('.block__recently--slide').style.display = 'flex'
   }
   
   function clicaresquerda3(){
      document.querySelector('.block__recently--slide').style.display = 'none'
      document.querySelector('.block__recently').style.display = 'flex'
   }
   
  //  function clicardireita4(){
  //     document.querySelector('.block__mylist').style.display = 'none'
  //     document.querySelector('.block__mylist--slide').style.display = 'flex'
  //  }
   
  //  function clicaresquerda4(){
  //     document.querySelector('.block__mylist--slide').style.display = 'none'
  //     document.querySelector('.block__mylist').style.display = 'flex'
  //  }