const camera = document.getElementById("camera");
const result = document.getElementById("result");

Webcam.set({
    width: 360,
    heigth: 250,
    image_format: 'png',
    png_quality: 90


});

Webcam.attach(camera);

function snap() {
    result.innerHTML = "";
    Webcam.snap(function (dataURI) {
        const captura = document.createElement("img");
        captura.setAttribute("id", "captura" );
        captura.setAttribute("src", "dataURI");
        result.appendChild(captura);

    })
};

const teachablemachineLink = 'https://teachablemachine.withgoogle.com/models/[...]';
const modeLink = teachablemachineLink + 'model.json'
const classifier =  m15.image.Classifier(modeLink, modelLoaded)

function modelLoaded() {
    console.log('Modelo Carregado')
    Webcam.attach(camera);
}

function check() {
    const img = document.getElementById('captura')
    classifier.classify(img, goResult);
}

function goResult() {
    console.log(error);
    console.log(results);

    const objeto = documnt.getElementById("objectName");
    const precisao = document.getElementById("objectAccuracy");

    if (!error) {
        objeto.innerHTML = results[0].label;
        precisao.innerHTML = results[0].confidence.toFixed(2).
     } else {
        console.error(error);
    }
}
