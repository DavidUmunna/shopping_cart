//add and remove items



let quantity = 0;
function add_items() {
    let add_buttons = document.querySelectorAll('.add');
    
    add_buttons.forEach((add_button) => {
        
        let quantity_display = add_button.closest('.item').querySelector('.quantity');
        
        const updatequantity = () => {
            quantity_display.textContent = quantity;
            updatetotalprice()
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
            updatetotalprice()
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

    items.forEach((item) =>{
        const priceElement = item.querySelector('.item-price').getAttribute('data-price');
        const price=parseFloat(priceElement)
        const quantityElement=item.querySelector('.quantity').textContent;
        const quantity=parseInt(quantityElement)
        total+=price*quantity;
    })
    document.querySelector('.total').textContent=`$${total.toFixed(2)}`

    
    
}



updatetotalprice();


console.log(document.querySelector('.item-price').getAttribute('data-price'))