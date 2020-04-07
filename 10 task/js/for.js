let lim1, lim2, x, answ, min, max;
answ=1;
lim1= prompt('Enter lim1: ');
lim2= prompt('Enter lim2: ');
min =parseInt(lim1); 
max =parseInt(lim2); 

for(x=min; x<=max; x=x+1){
    answ=answ*x;
}
console.log(answ);

