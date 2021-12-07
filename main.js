video = "";

function preload()
    {
        video = createVideo('video.mp4');
        video.hide();
    }

function setup()
{
    canvas = createCanvas(450,360);
    canvas.center();
}
function draw()
{
    image(video,0,0,450,360);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model loaded!")
    status = true;
    video.loop()
    video.speed(2);
    video.volume(0);
}