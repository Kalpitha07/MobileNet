Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quality:90,
    //flip_horiz: true,

    constraints: {
      facingMode: "environment"
    }
});
  camera = document.getElementById("camera");

Webcam.attach(camera);

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('MobileNet',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
  }
}

function display(){
  File = document.getElementById("myFile").files;
      console.log(File);
      var reader = new FileReader;
      reader.onload = function(event){
          document.getElementById("result").innerHTML = "<img id='captured_image' src="+event.target.result+">";
          console.log(event);
      };
      base = reader.readAsDataURL(File[0]);
}
