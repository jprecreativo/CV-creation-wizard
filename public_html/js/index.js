/* 
 * The MIT License
 *
 * Copyright 2019 jprecreativo.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

window.onload = function() {
  
    actualizarLimitIdioma("");
    añadirIdioma();
};

function actualizarLimitIdioma(i)
{
    var limitIdioma = document.getElementById("limitIdioma" + i);
    var textoComentarios = document.getElementById("textoComentarios" + i);

    /* Cuando levantan una tecla, actualizo el número de caracteres. */
    textoComentarios.onkeyup = function() {

        limitIdioma.innerHTML = textoComentarios.value.length + "/100";
    };
    
    /* Cuando presionan una tecla, actualizo el número de caracteres. */
    textoComentarios.onkeypress = function() {

        limitIdioma.innerHTML = textoComentarios.value.length + "/100";
    };
    
    /* Si me pegan un texto desde el menú contextual, actualizo el número de caracteres. */
    textoComentarios.onchange = function() {

        limitIdioma.innerHTML = textoComentarios.value.length + "/100";
    };
}

function añadirIdioma()
{
    var idiomas = document.getElementById("idiomas");
    var añadirIdioma = document.getElementById("añadirIdioma");
    var i = 1;
    
    /* Añado el idioma a la sección 'idiomas'. */
    añadirIdioma.onclick = function() {
      
        /* Creamos el selector de idioma. */
      
        var clonSelectorIdioma = document.getElementById("selectorIdioma").cloneNode(true);
        
        clonSelectorIdioma.id = "selectorIdioma" + i;
        
        /* Creamos la etiqueta del idioma. */
        
        var labelIdioma = document.createElement("label");
        
        labelIdioma.setAttribute("for", "selectorIdioma" + i);
        labelIdioma.innerHTML = "Idioma:&nbsp";
        labelIdioma.style.marginLeft = "2%";
        
        /* Creamos el selector de nivel. */
        
        var clonSelectorNivel = document.getElementById("selectorNivel").cloneNode(true);
        
        clonSelectorNivel.id = "selectorNivel" + i;
        
        /* Creamos la etiqueta del nivel. */
        
        var labelNivel = document.createElement("label");
        
        labelNivel.setAttribute("for", "selectorNivel" + i);
        labelNivel.innerHTML = "Nivel:&nbsp";
        labelNivel.className = "space";
        
        /* Creamos el área de texto de comentarios. */
        
        var clonTextoComentarios = document.getElementById("textoComentarios").cloneNode(false);
        
        clonTextoComentarios.id = "textoComentarios" + i;
        
        /* Creamos la etiqueta del área de texto de comentarios. */
        
        var labelComentarios = document.createElement("label");
        
        labelComentarios.setAttribute("for", "textoComentarios" + i);
        labelComentarios.innerHTML = "Comentarios:&nbsp";
        labelComentarios.className = "space";
        
        /* Añadimos todos los datos del nuevo idioma a la sección 'idiomas' en un "div" nuevo. */
        
        var nuevoIdioma = document.createElement("div");
        
        nuevoIdioma.id = "idioma" + i;
        nuevoIdioma.style.marginTop = "2%";
        nuevoIdioma.appendChild(labelIdioma);
        nuevoIdioma.appendChild(clonSelectorIdioma);
        nuevoIdioma.appendChild(labelNivel);
        nuevoIdioma.appendChild(clonSelectorNivel);
        nuevoIdioma.appendChild(labelComentarios);
        nuevoIdioma.appendChild(clonTextoComentarios);
        idiomas.appendChild(nuevoIdioma);
        
        /* Cambiamos con JQuery el valor de los selectores que hemos clonado para que coincida con lo que ha puesto el usuario. */
        
        $('#selectorIdioma' + i).val($('#selectorIdioma').val());
        $('#selectorNivel' + i).val($('#selectorNivel').val());
        
        /* Añado un nuevo límite de caracteres. */
        
        var labelLimit = document.createElement("label");
        
        labelLimit.id = "limitIdioma" + i;
        labelLimit.innerHTML = document.getElementById("limitIdioma").textContent;
        labelLimit.className = "limitIdioma";
        labelLimit.style.marginLeft = "78%";
        
        /* Añado el botón de eliminar idioma */
        
        var eliminarIdioma = document.createElement("button");
        var spanEliminarIdioma = document.createElement("span");
        var textoEliminarIdioma = document.createTextNode("\xa0\xa0\xa0Eliminar");
        
        eliminarIdioma.id = "eliminarIdioma" + i;
        eliminarIdioma.className = "btn btn-danger";
        eliminarIdioma.style.marginLeft = "2.5%";
        spanEliminarIdioma.className = "glyphicon glyphicon-minus";
        eliminarIdioma.appendChild(spanEliminarIdioma);
        eliminarIdioma.appendChild(textoEliminarIdioma);
        
        eliminarIdioma.onclick = function() {
            
            var n = eliminarIdioma.id.replace('eliminarIdioma', '');
            
            $('#idioma' + n).remove();
            $('#limitIdioma' + n).remove();
        };
        
        document.getElementById("idioma" + i).insertBefore(eliminarIdioma, null);
        document.getElementById("idiomas").insertBefore(labelLimit, null);
        
        actualizarLimitIdioma(i++);
    };
}
