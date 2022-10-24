
function login()
{
    let user=document.getElementById("Entrenador").value;
    let pass=document.getElementById("Password").value;

    if(user=="Marum" && pass=="1234")
    {
        window.location="index.html";
        
    }
    else{
        Swal.fire({
            title: "Datos Incorrectos",
            icon:"error",
            showConfirmButton: "false"

        })
    }
}