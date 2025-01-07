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
    
        items.forEach((item) =>{
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
    remove_item(){
        if(this.quantity>0){
            this.quantity--
        }
    }
}                                               