const productNameInput = document.getElementById('product-name-input');
const addBtn = document.getElementById('add-btn');
const productList = document.getElementById('product-list');
const productCount = document.getElementById('product-count');
const editModal = document.getElementById('edit-modal');
const editProductNameInput = document.getElementById('edit-product-name-input');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
localStorage.removeItem('products');
let products = JSON.parse(localStorage.getItem('products')) || [
    { id: 1, name: "Sony Xperia" },
    { id: 2, name: "Samsung Galaxy" },
    { id: 3, name: "Xiaomi Redmi Note 4" },
    { id: 4, name: "Apple Iphone 6S" },
    { id: 5, name: "Xiaomi Mi 5S Plus" },
    { id: 6, name: "Apple Iphone 8 Plus" },
    { id: 7, name: "Apple Iphone XS" },
    { id: 8, name: "Oppo A71" }
];
let currentEditId = null;
const saveProducts = () => {
    localStorage.setItem('products', JSON.stringify(products));
};
const renderProducts = () => {
    productList.innerHTML = '';
    if (products.length === 0) {
        productList.innerHTML = `<tr><td colspan="3" style="text-align:center;">Chưa có sản phẩm nào.</td></tr>`;
    } else {
        products.forEach((product, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="openEditModal(${product.id})"><i class="fas fa-edit"></i> Sửa</button>
                    <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})"><i class="fas fa-trash"></i> Xóa</button>
                </td>
            `;
            productList.appendChild(tr);
        });
    }
    productCount.textContent = `${products.length} sản phẩm`;
    saveProducts();
};
const addProduct = () => {
    const productName = productNameInput.value.trim();
    if (!productName) {
        alert("Tên sản phẩm không được để trống!");
        return;
    }
    const newProduct = {
        id: Date.now(),
        name: productName
    };
    products.push(newProduct);
    renderProducts();
    productNameInput.value = '';
    productNameInput.focus();
};
const deleteProduct = (id) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        products = products.filter(p => p.id !== id);
        renderProducts();
    }
};
const openEditModal = (id) => {
    currentEditId = id;
    const productToEdit = products.find(p => p.id === id);
    editProductNameInput.value = productToEdit.name;
    editModal.classList.remove('hidden');
};
const closeEditModal = () => {
    editModal.classList.add('hidden');
};
const saveChanges = () => {
    const newName = editProductNameInput.value.trim();
    if (!newName) {
        alert("Tên sản phẩm không được để trống!");
        return;
    }
    const productToEdit = products.find(p => p.id === currentEditId);
    productToEdit.name = newName;
    renderProducts();
    closeEditModal();
};
addBtn.addEventListener('click', addProduct);
saveBtn.addEventListener('click', saveChanges);
cancelBtn.addEventListener('click', closeEditModal);
productNameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addProduct();
    }
});
renderProducts();