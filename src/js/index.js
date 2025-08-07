const formulario = document.getElementById('formulario');
const campos = document.querySelectorAll('#formulario input , #formulario textarea');
const mensagensErro = document.querySelectorAll('#formulario .campo .mensagem-erro');


 formulario.addEventListener('submit', function(event) {
    event.preventDefault(); /* evita a validação antes de analisar */
    validarFormulario();
 });

 function validarFormulario() {
    campos.forEach((input, index) => {
        if(input.value.trim() === '') {
            input.classList.add('erro');
            mensagensErro[index].classList.add('ativo');

        } else {
            input.classList.add('certo');
            input.classList.remove('erro');
            mensagensErro[index].classList.remove('ativo');
        }
    }    
)};