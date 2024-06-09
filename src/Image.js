import React from 'react';
import product from './product';

const Image = () =>{
    return <img src="{product.image}" alt="{product.name}" />
}

export default Image;

//when you create a new component, you need to import it and always import it in the App.js file