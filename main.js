nose_x = 0;
nose_y = 0;

leftWrist_x = 0;
rightWrist_x = 0;

difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(670, 200);
    canvas = createCanvas(300, 300);
    canvas.position(1000, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model is loaded..");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        rightWrist_x = results[0].pose.rightWrist.x;
        leftWrist_x = results[0].pose.leftWrist.x;
        difference = floor(rightWrist_x-leftWrist_x);
    }
}

function draw() {
    background(0);
    fill(95, 158, 160);
    textSize(difference);
    text("Stark", nose_x, nose_y);
}