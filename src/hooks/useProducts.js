import { useEffect, useState } from "react"

const usePorducts = () => {
    const [porducts, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [porducts,setProducts]
}

export default usePorducts;