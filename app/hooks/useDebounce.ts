import React, { useState, useEffect } from 'react';

/**
 * I made a debounce custom hook
 */
export default function useDebounce (func: Function) {
    const [debounce, setDebounce] = useState('');
    const [timer, setTimer] = useState<ReturnType <typeof setTimeout> | null>(null);
    
    /**
     * Destroy timeout using timeout id
     */
    function clearLocalTimeout() {
        if(timer !== null){
            clearTimeout(timer);
        }
    }

    useEffect(() => {
        clearLocalTimeout();

        //Assigning a timeout function
        setTimer(setTimeout(() => func(), 500));
    }, [debounce]);

    useEffect(() => {
        //Destroy timeout when hook is unmounted
         return () => clearLocalTimeout();
    }, []);

    return (keyword: string) => {
        setDebounce(keyword)
    }
}