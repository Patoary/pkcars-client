import { useEffect, useState } from "react"

const usePorducts = () => {
    const [porducts, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://rocky-tundra-84023.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [porducts,setProducts]
}

export default usePorducts;