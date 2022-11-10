$(document).ready(function(){    
    $('#boton-guardar').click(function(){                 
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
        sessionStorage.setItem("Nombre", nom);
        sessionStorage.setItem("Apellido", apel); 
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
    });   
});

$(document).ready(function(){    
    $('#boton-cargar').click(function(){                             
        var nombre = sessionStorage.getItem("Nombre");
        var apellido = sessionStorage.getItem("Apellido");     
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido; 
    });   
});