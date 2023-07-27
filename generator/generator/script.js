function gerarSenha() {
    const caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let resultado = '';

    for (let i = 0; i < 15; i++) { // Gerando uma senha com 15 caracteres
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(indiceAleatorio);
    }

    const senhaInput = document.getElementById('senha');
    senhaInput.value = resultado;
}
