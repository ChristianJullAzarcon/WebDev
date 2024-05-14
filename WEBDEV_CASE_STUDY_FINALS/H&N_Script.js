function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("collapsible");
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');

function getProductDetails(productId) {
const products = {
  '1': {
      brand: 'Dyson',
      src: "images/Dyson Supersonic Hair Dryer.png",
      name: 'Dyson Supersonic Hair Dryer',
      price: '₱ 7,980.00',
      description: 'A high-speed, powerful hair dryer that uses intelligent heat control to prevent extreme heat damage and maintain natural shine.'
  },
  '2': {
      brand: 'T3',
      src: "images/T3 Whirl Trio Interchangeable Curling Wand.png",
      name: 'T3 Whirl Trio Interchangeable Curling Wand',
      price: '₱ 6000.00',
      description: 'A versatile curling wand with three interchangeable barrels for creating various curl styles, from loose waves to tight curls.'
  },
  '3': {
      brand: 'GHD',
      src: "images/GHD Platinum+ Styler.png",
      name: 'GHD Platinum+ Styler',
      price: '₱ 4,980.00',
      description: 'A premium hair straightener with ultra-zone predictive technology that ensures consistent heat for optimal styling results.'
  },
  '4': {
      brand: 'Revlon',
      src: "images/Revlon One-Step Hair Dryer and Volumizer.png",
      name: 'Revlon One-Step Hair Dryer and Volumizer',
      price: '₱ 1,199.80',
      description: 'A multifunctional hair tool that combines a hair dryer and a volumizing brush for smooth, salon-like blowouts at home.'
  },
  '5': { brand: 'BaBylissPRO',
      src: "images/BaBylissPRO Nano Titanium-Plated Straightening Iron.png",
      name: 'BaBylissPRO Nano Titanium-Plated Straightening Iron',
      price: '₱ 2,799.00',
      description: 'A professional-grade straightening iron with titanium plates for fast, efficient straightening and frizz control.'
  },
  '6': { brand: 'Conair',
      src: "images/Conair Infiniti Pro Curling Wand.png",
      name: 'Conair Infiniti Pro Curling Wand',
      price: '₱ 7,980.00',
      description: 'A budget-friendly curling wand with ceramic technology for even heat distribution and long-lasting curls.'
  },
  '7': { brand: 'Hot Tools',
      src: "images/Hot Tools Professional 24k Gold Curling Iron.png",
      name: 'Hot Tools Professional 24k Gold Curling Iron',
      price: '₱ 999.80',
      description: 'A gold-plated curling iron that heats up quickly and maintains consistent heat for smooth, shiny curls.'
  },
  '8': { brand: 'Remington',
      src: "images/Remington Pro Pearl Ceramic Curling Wand.png",
      name: 'Remington Pro Pearl Ceramic Curling Wand',
      price: '₱ 499.80',
      description: 'A ceramic curling wand with a pearl-infused barrel for creating silky, frizz-free curls with added shine.'
  },
  '9': { brand: 'Chi',
      src: "images/Chi Air Spin N Curl Ceramic Rotating Curler.png",
      name: 'Chi Air Spin N Curl Ceramic Rotating Curler',
      price: '₱ 1,999.80',
      description: 'A rotating curler that automatically curls hair with ceramic heat technology, reducing frizz and damage.'
  },
  '10': { brand: 'Panasonic',
      src: "images/Panasonic Nanoe Moisture Infusion Hair Dryer.png",
      name: 'Panasonic Nanoe Moisture Infusion Hair Dryer',
      price: '₱ 1,999.80',
      description: 'A hair dryer with Nanoe technology that infuses moisture into hair for smooth, hydrated results.'
  },
  '11': { brand: 'Bed Head',
      src: "images/Bed Head Wave Artist Deep Waver.png",
      name: 'Bed Head Wave Artist Deep Waver',
      price: '₱ 599.80',
      description: 'A deep waver that creates sculpted waves and beachy curls with tourmaline ceramic technology for frizz-free styling.'
  },
  '12': { brand: 'Paul Mitchell',
      src: "images/Paul Mitchell Neuro Angle Cone Curling Iron.png",
      name: 'Paul Mitchell Neuro Angle Cone Curling Iron',
      price: '₱ 2,600.00',
      description: 'A cone-shaped curling iron with adjustable temperature settings and ergonomic design for precise, effortless curls.'
  },
  '13': {
      brand: 'Rusk',
      src: "images/Rusk Speed Freak Professional Hair Dryer.png",
      name: 'Rusk Speed Freak Professional Hair Dryer',
      price: '₱ 1,799.00',
      description: 'A lightweight, powerful hair dryer with ceramic and tourmaline technology for quick drying and reduced frizz.'
  },
  '14': { 
      brand: 'Conair',
      src: "images/Conair Velvet Touch Paddle Brush.png",
      name: 'Conair Velvet Touch Paddle Brush',
      price: '₱ 159.80',
      description: 'A soft-touch paddle brush with flexible bristles for detangling and smoothing hair without pulling or breakage.'
  },
  '15': { 
      brand: 'Wet Brush',
      src: "images/Wet Brush Original Detangler Hair Brush.png",
      name: 'Wet Brush Original Detangler Hair Brush',
      price: '₱ 199.80',
      description: 'A gentle detangling brush with IntelliFlex bristles that glide through knots and tangles without causing damage or pain.'
  },
  '16': { 
      brand: 'Nail Tek',
      src: "images/Nail Tek Intensive Therapy II.png",
      name: 'Nail Tek Intensive Therapy II',
      price: '₱ 350.00',
      description: 'Nail strengthener and conditioner that promotes healthy, resilient nails.'
  },
  '17': { 
      brand: 'ORLY',
      src: "images/ORLY Nail Bonder.png",
      name: 'ORLY Nail Bonder',
      price: '₱ 200.00',
      description: 'Nail bonder that helps polish adhere better and prevents chipping for longer-lasting manicures.'
  },
  '18': { 
      brand: 'China Glaze',
      src: "images/China Glaze Fast Forward Top Coat.png",
      name: 'China Glaze Fast Forward Top Coat',
      price: '₱ 180.00 ',
      description: 'Quick-drying top coat that adds shine and extends the wear of nail products.'
  },
  '19': { 
      brand: 'Seche Vite',
      src: "images/Seche Vite Dry Fast Top Coat.png",
      name: 'Seche Vite Dry Fast Top Coat',
      price: '₱ 280.00',
      description: 'Fast-drying top coat that provides a glossy finish and protects nail products from chipping.'
  },
  '20': { 
      brand: 'Nail Art Brushes Set',
      src: "images/Nail Art Brushes Set with Dotting Tools.png",
      name: 'CND Shellac UV Gel Polish',
      price: '₱ 150.00 ',
      description: 'Set of nail art brushes and dotting tools for creating intricate designs and nail art masterpieces.'
  },
  '21': { 
      brand: 'Tweezerman',
      src: "images/Tweezerman Nail Clipper Set.png",
      name: 'Nail Tek Intensive Therapy II',
      price: '₱ 300.00',
      description: 'Set of nail clippers for precise and clean nail trimming.'
  },
  '22': { 
      brand: 'Emjoi',
      src: "images/Emjoi Micro-Pedi Callus Remover.png",
      name: 'Emjoi Micro-Pedi Callus Remover',
      price: '₱ 500.00',
      description: 'Electronic callus remover for smoothing rough skin on the feet.'
  },
  '23': { 
      brand: 'Sally Hansen',
      src: "images/Sally Hansen Nail File.png",
      name: 'Sally Hansen Nail File',
      price: '₱ 200.00',
      description: 'Double-sided nail file for shaping and smoothing nails.'
  },
  '24': { 
      brand: 'Revlon',
      src: "images/Revlon Nail Buffer.png",
      name: 'Revlon Nail Buffer',
      price: '₱ 100.00',
      description: 'Nail buffer for creating a smooth, shiny nail surface.'
  },
  '25': { 
      brand: 'Cuticle Pusher and Trimmer Set',
      src: "images/Cuticle Pusher and Trimmer Set.png",
      name: 'Cuticle Pusher and Trimmer Set',
      price: '₱ 120.00',
      description: 'Set of cuticle pusher and trimmer tools for maintaining neat and healthy-looking nails.'
  },
};

return products[productId] || null;
}

function displayProductDetails(product) {
    if (product) {
        const formattedPrice = "₱ " + product.price.toLocaleString('en-PH', {minimumFractionDigits: 2});
        document.getElementById('Mainimg').src = `${product.src}`;
        document.getElementById('brand').innerHTML = `<h6>${product.brand}</h6>`;
        document.getElementById('prodname').innerHTML = `<h4>${product.name}</h4>`;
        document.getElementById('price').innerHTML = formattedPrice;
        document.getElementById('details').innerHTML = `<p>${product.description}</p>`;
    } else {
        console.error('Product not found.');
    }
}

const product = getProductDetails(productId);
displayProductDetails(product);



/*-----------------------------------------------*/



/*----------------------Cart------------------------------*/

    const product1 = [
        {
             id:0,
             brand: 'Dyson',
             src: "images/Dyson Supersonic Hair Dryer.png",
             name: 'Dyson Hair Dryer',
             price: 7980.00,
             description: 'A high-speed, powerful hair dryer that uses intelligent heat control to prevent extreme heat damage and maintain natural shine.'
         },
         {
             id:1,
             brand: 'T3',
             src: "images/T3 Whirl Trio Interchangeable Curling Wand.png",
             name: 'T3 Whirl Trio Curling Wand',
             price: 6000.00,
             description: 'A versatile curling wand with three interchangeable barrels for creating various curl styles, from loose waves to tight curls.'
         },
         {
             id:2,
             brand: 'GHD',
             src: "images/GHD Platinum+ Styler.png",
             name: 'GHD Platinum+ Styler',
             price: 4980.00,
             description: 'A premium hair straightener with ultra-zone predictive technology that ensures consistent heat for optimal styling results.'
         },
         {
             id:3,
             brand: 'Revlon',
             src: "images/Revlon One-Step Hair Dryer and Volumizer.png",
             name: 'Revlon Hair Dryer and Volumizer',
             price: 1199.80,
             description: 'A multifunctional hair tool that combines a hair dryer and a volumizing brush for smooth, salon-like blowouts at home.'
         },
         { 
             id:4,
             brand: 'BaBylissPRO',
             src: "images/BaBylissPRO Nano Titanium-Plated Straightening Iron.png",
             name: 'Titanium-Plated Straightening Iron',
             price: 2799.00,
             description: 'A professional-grade straightening iron with titanium plates for fast, efficient straightening and frizz control.'
         },
         {
             id:5,
             brand: 'Conair',
             src: "images/Conair Infiniti Pro Curling Wand.png",
             name: 'Conair Pro Curling Wand',
             price: 7980.00,
             description: 'A budget-friendly curling wand with ceramic technology for even heat distribution and long-lasting curls.'
         },
         { 
             id:6,
             brand: 'Hot Tools',
             src: "images/Hot Tools Professional 24k Gold Curling Iron.png",
             name: 'Hot Tools 24k Gold Curling Iron',
             price: 999.80,
             description: 'A gold-plated curling iron that heats up quickly and maintains consistent heat for smooth, shiny curls.'
         },
         {
             id:7,
             brand: 'Remington',
             src: "images/Remington Pro Pearl Ceramic Curling Wand.png",
             name: 'Remington Ceramic Curling Wand',
             price: 499.80,
             description: 'A ceramic curling wand with a pearl-infused barrel for creating silky, frizz-free curls with added shine.'
         },
         { 
             id:8,
             brand: 'Chi',
             src: "images/Chi Air Spin N Curl Ceramic Rotating Curler.png",
             name: 'Chi Air Ceramic Rotating Curler',
             price: 1999.80,
             description: 'A rotating curler that automatically curls hair with ceramic heat technology, reducing frizz and damage.'
         },
         { 
             id:9,
             brand: 'Panasonic',
             src: "images/Panasonic Nanoe Moisture Infusion Hair Dryer.png",
             name: 'Panasonic Moisture Infusion Hair Dryer',
             price: 1999.80,
             description: 'A hair dryer with Nanoe technology that infuses moisture into hair for smooth, hydrated results.'
         },
         { 
             id:10,
             brand: 'Bed Head',
             src: "images/Bed Head Wave Artist Deep Waver.png",
             name: 'Bed Head Wave Artist Deep Waver',
             price: 599.80,
             description: 'A deep waver that creates sculpted waves and beachy curls with tourmaline ceramic technology for frizz-free styling.'
         },
         { 
             id:11,
             brand: 'Paul Mitchell',
             src: "images/Paul Mitchell Neuro Angle Cone Curling Iron.png",
             name: 'Neuro Angle Cone Curling Iron',
             price: 2600.00,
             description: 'A cone-shaped curling iron with adjustable temperature settings and ergonomic design for precise, effortless curls.'
         },
         {
             id:12,
             brand: 'Rusk',
             src: "images/Rusk Speed Freak Professional Hair Dryer.png",
             name: 'Rusk Speed Professional Hair Dryer',
             price: 1799.00,
             description: 'A lightweight, powerful hair dryer with ceramic and tourmaline technology for quick drying and reduced frizz.'
         },
         { 
             id:13,
             brand: 'Conair',
             src: "images/Conair Velvet Touch Paddle Brush.png",
             name: 'Conair Velvet Touch Paddle Brush',
             price: 159.80,
             description: 'A soft-touch paddle brush with flexible bristles for detangling and smoothing hair without pulling or breakage.'
         },
         { 
             id:14,
             brand: 'Wet Brush',
             src: "images/Wet Brush Original Detangler Hair Brush.png",
             name: 'Wet Brush Original Detangler Hair Brush',
             price: 199.80,
             description: 'A gentle detangling brush with IntelliFlex bristles that glide through knots and tangles without causing damage or pain.'
         },
         { 
             id:15,
             brand: 'Nail Tek',
             src: "images/Nail Tek Intensive Therapy II.png",
             name: 'Nail Tek Intensive Therapy II',
             price: 350.00,
             description: 'Nail strengthener and conditioner that promotes healthy, resilient nails.'
         },
         { 
             id:16,
             brand: 'ORLY',
             src: "images/ORLY Nail Bonder.png",
             name: 'ORLY Nail Bonder',
             price: 200.00,
             description: 'Nail bonder that helps polish adhere better and prevents chipping for longer-lasting manicures.'
         },
         { 
             id:17,
             brand: 'China Glaze',
             src: "images/China Glaze Fast Forward Top Coat.png",
             name: 'China Glaze Fast Forward Top Coat',
             price: 180.00,
             description: 'Quick-drying top coat that adds shine and extends the wear of nail products.'
         },
         { 
             id:18,
             brand: 'Seche Vite',
             src: "images/Seche Vite Dry Fast Top Coat.png",
             name: 'Seche Vite Dry Fast Top Coat',
             price: 280.80,
             description: 'Fast-drying top coat that provides a glossy finish and protects nail products from chipping.'
         },
         { 
             id:19,
             brand: 'Nail Art Brushes Set',
             src: "images/Nail Art Brushes Set with Dotting Tools.png",
             name: 'CND Shellac UV Gel Polish',
             price: 150.80,
             description: 'Set of nail art brushes and dotting tools for creating intricate designs and nail art masterpieces.'
         },
         { 
             id:20,
             brand: 'Tweezerman',
             src: "images/Tweezerman Nail Clipper Set.png",
             name: 'Nail Tek Intensive Therapy II',
             price: 300.00,
             description: 'Set of nail clippers for precise and clean nail trimming.'
         },
         { 
             id:21,
             brand: 'Emjoi',
             src: "images/Emjoi Micro-Pedi Callus Remover.png",
             name: 'Emjoi Micro-Pedi Callus Remover',
             price: 500.00,
             description: 'Electronic callus remover for smoothing rough skin on the feet.'
         },
         { 
             id:22,
             brand: 'Sally Hansen',
             src: "images/Sally Hansen Nail File.png",
             name: 'Sally Hansen Nail File',
             price: 200.00,
             description: 'Double-sided nail file for shaping and smoothing nails.'
         },
         { 
             id:23,
             brand: 'Revlon',
             src: "images/Revlon Nail Buffer.png",
             name: 'Revlon Nail Buffer',
             price: 100.00,
             description: 'Nail buffer for creating a smooth, shiny nail surface.'
         },
         { 
             id: 24,
             brand: 'Cuticle Pusher and Trimmer Set',
             src: "images/Cuticle Pusher and Trimmer Set.png",
             name: 'Cuticle Pusher and Trimmer Set',
             price: 120.00,
             description: 'Set of cuticle pusher and trimmer tools for maintaining neat and healthy-looking nails.'
         },
    ]
    
    const categories = [...new Set(product1.map((item)=>{return item.brand}))];
let i = 0;
document.getElementById('root').innerHTML = product1.map((item)=>
{
    var {src, name,description, price} = item;
    return(
        `<div class='box'>
             <div class='img-box'>
                   <img class='images' src="${src}"></img>
            </div>
            <div class='bottom'>
                <p>${name}</p><br>
                <p class='desc'>${description}</p>
                <h2> ${price.toLocaleString('en-PH', { style: 'currency', currency: 'PHP' })}</h2>
                <button onclick='addToCart(${i++})'>Add to cart</button>
            </div>
        </div>`
    )
}).join('')

    
    var cart = [];
    var total = 0;
    
    function addToCart(a) {
        var quantity = parseInt(prompt("Enter quantity:", 1));
        if (isNaN(quantity) || quantity <= 0) {
            alert("Invalid quantity. Please enter a valid quantity.");
            return;
        }
    
        const item = { ...product1[a], quantity: quantity };
        cart.push(item);
        total += item.price * quantity;
        alert("Added");
        calculateSubtotal();
        displaycart();
    
    }
    
    
    function updateQuantity(index, quantity) {
        cart[index].quantity = parseInt(quantity);
        updateSubtotal(index);  
        calculateSubtotal();
        displaycart();
    }
    
    function updateSubtotal(index) {
        const item = cart[index];
        const subtotal = item.price * item.quantity;
        document.getElementById(`subtotal${index}`).innerHTML = `Subtotal: ₱ ${subtotal.toFixed(2)}`;
    }
    
    function updateSubtotalUI(index) {
        const item = cart[index];
        const subtotal = item.price * item.quantity;
        document.getElementById(`subtotal${index}`).innerHTML = `Subtotal: ₱ ${subtotal.toFixed(2)}`;
    }
    
    function calculateSubtotal() {
        total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        document.getElementById('total').innerHTML = "₱ " + total.toLocaleString('en-PH', {minimumFractionDigits: 2});
    }
    
    
    
    function displaycart() {
        let j = 0;
    
        if (cart.length == 0) {
            document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
            document.getElementById('total').innerHTML = "₱ " + 0 + ".00";
        } else {
            setTimeout(() => {
                document.getElementById('cartItem').innerHTML = cart.map((item) => {
                    var { src, name, price, quantity } = item;
                    const formattedPrice = "₱ " + (price * quantity).toLocaleString('en-PH', {minimumFractionDigits: 2});
                    return (
                        `<div class='cart-item'>
                            <div class='row-img'>
                                <img class='rowimg' src="${src}">
                            </div>
                            <div class='row-details'>
                                <p class='name-price'>${name}<br>${formattedPrice}</p>
                                <div class='quantity'>
                                    <label for='quantity${j}'>Quantity:</label>
                                    <span>${quantity}</span>
                                </div>
                                <p class='subtotal' id='subtotal${j}'>Subtotal: ₱ ${(price * quantity).toLocaleString('en-PH', {minimumFractionDigits: 2})}</p>
                            </div>
                            <button style="width: 25%;" onclick='delElement(${j++})'>x</button>
                        </div>`
                    );
                }).join('');
                document.getElementById('total').innerHTML = "₱ " + total.toLocaleString('en-PH', {minimumFractionDigits: 2});
            }, 50);
        }
    
        document.getElementById("count").innerHTML = cart.length;
    }
    
    function delElement(a){
        total -= cart[a].price * cart[a].quantity;
        cart.splice(a,1);
        calculateSubtotal();
        displaycart();
    }
    
    document.getElementById("count").innerHTML = cart.length;
    
    function checkout() {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
        } else {
           
            cart = [];
            total = 0;
            alert("Your Order is Placed Successfully 🙂");
            displaycart(); 
            
        }
    }
    
    function toggleMenu() {
        var navbar = document.getElementById("navbar");
        navbar.classList.toggle("collapsible");
    }


/**-----------------------------log in----------------------------- */

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('visible')) {
        sidebar.classList.remove('visible');
    } else {
        sidebar.classList.add('visible');
    }
}

/**-----------------------------log in----------------------------- */
