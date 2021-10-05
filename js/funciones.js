/**
 * Rutinas para acceder información Clientes
 */
function consultarCliente(){
    $("#resultadoCliente").empty();
    $("#idCliente").val("");
    $("#name").val("");
    $("#email").val("");
    $("#age").val("");
    $.ajax({
        url:'https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            console.log(respuesta);
            let tablaCliente="<table border='1'>";
            tablaCliente+="<tr>";
            tablaCliente+="<th> Código </th>";
            tablaCliente+="<th> Nombre </th>";
            tablaCliente+="<th> Correo Electrónico </th>";
            tablaCliente+="<th> Edad </th>";
            tablaCliente+="<th colspan='2'> Acciones </th> </tr>";

            for(i=0;i<respuesta.items.length;i++){
                tablaCliente+="<tr>";
                tablaCliente+="<td align='center' style='width: 45px'>" + respuesta.items[i].id + "</td>";
                tablaCliente+="<td style='width: 210px'>" + respuesta.items[i].name + "</td>";
                tablaCliente+="<td style='width: 210px'>" + respuesta.items[i].email + "</td>";
                tablaCliente+="<td align='center' style='width: 40px'>" + respuesta.items[i].age + "</td>";
                tablaCliente+="<td> <button onclick='borrarCliente("+respuesta.items[i].id+")'>Borrar</button>";
                tablaCliente+="<td> <button onclick='cargarCliente("+respuesta.items[i].id+")'>Seleccionar</button>";
                tablaCliente+="</tr>";
            }
            tablaCliente+="</table>";
            $("#resultadoCliente").append(tablaCliente);
        }
    });
}

function cargarCliente(idCliente){
    $.ajax({
        url:'https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/'+idCliente,
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            $("#idCliente").val(respuesta.items[0].id);
            $("#name").val(respuesta.items[0].name);
            $("#email").val(respuesta.items[0].email);
            $("#age").val(respuesta.items[0].age);
        }
    });   
}

function borrarCliente(idCliente){

    let dataJSON = {
        id:idCliente
    };

    let dataToSend = JSON.stringify(dataJSON);

    $.ajax({
        url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            consultarCliente();
            alert("Elimación Satisfactoria")
        }
    });
}

function adicionarCliente(){
    if ($("#name").val() != "" && $("#email").val() != "" && $("#age").val() != "") {
        let dataJSON = {
//            id:$("#id").val(),
            name:$("#name").val(),
            email:$("#email").val(),
            age:$("#age").val()
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
            type:"POST",
            data:dataJSON,
            datatype:"JSON",
            success:function(respuesta){
                consultarCliente();
                alert("Adición Satisfactoria");
            }
        });
    } else alert("Digite información válida para Adicionar");

}

function actualizarCliente(){
    if ($("#name").val() != "" && $("#email").val() != "" && $("#age").val() != "") {

        let dataJSON = {
            id:$("#idCliente").val(),
            name:$("#name").val(),
            email:$("#email").val(),
            age:$("#age").val(),
        }
        console.log(dataJSON);
        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                consultarCliente();
                window.alert("Modificación Satisfactoria");
            }
        });
    } else alert("Primero seleccione un Cliente\ncon el botón SELECCIONAR");
}

/**
 * Rutinas para acceder información Cabañas
 */
 function consultarCabaña(){
    $("#resultadoCabaña").empty();
    $("#idCabaña").val("");
    $("#brand").val("");
    $("#rooms").val("");
    $("#category_id").val("");
    $("#name1").val("");
    $.ajax({
        url:'https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin',
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            console.log(respuesta);
            let tablaCabaña="<table border='1'>";
            tablaCabaña+="<tr>";
            tablaCabaña+="<th> Código </th>";
            tablaCabaña+="<th> Tipo </th>";
            tablaCabaña+="<th> Habitaciones </th>";
            tablaCabaña+="<th> Categoría   </th>";
            tablaCabaña+="<th> Nombre </th>";
            tablaCabaña+="<th colspan='2'> Acciones </th> </tr>";

            for(i=0;i<respuesta.items.length;i++){
                tablaCabaña+="<tr>";
                tablaCabaña+="<td align='center' style='width: 45px'>" + respuesta.items[i].id + "</td>";
                tablaCabaña+="<td style='width: 210px'>" + respuesta.items[i].brand + "</td>";
                tablaCabaña+="<td align='center' style='width: 80px'>" + respuesta.items[i].rooms + "</td>";
                tablaCabaña+="<td align='center' style='width: 80px'>" + respuesta.items[i].category_id + "</td>";
                tablaCabaña+="<td style='width: 200px'>" + respuesta.items[i].name + "</td>";
                tablaCabaña+="<td> <button onclick='borrarCabaña("+respuesta.items[i].id+")'>Borrar</button>";
                tablaCabaña+="<td> <button onclick='cargarCabaña("+respuesta.items[i].id+")'>Seleccionar</button>";
                tablaCabaña+="</tr>";
            }
            tablaCabaña+="</table>";
            $("#resultadoCabaña").append(tablaCabaña);
        }
    });
}

function cargarCabaña(idCabaña){
    $.ajax({
        url:'https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin/'+idCabaña,
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            $("#idCabaña").val(respuesta.items[0].id);
            $("#brand").val(respuesta.items[0].brand);
            $("#rooms").val(respuesta.items[0].rooms);
            $("#category_id").val(respuesta.items[0].category_id);
            $("#name1").val(respuesta.items[0].name);
        }
    });   
}

function borrarCabaña(idCabaña){

    let dataJSON = {
        id:idCabaña
    };

    let dataToSend = JSON.stringify(dataJSON);

    $.ajax({
        url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            consultarCabaña();
            alert("Elimación Satisfactoria")
        }
    });
}

function adicionarCabaña(){
    if ($("#brand").val() != "" && $("#rooms").val() != "" && $("#category_id").val() != "" && $("#name1").val() != "") {
        let dataJSON = {
//            id:$("#id").val(),
            brand:$("#brand").val(),
            rooms:$("#rooms").val(),
            category_id:$("#category_id").val(),
            name:$("#name1").val()
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type:"POST",
            data:dataJSON,
            datatype:"JSON",
            success:function(respuesta){
                consultarCabaña();
                alert("Adición Satisfactoria");
            }
        });
    } else alert("Digite información válida para Adicionar");

}

function actualizarCabaña(){
    if ($("#brand").val() != "" && $("#rooms").val() != "" && $("#category_id").val() != "" && $("#name1").val() != "") {

        let dataJSON = {
            id:$("#idCabaña").val(),
            brand:$("#brand").val(),
            rooms:$("#rooms").val(),
            category_id:$("#category_id").val(),
            name:$("#name1").val()
        }
        console.log(dataJSON);
        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/cabin/cabin",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                consultarCabaña();
                window.alert("Modificación Satisfactoria");
            }
        });
    } else alert("Primero seleccione una Cabaña\ncon el botón SELECCIONAR");
}

/**
 * Rutinas para acceder información Mensajes
 */

 function consultarMensaje(){
    $("#resultadoMensaje").empty();
    $("#idMensaje").val("");
    $("#messagetext").val("");
    $.ajax({
        url:'https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            console.log(respuesta);
            let tablaMensaje="<table border='1'>";
            tablaMensaje+="<tr>";
            tablaMensaje+="<th> Código </th>";
            tablaMensaje+="<th> Mensaje </th>";

            for(i=0;i<respuesta.items.length;i++){
                tablaMensaje+="<tr>";
                tablaMensaje+="<td align='center' style='width: 45px'>" + respuesta.items[i].id + "</td>";
                tablaMensaje+="<td style='width: 600px;'>" + respuesta.items[i].messagetext + "</td>";
                tablaMensaje+="<td> <button onclick='borrarMensaje("+respuesta.items[i].id+")'>Borrar</button>";
                tablaMensaje+="<td> <button onclick='cargarMensaje("+respuesta.items[i].id+")'>Seleccionar</button>";
                tablaMensaje+="</tr>";
            }
            tablaMensaje+="</table>";
            $("#resultadoMensaje").append(tablaMensaje);
        }
    });
}

function cargarMensaje(idMensaje){
    $.ajax({
        url:'https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/'+idMensaje,
        type:'GET',
        datatype:'JSON',
        success:function(respuesta){
            $("#idMensaje").val(respuesta.items[0].id);
            $("#messagetext").val(respuesta.items[0].messagetext);
        }
    });   
}

function borrarMensaje(idMensaje){

    let dataJSON = {
        id:idMensaje
    };

    let dataToSend = JSON.stringify(dataJSON);

    $.ajax({
        url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            consultarMensaje();
            alert("Elimación Satisfactoria")
        }
    });
}

function adicionarMensaje(){
    if ($("#messagetext").val() != "") {
        let dataJSON = {
//            id:$("#id").val(),
            messagetext:$("#messagetext").val(),
        };

        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
            type:"POST",
            data:dataJSON,
            datatype:"JSON",
            success:function(respuesta){
                consultarMensaje();
                alert("Adición Satisfactoria");
            }
        });
    } else alert("Digite información válida para Adicionar");

}

function actualizarMensaje(){
    if ($("#messagetext").val() != "") {

        let dataJSON = {
            id:$("#idMensaje").val(),
            messagetext:$("#messagetext").val(),
        }
        console.log(dataJSON);
        let dataToSend = JSON.stringify(dataJSON);

        $.ajax({
            url:"https://g515186e705e238-cabindb.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                consultarMensaje();
                window.alert("Modificación Satisfactoria");
            }
        });
    } else alert("Primero seleccione un Mensaje\ncon el botón SELECCIONAR");
}
