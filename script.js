let habilidadesRegistradas = []; 

// Referências DOM
const btnAdicionarHabilidade = document.getElementById('btnAdicionarHabilidade');
const listaDOM = document.getElementById('listaHabilidadesAdicionadas');
const habilidadeSelect = document.getElementById('habilidadeSelect');

btnAdicionarHabilidade.addEventListener('click', adicionarHabilidade);


function adicionarHabilidade() {
    const novaHabilidade = habilidadeSelect.value;
    const nomeHabilidade = habilidadeSelect.options[habilidadeSelect.selectedIndex].text;

    if (novaHabilidade && novaHabilidade !== "" && !habilidadesRegistradas.includes(novaHabilidade)) {
        habilidadesRegistradas.push(novaHabilidade);
        
        const li = document.createElement('li');
        li.textContent = nomeHabilidade;
        listaDOM.appendChild(li);
        
        document.getElementById('areaFeedback').innerHTML = `<p style="color: green;">Habilidade "${nomeHabilidade}" adicionada. Total: ${habilidadesRegistradas.length}.</p>`;
    } else if (novaHabilidade && novaHabilidade !== "") {
        document.getElementById('areaFeedback').innerHTML = `<p style="color: orange;">Habilidade "${nomeHabilidade}" já foi adicionada.</p>`;
    } else {
        document.getElementById('areaFeedback').innerHTML = `<p style="color: orange;">Selecione uma habilidade para adicionar.</p>`;
    }
}

function exibirFeedback(vetorErros) {
    const feedbackElement = document.getElementById('areaFeedback'); 
    feedbackElement.innerHTML = ''; 

    if (vetorErros.length > 0) {
        feedbackElement.innerHTML += '<h4 style="color: red;">⚠️ Erros de Validação Encontrados:</h4>';
        const ulErros = document.createElement('ul');
        vetorErros.forEach(erro => {
            const li = document.createElement('li');
            li.textContent = erro;
            ulErros.appendChild(li);
        });
        feedbackElement.appendChild(ulErros);
    } else {
        feedbackElement.innerHTML = '<h4 style="color: green;">✅ Sucesso! Dados validados e preferências registradas.</h4>';
        
        const nome = document.getElementById('nomeCompleto').value;
        const emailLimpo = document.getElementById('email').value;
        const cpfLimpo = document.getElementById('cpf').value;
        const interesse = document.getElementById('tipoInteresse').options[document.getElementById('tipoInteresse').selectedIndex].text;
        
        feedbackElement.innerHTML += `<p><strong>Nome:</strong> ${nome}</p>`;
        feedbackElement.innerHTML += `<p><strong>E-mail:</strong> ${emailLimpo}</p>`;
        feedbackElement.innerHTML += `<p><strong>CPF (Limpo):</strong> ${cpfLimpo}</p>`;
        feedbackElement.innerHTML += `<p><strong>Área de Interesse:</strong> ${interesse}</p>`;
        feedbackElement.innerHTML += `<p><strong>Habilidades Registradas:</strong> ${habilidadesRegistradas.join(', ')}</p>`;
        feedbackElement.innerHTML += `<p>Suas preferências serão usadas para configurar o dispositivo WorkSense.</p>`;
    }
}

/**
 * Função dedicada para validar e normalizar o campo e-mail.
 * @returns {string | null} Mensagem de erro se inválido, ou null se OK.
 */
function checarEmail(valor) {
    const emailNormalizado = valor.toLowerCase(); 
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!regexEmail.test(emailNormalizado)) {
        return "O e-mail deve seguir um formato válido (ex: nome@dominio.com).";
    }
    document.getElementById('email').value = emailNormalizado; 
    return null; 
}

/**
 * Função dedicada para validar e normalizar o campo CPF.
 * Garante que apenas 11 dígitos numéricos sejam processados.
 * @returns {string | null}
 */
function checarCPF(valor) {
    let cpfLimpo = valor.replace(/\D/g, ''); 
    
    if (cpfLimpo.length === 0) {
        return "O campo CPF é deve conter apenas números.";
    }
    
    if (cpfLimpo.length !== 11) {
        return `O CPF deve ter exatamente 11 dígitos. Você digitou ${cpfLimpo.length}.`;
    }

    if (/^(\d)\1{10}$/.test(cpfLimpo)) {
        return "CPF inválido (dígitos repetidos).";
    }

    document.getElementById('cpf').value = cpfLimpo; 
    
    return null; 
}

function validarFormulario() {
    let vetorErros = [];
    
    const nome = document.getElementById('nomeCompleto').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const interesse = document.getElementById('tipoInteresse').value;

    const regexNome = /^[a-zA-Z\sÀ-ú]+$/; 

    if (nome.trim().length < 5) { 
        vetorErros.push("O Nome Completo é obrigatório e deve ter no mínimo 5 caracteres.");
    } else if (!regexNome.test(nome)) { 
        vetorErros.push("O Nome Completo deve conter apenas letras e espaços.");
    }
    
    if (interesse === "") {
        vetorErros.push("O Tipo de Interesse (Área de Trabalho) é obrigatório.");
    }

    if (habilidadesRegistradas.length < 3) {
        vetorErros.push(`Você deve adicionar pelo menos 3 habilidades. (Adicionadas: ${habilidadesRegistradas.length})`);
    }
    
    const erroEmail = checarEmail(email);
    if (erroEmail) {
        vetorErros.push(erroEmail);
    }
    
    const erroCPF = checarCPF(cpf);
    if (erroCPF) {
        vetorErros.push(erroCPF);
    }
    
    exibirFeedback(vetorErros);
}