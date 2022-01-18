import React, { useState, useEffect, createContext } from 'react';
// API
import { getCoin } from '../services/api';


export const CoinContext = createContext();

const CoinContextProvider = ({children}) => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data);
        }
        fetchAPI();
    },[]);

    return (
        <CoinContext.Provider value={coins}>
            {children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;