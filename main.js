 Webcam.set({   width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

    camera=document.getElementById("camera");

    Webcam.attach(camera);

    function capture_image() {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
        })
    }
    console.log('ml5 version:', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PPVPVE-AB/model.json',model);

    function model() {
        console.log("¡Model Loaded!")
    }
    
function speak() {
    synth = window.speechSynthesis;
    speak_data = "The gesture is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function take() {
    image = document.getElementById("captured_image");
    classifier.classify(image, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
        } else {
            console.log(results);
            prediction = results[0].label;
          speak();
            if (results[0].label == "✌")
    {
        document.getElementById("prediction_result").innerHTML = "&#9996;";
    }
    if (results[0].label == "👌")
    {
        document.getElementById("prediction_result").innerHTML = "&#128076;";
    }
    if (results[0].label == "👍")
    {
        document.getElementById("prediction_result").innerHTML = "&#128077;";
    }
    if (results[0].label == "🤘")
    {
        document.getElementById("prediction_result").innerHTML = "&#129304;";
    }
    if (results[0].label == "☝")
    {
        document.getElementById("prediction_result").innerHTML = "&#9757;";
    }
        }
}