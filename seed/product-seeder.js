var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/ozgetaways');

var products = [
    new Product({
        imagePath: 'https://a0.muscache.com/im/pictures/24067355/61956274_original.jpg?aki_policy=large',
        title: 'Vacation Rental 1',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 120
    }),
    new Product({
        imagePath: 'https://a0.muscache.com/im/pictures/f0883cfd-97de-4b6b-909e-4d421482d1de.jpg?aki_policy=large',
        title: 'Vacation Rental 2',
        description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 150
    }),
    new Product({
        imagePath: 'https://a0.muscache.com/im/pictures/3c25cd42-b90a-4edb-bb94-8e727e8df9eb.jpg?aki_policy=large',
        title: 'Vacation Rental 3',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 130
    }),
    new Product({
        imagePath: 'https://a0.muscache.com/im/pictures/15777676/45a208c1_original.jpg?aki_policy=large',
        title: 'Vacation Rental 4',
        description: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 110
    }),
    new Product({
        imagePath: 'https://d17w6g4z9zersu.cloudfront.net/listings/aMrW53YyT9A_29c029602a28f01f7a6cba77abb0539f.jpg',
        title: 'Vacation Rental 5',
        description: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 200
    })
];


var done = 0;
for(var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}