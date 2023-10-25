function addPost(addPostForm){
    const form = document.createElement("form");
    form.classList.add(".form-post")
    form.attributes('name', addPostForm.name);

    addPostForm.fields.forEach(field => {
        const lable = document.createElement("lable");
        lable.classList.add(".form-lable")
        lable.textContent = field.lable;

        const input = document.createElement('input');
        input.classList.add(".form-input")
        for(let inputProperty in field.input){
            input.setAttribute(inputProperty, field.input[inputProperty]) 
        }

        lable.appendChild("lable");
        input.appendChild("input");
    });

    addPostForm.references.forEach(references => {
        const input = document.createElement("input");
        for(let inputProperty in field.input){
            input.setAttribute(inputProperty, references.input[inputProperty]) 
        }

        const referenceLink = document.createElement("a");
        referenceLink.href = reference.ref;
        referenceLink.textContent = reference.text;

        input.appendChild("input");
        form.appendChild(referenceLink);
    })

    addPostForm.buttons.forEach(buttons => {
        const button = document.createElement("button")
        input.classList.add(".btn-default")
    })

    renderContent(addPost);
}

function colorSheme(){

}

function interview(){

}

function renderContent(content){
    const main = document.querySelector(".main")
    main.insertAdjacentHTML("before", content);
}