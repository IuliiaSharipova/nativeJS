const handler = (event) => {
    event.stopPropagation()
    console.log(event.currentTarget.id)
}
//в момент вызова всегда будет передан в качестве параметра объект
const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

sm.onclick = handler //свойства
md.onclick = handler //свойства
bg.onclick = handler //свойства
//sm.onclick=null

sm.addEventListener('click', handler)//обработчик события, не использовать анонимные функции
sm.removeEventListener('click', handler)

const a=document.getElementById('a')
a.onclick=(e)=>{
    e.preventDefault()
    alert('link does not redirect')
}