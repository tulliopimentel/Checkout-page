// Utilizei o "Windon.onload" pois a página estava pegando o valor do input antes, o que estava dando null

window.onload = function () {

    // máscara do cep
    const cep = document.getElementById("cep");

    cep.addEventListener("keyup", (e) => {
        const cep_element = e.target;
        if (cep_element.value.length === 5)
            cep_element.value = cep_element.value + "-";
    });

    // máscara do número de cartão
    const card_number = document.getElementById("card_number");

    card_number.addEventListener("keyup", (e) => {
        const card_element = e.target;
        if (card_element.value.length === 4 || card_element.value.length === 9 || card_element.value.length === 14)
            card_element.value = card_element.value + " ";
    });
    // máscara do vencimento do cartão
    const due_date = document.getElementById("due_date")

    due_date.addEventListener("keyup", (e) => {
        const due_element = e.target;
        if (due_element.value.length === 2)
            due_element.value = due_element.value + "/"
    })
    // máscara do CPF
    const cpf = document.getElementById("cpf")

    cpf.addEventListener("keyup", (e) => {
        const cpf_element = e.target;
        if (cpf_element.value.length === 3 || cpf_element.value.length === 7)
            cpf_element.value = cpf_element.value + "."
        else if (cpf_element.value.length === 11)
            cpf_element.value = cpf_element.value + "-"
    })
}