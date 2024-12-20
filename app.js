//add and remove items

let total=0
/*var add=getelement('plus')
var remove=getelement('minus')
var quantity_display1=getelement('quantity_1')
let quantity_1=0
var add_2=getelement('plus_2')
var remove_2=getelement('minus_2')
var quantity_display2=getelement('quantity_2')
let quantity_2=0
var add_3=getelement('plus_3')
var remove_3=getelement('minus_3')
var quantity_display3=getelement('quantity_3')*/


/*const updatequantity_1=()=>{quantity_display2.textContent=quantity_1}
const updatequantity_2=()=>{quantity_display3.textContent=quantity_2}
add.addEventListener('click',()=>{ quantity++; updatequantity();})
remove.addEventListener('click',()=>{ if (quantity>0){quantity--;} updatequantity();})


add_2.addEventListener('click',()=>{ quantity_1++; updatequantity_1();})
remove_2.addEventListener('click',()=>{ if (quantity_1>0){quantity_1--;} updatequantity_1();})
    
add_3.addEventListener('click',()=>{ quantity_2++; updatequantity_2();})
remove_3.addEventListener('click',()=>{ if (quantity_2>0){quantity_2--;} updatequantity_2();})*/
    
//add items
let quantity = 0;
function add_items() {
    let add_buttons = document.querySelectorAll('.add');
    
    add_buttons.forEach((add_button) => {
        
        let quantity_display = add_button.closest('.item').querySelector('.quantity');
        
        const updatequantity = () => {
            quantity_display.textContent = quantity;
        };
        
        add_button.addEventListener('click', () => {
            quantity++;
            updatequantity();
        });
        
    });
    
    

}

add_items();

function minus_items() {
    let minus_buttons = document.querySelectorAll('.minus');

    minus_buttons.forEach((minus_button) => {
        let quantity_display = minus_button.closest('.item').querySelector('.quantity');
       
   
        const updatequantity = () => {
            quantity_display.textContent = quantity;
        };

        minus_button.addEventListener('click', () => {
            if (quantity > 0) {
                quantity--;
            }
            updatequantity();
        });
    });
}

minus_items();

        //likes
       
        
        function likes(){
            let heart=document.querySelectorAll('.heart')
            heart.forEach((heart)=>{
                heart.addEventListener('click',()=>{
                    heart.style.color=heart.style.color==='red'? "black":"red"
                })
            });
        }
        likes()

        //remove items
        
        

        function delete_card(){
            let trash=document.querySelectorAll('.trash')
            trash.forEach((trash)=>{
                trash.addEventListener('click',()=>{
                    let card = trash.closest('.item')
                    if (card){
                        card.remove();
                    }
                })
            })

        }

        delete_card()

        


        //total
function updatetotalprice(){
    const items=document.querySelectorAll('.item')
    let total=0

    items.forEach(item =>{
        const priceElement = item.querySelector('.item-price').innerHTML;
        const price=parseFloat(priceElement)
       
        total+=price*quantity;
    })
    document.getElementById('total').textContent=`$${total.toFixed(2)}`
    
}

document.querySelectorAll('.quantity').forEach(input =>{
    input.addEventListener('click',updatetotalprice)
});

updatetotalprice();
