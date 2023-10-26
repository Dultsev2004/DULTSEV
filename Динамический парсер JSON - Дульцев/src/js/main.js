//Добавление постов
function addPost(){
    const form = document.createElement("form");
    form.classList.add(".form-post")
    form.attributes('name', addPostForm.name);

    addPostForm.fields.forEach(fields => {
        const label = document.createElement("label");
        label.classList.add(".form-label")
        label.textContent = fields.lable;

        const input = document.createElement('input');
        input.classList.add(".form-input")
        for(let inputProperty in fields.input){
            input.setAttribute(inputProperty, fields.input[inputProperty]) 
        }

        label.appendChild("label");
        input.appendChild("input");
    });

    addPostForm.references.forEach(references => {
        const input = document.createElement("input");
        for(let inputProperty in fields.input){
            input.setAttribute(inputProperty, references.input[inputProperty])
        }

        const referenceLink = document.createElement("a");
        referenceLink.href = reference.ref;
        referenceLink.textContent = reference.text;
        if (reference.input.required) {
            input.required = true;
        }
        if (reference.input.checked === "true") {
            input.checked = true;
        }

        if (reference.text) {
            const referenceLink = document.createElement("a");
            referenceLink.href = reference.ref;
            referenceLink.textContent = reference.text;
            form.appendChild(input);
            form.appendChild(referenceLink);
        } else {
            form.appendChild(input);
        }
    })

    addPostForm.buttons.forEach(buttons => {
        const button = document.createElement("button");
        button.setAttribute("submit", "submit");
        input.classList.add(".btn-default");
    })

    renderContent(addPost);
}

//Цветовая схема
function colorSheme(colorSchemeForm){
    const form = document.createElement("form");
    form.classList.add(".form-color")
    form.attributes('name', colorSchemeForm.name);

    colorSchemeForm.fields.forEach(field => {
        const label = document.createElement("label");
        label.classList.add(".form-lable")
        label.textContent = fields.lable;

        const input = document.createElement('input');
        input.classList.add(".form-input")
        for(let inputProperty in fields.input){
            input.setAttribute(inputProperty, fields.input[inputProperty])
        }

        lable.appendChild("label");
        input.appendChild("input");
    });

    renderContent(colorSheme);
}


//Интервью
function interview(interviewForm){
    const form = document.createElement("form");
    form.classList.add(".form-post")
    form.attributes('name', addPostForm.name);

    interviewForm.fields.forEach(fields => {
        const label = document.createElement("label");
        label.classList.add(".form-lable")
        label.textContent = fields.lable;

        const input = document.createElement('input');
        input.classList.add(".form-input")
        for(let inputProperty in fields.input){
            input.setAttribute(inputProperty, fields.input[inputProperty]) 
        }

        lable.appendChild("lable");
        input.appendChild("input");
    });

    interviewForm.references.forEach(references => {
        const input = document.createElement("input");
        for(let inputProperty in fields.input){
            input.setAttribute(inputProperty, references.input[inputProperty])
        }

        const referenceLink = document.createElement("a");
        referenceLink.href = reference.ref;
        referenceLink.textContent = reference.text;

        input.appendChild("input");
        form.appendChild(referenceLink);
    })

    interviewForm.buttons.forEach(buttons => {
        const button = document.createElement("button")
        input.classList.add(".btn-default")
    })

    renderContent(interview);
}


//Авторизация
function loginIn(signInForm){

}

function register(signUpForm){
    
}

//Рендер в main
function renderContent(content){
    const main = document.querySelector(".main")
    main.insertAdjacentHTML("before", content);
}