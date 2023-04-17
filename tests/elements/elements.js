const products = {
    productsLink : "navbar-products",
    productFilterText : '.filter-textbox',
    productFilterBtn : 'filter-button',
    resetFilterBtn : 'reset-filter-button',
    addProductBtn : 'add-a-product-button',
    idCell : 'id',
    nameCell : 'name',
    priceCell : 'price',
    dateStockedCell : 'dateStocked',
    productListTable : '.product-list-table'
}

const addProduct = {
    //getByTestId
    addProductsLink : "navbar-addproduct",
    productName : 'product-textbox',
    productPrice : 'price-textbox',
    dateStocked : 'date-stocked',
    submitForm : 'submit-form',
    cancelForm : 'cancel-button',
    //getByText
    nameError : 'Name must be at least 2 characters.',
    priceError : 'Price must not be empty and within 10 digits',
    dateError : 'Date must not be empty.',
    formError : 'Please fill in all fields',
    resolveError : 'Errors must be resolved before submitting'

}

const practice = {
    practiceLink : "navbar-practice"
}

const learn = {
    learnLink : "navbar-learn"
}

const login = {
    loginLink : "navbar-login"
}

module.exports = { products, learn, login, practice, addProduct };