const fromop=document.querySelector('#fcr');
const toop=document.querySelector('#tcr');
const am=document.querySelector('.amt');
let pallcur,allcur,val;
const bod=document.querySelector('body');
const but=document.querySelector('#convert');
let url='https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';

( async function (){
    pallcur= await fetch(url);
    console.log(pallcur);
    allcur= await pallcur.json();
    console.log(allcur);
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
            console.log(p1);
            let raw=await p1.json();
            console.log(raw);
            val=raw[fromcur][tocur];
            console.log(val);
            let amount=am.value*val;
            let newdiv=document.createElement('div');
            newdiv.innerText=amount;
            bod.append(newdiv);
        })();
        

    })
})();





