

const fetchAdvice=()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res=>{
        return res.json()
    })
    .then(advice=>{
        const adviceIdn=advice.slip.id
        const adviceText=advice.slip.advice
        advicetext.innerHTML=`"${adviceText}"`
        adviceId.innerHTML=adviceIdn
    })
    .catch(err=>
console.log(err))
}
const btn=document.getElementById('btn')
const adviceId=document.getElementById('adviceId')
const advicetext=document.getElementById('adviceText')
btn.addEventListener('click',()=>{
    fetchAdvice()
})

window.onload=()=>{
    fetchAdvice()
}