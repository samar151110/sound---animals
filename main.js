v1 = 0;
v2 = 0;
v3 = 0;
v4 = 0;

function Start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bE4ZwYrg7/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {

    if (error) {
        console.log('got result');
    }

    else {
        console.log(results);
        a1 = Math.floor(Math.random() * 255) + 1;
        a2 = Math.floor(Math.random() * 255) + 1;
        a3 = Math.floor(Math.random() * 255) + 1;

        document.getElementById("Detected voice").innerHTML = "detected Cat - "+ v1 + ", detected Cow - " + v2 + ", detected Lion - " + v3 + ", detected dog - " + v4 ;
        document.getElementById("Detected voice").style.color = "rgb("+ a1 + "," + a2 + "," + a3 + ")";

        document.getElementById("Detected animal").innerHTML = "Detected voice is of - "+ results[0].label ;
        document.getElementById("Detected animal").style.color = "rgb("+ a1 + "," + a2 + "," + a3 + ")";

        img = document.getElementById("animals");

        if(results[0].label == "Meoing") {
            img.src = "cat.jpg"
            v1 = v1 + 1;
        }

        else if(results[0].label == "Mooing") {
            img.src = "cow.jpg"
            v2 = v2 + 1;
        }
        else if(results[0].label == "Roar") {
            img.src = "lion.jpg"
            v3 = v3 + 1;
        }

        else if(results[0].label == "Barking") {
            img.src = "dog.jpg"
            v4 = v4 + 1;
        }
        else {
            img.src= "Ear.jpg"
        }
    }
}

