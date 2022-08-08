import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect(() =>{
        const getToken = async () =>{
            const email = user?.user?.email;
            if(email){
                const {data} = await axios.post('https://rocky-tundra-84023.herokuapp.com/login',{email});
                console.log(data)
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    },[user]);
    return [token];
}

export default useToken;