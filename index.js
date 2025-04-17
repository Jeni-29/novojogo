function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    var mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }

    // Validação do formato de e-mail usando a API de validação HTML5
    if (!emailInput.checkValidity()) {
        alert("Por favor, digite um e-mail em um formato válido.");
        emailInput.focus();
        return false; // Impede o envio do formulário
    }

    // Validação adicional do formato de e-mail usando uma RegEx (opcional, mas pode ser mais específica)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, digite um e-mail válido (ex: usuario@dominio.com).");
        emailInput.focus();
        return false; // Impede o envio do formulário
    }

    alert("Mensagem enviada com sucesso!");
    return true; // Permite o envio do formulário
}
