
//add and remove items
function getelement(str){
    var element=document.getElementById(str)
    return element
}

let total=0
let quantity=0
var add=getelement('plus')
var remove=getelement('minus')
var quantity_display1=getelement('quantity_1')
let quantity_1=0
var add_2=getelement('plus_2')
var remove_2=getelement('minus_2')
var quantity_display2=getelement('quantity_2')
let quantity_2=0
var add_3=getelement('plus_3')
var remove_3=getelement('minus_3')
var quantity_display3=getelement('quantity_3')


const updatequantity=()=>{quantity_display1.textContent=quantity}
const updatequantity_1=()=>{quantity_display2.textContent=quantity_1}
const updatequantity_2=()=>{quantity_display3.textContent=quantity_2}
add.addEventListener('click',()=>{ quantity++; updatequantity();})
remove.addEventListener('click',()=>{ if (quantity>0){quantity--;} updatequantity();})


add_2.addEventListener('click',()=>{ quantity_1++; updatequantity_1();})
remove_2.addEventListener('click',()=>{ if (quantity_1>0){quantity_1--;} updatequantity_1();})
    
    add_3.addEventListener('click',()=>{ quantity_2++; updatequantity_2();})
remove_3.addEventListener('click',()=>{ if (quantity_2>0){quantity_2--;} updatequantity_2();updatetotalprice()})
        
        
        //likes
        
        let heart=getelement('heart')
        let heart_1=getelement('heart_1')
        let heart_2=getelement('heart_2')

        heart.addEventListener('click',()=>{heart.style.color=heart.style.color==='red'? "black":"red"})
//heart.addEventListener('click',()=>{heart.style.color='black'})
heart_1.addEventListener('click',()=>{heart_1.style.color=heart_1.style.color==='red'? "black":"red"})
heart_2.addEventListener('click',()=>{heart_2.style.color=heart_2.style.color==='red'? "black":"red"})


//remove items

let trash=getelement('trash')
let trash_1=getelement('trash_1')
let trash_2=getelement('trash_2')

let item_1=getelement('item_1')
let item_2=getelement('item_2')
let item_3=getelement('item_3')

trash.addEventListener('click',()=>{item_1.remove()})
trash_1.addEventListener('click',()=>{item_2.remove()})
trash_2.addEventListener('click',()=>{item_3.remove()})



//total
let total_1=getelement('total')
const updatetotalprice=()=>{total_1.textContent=total}
pr_1=getelement('price_1')
price_1=pr_1.textContent.replace("$",' ')
pr_2=getelement('price_2')
price_2=pr_2.textContent.replace("$",' ')
pr_3=getelement('price_3')
price_3=pr_3.textContent.replace("$",' ')

console.log(parseFloat(price_1))
console.log(parseFloat(price_2))
console.log(parseFloat(price_3))


total_1.addEventListener('click',()=>{total=total+(quantity*price_1)+(quantity_1*price_2)+(quantity_2*price_3); ;})






