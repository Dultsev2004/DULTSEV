function readJSON(input) {
    let file = input.files[0];
    let readerFile = new FileReader();
    readerFile.readAsText(file);

    readerFile.onload = function() {
        const string = readerFile.result;
        const json = JSON.parse(string)

        buildForm(json);
    };
}

function buildForm(json){

};
