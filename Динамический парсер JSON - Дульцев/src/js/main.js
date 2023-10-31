function readJSON(input) {
    let file = input.files[0];
    let readerFile = new FileReader();
    readerFile.readAsText(file);

    readerFile.onload = function() {
        const string = readerFile.result;
        const json = JSON.parse(string)
        console.log(json);
        buildForm(json);
    };
}

function buildForm(json){
    let form = document.createElement("form");
    form.classList.add("form")
    let sectionTitle = document.createElement("h2");
    let formBottom = document.createElement("div")
    formBottom.classList.add("form__bottom")
    sectionTitle.innerHTML = json.name;

    //Инпуты
    for(let field in json.fields){
        let label = document.createElement("label");
        label.classList.add("form__label");
        label.innerHTML = json.fields[field].label;

        let input = document.createElement("input");
        input.setAttribute("type", json.fields[field].input.type);
        input.classList.add("form__input");

        if(json.fields[field].input.placeholder){
            input.placeholder = json.fields[field].input.placeholder;
        }

        if(json.fields[field].input.type === 'file'){
            label.classList.add("form-file__label");
        }

        if(json.fields[field].input.required){
            input.required = true;
        }

        let inputBlock = document.createElement("div");
        inputBlock.classList.add("form-fields")
    
        inputBlock.appendChild(label);
        inputBlock.appendChild(input);
        form.appendChild(inputBlock);
    }

    //Ссылки
    for(let reference in json.references){
        let input = document.createElement("input");
        if(json.references[reference].input && json.references[reference].input.required){
            input.required = true;
        }

        if(json.references[reference].input && json.references[reference].input.checked){
            input.checked = true;
        }

        if (json.references[reference]["text without ref"]) {
            let textWithoutRef = document.createElement('span');
            textWithoutRef.innerHTML = json.references[reference]["text without ref"];
            formBottom.appendChild(textWithoutRef);
        }

        if(json.references[reference]["text"]){
            let text = document.createElement("a")
            text.innerHTML = json.references[reference]["text"];
            text.setAttribute("href", href="#")
            formBottom.appendChild(text);
        }
    }

    //Цикл в случае нескольких кнопок
    for(let button in json.buttons){
        let btn = document.createElement("button");
        btn.classList.add("btn-default")
        btn.innerHTML = json.buttons[button].text;

        formBottom.appendChild(btn);
    }

    form.appendChild(formBottom);

    renderForm(form);
};


function renderForm(form){
    formRenderBlock = document.querySelector(".form-render__block");
    formRenderBlock.innerHTML = " ";
    formRenderBlock.insertAdjacentElement("beforeend", form);
}