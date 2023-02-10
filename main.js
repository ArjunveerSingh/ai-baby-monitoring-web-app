objects=[];
s=""
function preload(){
    a= loadSound("emergency_alert.mp3");
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
video= createCapture(VIDEO);
video.hide();
video.size(640,420);

}

function ml(){
    console.log("Model Loaded!");
    s=true;
}

function gr(error,results){
if (error){
    console.log(error);
}
console.log(results);
objects=results;
}

function draw(){
    image(video,0,0,640,420);

    if(s != ""){
        r= floor(random(255));
        g= floor(random(255));
        b= floor(random(255));

        od.detect(i,gr);
    for(i=0; i<objects.length;i++){
        if(objects=="person"){
document.getElementById("found").innerHTML="Baby Detected";
a.stop();
        }
        else{
document.getElementById("found").innerHTML="Baby not Detected";
a.play();
        }

        if(objects.length<0){
            document.getElementById("found").innerHTML="Baby not Detected";
            a.play();
        }

        document.getElementById("status").innerHTML="Status= Object Detected";
        document.getElementById("number").innerHTML="Number of objects detected"+ objects.length;
        fill(r,g,b);
p= floor(objects[i].confidence *100);
text(objects[i].label+""+p+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
}

function start(){

    od= ml5.objectDetector('cocossd',ml);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}