const allShopProducts = [
    { id: 1, name: "iPhone 11", price: "6.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone11-green-select-2019_2_1_2_2_3.png" },
    { id: 2, name: "iPhone 11 Pro", price: "7.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-midnight-green-select-2019_6_2_1_4.png" },
    { id: 3, name: "iPhone 11 Pro Max", price: "9.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-11-pro-max-space-select-2019_1_1_3_2.png" },
    { id: 4, name: "iPhone 12", price: "7.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-12-xanh-duong-new-600x600-200x200-1_7.jpg" },
    { id: 5, name: "iPhone 12 Pro", price: "9.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/o/download_2__1_2_1.png" },
    { id: 6, name: "iPhone 12 Pro Max", price: "11.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/o/download_2__1_27_3.png" },
    { id: 7, name: "iPhone 13", price: "10.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg" },
    { id: 8, name: "iPhone 13 Pro", price: "15.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro.png" },
    { id: 9, name: "iPhone 13 Pro Max", price: "17.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro-max-256gb.png" },
    { id: 10, name: "iPhone 14", price: "13.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-256gb.jpg" },
    { id: 11, name: "iPhone 14 Plus", price: "15.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-plus-thumb-xanh-600x600.jpg" },
    { id: 12, name: "iPhone 14 Pro", price: "21.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__4.png" },
    { id: 13, name: "iPhone 14 Pro Max", price: "23.000.000 đ", image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m-iphone-14-pro-1_3.png" },
    { id: 14, name: "iPhone 15", price: "17.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-xanh-thumb-600x600.jpg" },
    { id: 15, name: "iPhone 15 Plus", price: "20.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-vang-126gb-thumb-600x600.jpg" },
    { id: 16, name: "iPhone 15 Pro", price: "27.000.000 đ", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4.png" },
    { id: 17, name: "iPhone 15 Pro Max", price: "30.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg" },
    { id: 18, name: "iPhone 16", price: "26.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/329135/iphone-16-blue-600x600.png" },
    { id: 19, name: "iPhone 16 Plus", price: "29.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/329140/iphone-16-plus-xanh.png" },
    { id: 20, name: "iPhone 16 Pro", price: "35.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/329143/iphone-16-pro-titan-trang.png" },
    { id: 21, name: "iPhone 16 Pro Max", price: "38.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg" },
    { id: 22, name: "iPhone 17", price: "25.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/342667/iphone-17-trang-thumb-3-600x600.jpg" },
    { id: 23, name: "iPhone 17 Plus", price: "28.000.000 đ", image: "https://tse1.mm.bing.net/th/id/OIP.e7qdm6GsdIPx6hGLUkYGyQHaHa?cb=12&w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 24, name: "iPhone 17 Pro", price: "32.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/342676/iphone-17-pro-cam-thumb-600x600.jpg" },
    { id: 25, name: "iPhone 17 Pro Max", price: "35.000.000 đ", image: "https://cdn.tgdd.vn/Products/Images/42/342679/iphone-17-pro-max-xanh-duong-thumb-600x600.jpg" }
];
localStorage.setItem('allProducts', JSON.stringify(allShopProducts));
const searchForm = document.querySelector('nav .d-flex');
const searchInput = document.querySelector('nav input[type="search"]');
const productListContainer = document.getElementById('product-list');
function renderProducts(productsToRender) {
    productListContainer.innerHTML = ''; 
    if (!productsToRender || productsToRender.length === 0) {
        productListContainer.innerHTML = `<p class="col-12 text-center text-muted">Không tìm thấy sản phẩm nào.</p>`;
        return;
    }
    productsToRender.forEach(product => {
        const productHTML = `
            <div class="col-md-4 mb-4">
                <div class="card hh-product-card h-100">
                    <a href="sanpham.html?id=${product.id}">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: contain; padding: 10px;">
                    </a>
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text text-danger fw-bold mt-auto">${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        productListContainer.innerHTML += productHTML;
    });
}
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredProducts = allShopProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
}
searchInput.addEventListener('input', performSearch);
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch();
});
if (productListContainer) {
     renderProducts(allShopProducts);
} else {
    console.error("Không tìm thấy phần tử #product-list");
}