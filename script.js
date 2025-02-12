const botonmodo = document.getElementById("modo");
botonmodo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botonmodo.textContent = "modo claro";
    } else {
        botonmodo.textContent = "modo oscuro";
    }
})