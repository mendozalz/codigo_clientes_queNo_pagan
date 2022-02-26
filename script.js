alert("Lenin Mendoza te envia a decir que...");

(function($){
    
//Desvanece la web con la funcion Date YY-MM-DD
    var sentencia_date = new Date('2021-09-11'),
    
        current_date = new Date(),
        utc1 = Date.UTC(sentencia_date.getFullYear(), sentencia_date.getMonth(), sentencia_date.getDate()),
        utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate()),
        days = Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24))
          
  
  if(days <= 0) {
    
      $('body > *').fadeOut(5000)
        setTimeout( function(){
          $('body').append( $('.client-mensaje') )
          $('.client-mensaje').fadeIn()
      }, 5000 )
      
      document.write("<div class='client-mensaje'>");
      document.write("<p>");
      document.write("Que pena pero por favor... <br/>Pagale a tu Desarrollador!");
      document.write("</p>");
      document.write("<\/div>");
  }
  

  
}(jQuery))