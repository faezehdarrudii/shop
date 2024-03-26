const productList = [
    {
        id: '1',
        name: 'ساعت',
        price: 99000,
        image: '/image/293.jpg'
    },
    {
        id: '2',
        name: 'ساعت هوشمند',
        price: 1800000,
        image: '/image/293.jpg'
    },
    {
        id: '3',
        name: 'گوشی',
        price: 20000000,
        image: '/image/images.jpg'
    },
    {
        id: '4',
        name: 'لپتاپ',
        price: 50000000,
        image: '/image/iphone-14-pro-max-purple-1.jpg'
    }
];

function getProductData(id) {
    let productData = productList.find((item) => item.id === id);
    return productData;
}

export { productList, getProductData };
