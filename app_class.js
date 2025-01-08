class Product{
    constructor(id,name, price){
        this.id=id
        this.name = name;
        this.price = price;
    }
}
class shopping_cart{
    constructor(product,quantity=0){
        this.product=product
        this.quantity=quantity
    }
     
    updatetotalprice(){
        this.product=document.querySelectorAll('.item')
        let total=0 
    
        this.product.forEach((item) =>{
            const priceElement = item.querySelector('.item-price').getAttribute('data-price');
            this.product.price=parseFloat(priceElement)
            const quantityElement=item.querySelector('.quantity').textContent;
            this.quantity=parseInt(quantityElement)
            total+=this.product.price*this.quantity;
        })
        document.querySelector('.total').textContent=`$${total.toFixed(2)}`
    
        
        
    }
  
}

class shopping_cart_item extends shopping_cart{
    constructor(product,quantity=0){
        super(product,quantity)
    }
    add_items() {
        let add_buttons = document.querySelectorAll('.add');
        
        add_buttons.forEach((add_button) => {
            
            let quantity_display = add_button.closest('.item').querySelector('.quantity');
            let product = add_button.closest('.item').getAttribute('data-product');
            let cartItem= new shopping_cart_item(product)
            const updatequantity = () => {
                quantity_display.textContent = cartItem.quantity;
                this.updatetotalprice()
            };
            
            add_button.addEventListener('click', () => {
                cartItem.quantity++;
                updatequantity();
            });
            
        });
        
        
    
    }
    minus_items(){
        let minus_button = document.querySelectorAll('.minus');
        
        minus_button.forEach((minus_button) => {
            
            let quantity_display = minus_button.closest('.item').querySelector('.quantity');
            let product = minus_button.closest('.item').getAttribute('data-product');
            let cartItem= new shopping_cart_item(product)
            const updatequantity = () => {
                quantity_display.textContent = cartItem.quantity;
                this.updatetotalprice()
            };
            
            minus_button.addEventListener('click', () => {
                if (cartItem.quantity > 0) {
                    cartItem.quantity--;
                }
                updatequantity();
            });
        });
    }

    likes(){
        let heart=document.querySelectorAll('.heart')
        heart.forEach((heart)=>{
            heart.addEventListener('click',()=>{
                heart.style.color=heart.style.color==='red'? "black":"red"
            })
        });
    }

    delete_card(){
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
}                                               

let shopping_class=new shopping_cart_item()
shopping_class.add_items()
shopping_class.minus_items()
shopping_class.likes()
shopping_class.delete_card()

let total_upodate=new shopping_cart()
total_upodate.updatetotalprice()
