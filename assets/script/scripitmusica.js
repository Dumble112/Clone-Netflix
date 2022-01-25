$('.trocar1').click(function(){
    var link = $(this).attr('id');
    switch(link){ 
       case 'trocar1':
     $('#fonteVideo').attr('src', 'https://www.w3schools.com/tags/movie.mp4');
     $("#divVideo video")[0].load();
         break;
       case 'link2':
          $('#fonteVideo').attr('src', 'https://www.w3schools.com/html/mov_bbb.mp4');
      $("#divVideo video")[0].load();
          break;
     }
                     
 });