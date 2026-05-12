document
.getElementById("userForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let username =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    alert(
        "Name: " + username +
        "\nEmail: " + email
    );

});