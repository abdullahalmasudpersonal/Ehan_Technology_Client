import { useEffect, useState } from "react"

const UseProductDetails = productsId =>{
    const [products, setProducts] = useState({});

    useEffect( () =>{
        const url = `https://damp-citadel-08566.herokuapp.com/products/${productsId}`;

        fetch(url)
        .then(res =>res.json())
        .then(data => setProducts(data));
    }, [productsId]);
    return [products];
}

export default UseProductDetails;