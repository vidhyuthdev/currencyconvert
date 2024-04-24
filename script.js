const fromop=document.querySelector('#fcr');
const toop=document.querySelector('#tcr');
const am=document.querySelector('.amt');
let pallcur,allcur,val;
const bod=document.querySelector('body');
const but=document.querySelector('#convert');
const displaytext=document.querySelector('.converted');
let url='https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';

( async function (){
    pallcur= await fetch(url);
    allcur= await pallcur.json();
    for(let key in allcur)
    {
        if(allcur[key]=="")
        delete allcur[key];
    }
    console.log(allcur);
    for(let key in allcur)
    {
        let opt=document.createElement('option');
        opt.innerText=`${key.toUpperCase()} - ${allcur[key]}`;
        opt.setAttribute('value',key);
        let opt1=document.createElement('option');
        opt1.innerText=`${key.toUpperCase()} - ${allcur[key]}`;
        opt1.setAttribute('value',key);
        fromop.append(opt);
        toop.append(opt1);
    }    
    but.addEventListener('click',()=>{
        let tocur=toop.value;
        let fromcur=fromop.value;
        let newurl=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcur}.json`;
        (async function(){
            let p1= await fetch(newurl);
            let raw=await p1.json();            
            val=raw[fromcur][tocur]; 
            let tobechecked=am.value;
            if(tobechecked!==""&&!isNaN(tobechecked))
            {
                tobechecked=parseFloat(tobechecked);
                let amount=(tobechecked*val).toFixed(2);                      
                displaytext.innerText=` ${tobechecked} ${fromcur.toUpperCase()} is equal to ${amount} ${tocur.toUpperCase()}`;
            }           
            else
            alert('Enter a valid number');                      
        })();   
    })
})();





