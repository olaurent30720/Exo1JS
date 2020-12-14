//BOUCLES

//boucles Exo 1
let a = 0;

while(a<=10){
    console.log('la variable a est égale à '+a);
    a++;
};
//boucles Exo 2
let b = 0;
let c = 13;

while(b<=20){
    let e = b*c;
    console.log('la variable b vaut '+ b + ' et le resultat de b*c est ègal à '+e);
    b++;
};

//boucles Exo 3
let g = 100;
let h = 3;
while(g>=10){
    let j = g*h;
console.log('la variable g vaut '+g+ ' et le resultat de g*h est égal à '+j);
g--;
};

//boucles Exo 4
let k = 1;
while(k<=10){
    k=k+k/2;
    console.log(k)
};

//boucles Exo 5
let m = 1;
let n=document.querySelector('.b5');
do{
    m++;
    console.log('la variable m vaut '+m+ ' et ON Y ARRIVE PRESQUE!!');
}
while(m<=15);

//boucles Exo 6
let o = 20;
do{
    console.log('la variable o vaut '+o+ " et c'est presque bon!!");
    o--;
}
while(o>=0);

//boucles Exo 7
for(let r=0;r<=100;r+=15){
    console.log('la variable r vaut '+r+' et on tient le bon bout');
    };

//boucles Exo 8
for(let t=200;t>=0;t-=12){
    console.log('la variable s vaut '+t+ ' : ENFIN!!');
};

//FONCTIONS

// fonctions exo 1
function vrai(){ 
    let v = true;
    console.log(v)
}

// fonctions exo 2
function chaine(chain){
    return chain;
};
console.log('Salut');


// fonctions exo 3
function chaine2(chainA,chainB){
    return chainA+chainB;
};
console.log('Salut','les gars');

// fonctions exo 4

function nombre(nb1,nb2){
if(nb1>nb2){console.log('le premier nombre est supérieur au deuxième')}
else if(nb1<nb2){console.log('le premier nombbre est inférieur au deuxième')}
else{console.log('les deux nombres sont identiques')};
};
nombre(3,3);

// fonctions exo 5
function melange(nb3,chain3){
    console.log(nb3+chain3);
};
melange(3,' roses');

// fonctions exo 6
function identite(nom,prenom,age){
    console.log('Bonjour '+nom+' '+prenom+' tu as '+age+' ans');
};
identite('Cru','Carmen',112);

// fonctions exo 7

function identite(age,genre){
    if(age<18&&genre=='homme'){
        console.log('tu es un homme et tu es mineur');
    }
    else if(age>=18&&genre=='homme'){
    console.log('tu es un homme et tu es majeur');
    }
    else if(age<18&&genre=='femme'){
    console.log('tu es une femme et tu es mineure');
    }
    else{
    console.log('tu es une femme et tu es majeure');
    }
};
identite(19,'femme');

// fonctions exo 8
function somme(nb1=1,nb2=1,nb3=1){
    console.log(nb1+nb2+nb3);
}
somme();

// Tableaux

//Exos 1
let mois = ['janvier',
            'Février',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Aout',
            'Septembre',
            'Octobe',
            'Novembe',
            'Décembre'];
        
//Exos 2
console.log(mois[2]);

//Exo 3
console.log(mois[5]);

//Exo 4
mois.splice(7,1,'Août');
console.table(mois);

//Exo 5
let dep =new Array;
dep[02]='Aisne';
dep[59]='Nord';
dep[60]='Oise';
dep[62]='Pas-de-Calais';
dep[80]='Somme';
            
console.table(dep);
//Exo 6
console.log(dep[59]);
//Exo 7

dep.push(dep[51]='Marne')
console.table(dep);
//Exo 8

for(let i of mois){
    console.log(i);
};
//Exo 9
for(let j of dep){
    console.log(j);
}
//Exo 10
dep.forEach((r,index) => {
    console.log(`le departement ${r} a le numero ${index}`);
});
//variante homme et femme avec if et ternaire
let age=13, genre='hom';

if(genre=='hom') 
age>=18? console.log('hom maj'):console.log('hom mineur');

else if(genre=='fem') 
age>=18? console.log('fem maj'):console.log('fem mineur');