let x, y;
y= prompt('Enter y: ');

if(y<=10){
    x=1;
    console.log(x);
}
else if(y >= 10 && y <= 20){
    x=0;
    console.log(x)
}
else if(y>20){
    x=-1;
    console.log(x);
}
else{
    console.log(' Sorry, an error occurred :(');
}
