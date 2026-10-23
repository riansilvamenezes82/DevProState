

document.querySelector(".btn-enviar").addEventListener("click", function (){
    const nome = document.getElementById("nome").value  
    const plano = document.getElementById("plano").value   
    if( nome === '' || plano === ''){
        alert("Por favor, preencha seu nome e escolha um plano.")

        return
    }

    const numeroWhatsApp = "5573981459793"

    const mensagem = `
    Olá! Meu nome é ${nome}./nGostaria e saber mais sobre o plano ${plano}
    `

    const mensagemFormatada = encodeURIComponent(mensagem)

    const linkFinal = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

    window.open(linkFinal, '_blank')
    
});


