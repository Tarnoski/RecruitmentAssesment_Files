
function updateCall(){
    let call = `
        <p class="mb-3">Hello <b>${sessionStorage.getItem("firstName")} ${sessionStorage.getItem("lastName")}</b>,</p>

        <p class="mb-3">We are contacting you to communicate that your package is already in travel towards its destination att <b>${sessionStorage.getItem("address")}</b>. An email will be sent to <b>${sessionStorage.getItem("email")}</b> containing a link with which you can track the package in its route.
        Finally, when it is close to its destination, a message will be sent to the phone number <b>${sessionStorage.getItem("phone")}</b> with a keyword that must be said to the delivery man in order to give you the package. Be sure to be at the house at the moment or, if unable to do so, have another to receive it with the keyword.</p>

        <p class="mb-0">We hope you like your product.</p>
        <p class="mb-3">Thanks for choosing us.</p>
    `;

    document.querySelector("#call").innerHTML = call;
}

function redirect (e){
    //Open the index page in a new tab
    e.preventDefault();
    window.open('index.html', '_blank').focus();
}

function addListeners (){

    //Each cell of the Description column will open the index page in a new tab at the event click 
    document.querySelectorAll('.desc').forEach(element => {
        element.addEventListener("click",(e) => redirect(e),false)
    });


    /*    
        Each field of the customer's information will be saved with sessionStorage and
        will be used to overwrite the call text below the form inputs with updateCall();
    */

    document.querySelector("#firstName").addEventListener("input", function() {
        sessionStorage.setItem("firstName", document.querySelector("#firstName").value);
        updateCall();
    });

    document.querySelector("#lastName").addEventListener("input", function() {
        sessionStorage.setItem("lastName", document.querySelector("#lastName").value);
        updateCall();
    });

    document.querySelector("#address").addEventListener("input", function() {
        sessionStorage.setItem("address", document.querySelector("#address").value);
        updateCall();
    });

    document.querySelector("#email").addEventListener("input", function() {
        sessionStorage.setItem("email", document.querySelector("#email").value);
        updateCall();
    });

    document.querySelector("#phone").addEventListener("input", function() {
        sessionStorage.setItem("phone", document.querySelector("#phone").value);
        updateCall();
    });

    document.querySelector("#firstName").value = sessionStorage.getItem("firstName");
    document.querySelector("#lastName").value = sessionStorage.getItem("lastName");
    document.querySelector("#address").value = sessionStorage.getItem("address");
    document.querySelector("#email").value = sessionStorage.getItem("email");
    document.querySelector("#phone").value = sessionStorage.getItem("phone");

    updateCall();
    
}

export default addListeners;