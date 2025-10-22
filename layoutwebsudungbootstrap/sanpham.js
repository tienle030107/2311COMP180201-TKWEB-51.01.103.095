document.addEventListener("DOMContentLoaded", function() {
    const productsJSON = localStorage.getItem('allProducts');
    const allProducts = JSON.parse(productsJSON);
    if (!allProducts) {
        document.getElementById('product-name').textContent = "Lỗi: Không tìm thấy dữ liệu sản phẩm.";
        console.error("Không tìm thấy 'allProducts' trong localStorage. Hãy chắc chắn bạn đã chạy trang index.html trước.");
        return;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    if (isNaN(productId)) {
         document.getElementById('product-name').textContent = "Lỗi: ID sản phẩm không hợp lệ.";
         console.error("ID sản phẩm không hợp lệ trên URL.");
         return;
    }
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-image').alt = product.name;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-details').innerHTML = `
            <li>Màn hình: Kích thước tùy theo dòng máy</li>
            <li>Chip xử lý: Apple A-series tương ứng</li>
            <li>Camera: Thông số camera tùy dòng</li>
            <li>Dung lượng: 128GB / 256GB / 512GB / 1TB</li>
        `;
        const addToCartButton = document.querySelector('.btn-primary');
        addToCartButton.addEventListener('click', function() {
            const quantityInput = document.querySelector('input[type="number"]');
            const quantity = parseInt(quantityInput.value);

            if (isNaN(quantity) || quantity < 1) {
                alert("Vui lòng nhập số lượng hợp lệ (ít nhất là 1).");
                return;
            }
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItemIndex = cart.findIndex(item => item.id === product.id);
            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`Đã thêm ${quantity} sản phẩm "${product.name}" vào giỏ hàng!`);
        });
    } else {
        document.getElementById('product-name').textContent = "Không tìm thấy sản phẩm!";
        document.getElementById('product-price').textContent = "";
        document.getElementById('product-details').innerHTML = "";
        document.getElementById('product-image').src = "";
    }
});