'use client';
import { useState } from "react";

const useFetchData = () => {
    const [loading, setLoading] = useState<boolean>(false);


    const fetchData = async (
        url: string,
        method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
        body?: any
    ) => {

        let error: any;
        let result: any;
        let code: number;

        const headers = {
            "Content-type": "application/json"
            // >>>>>>>>>>>>>> ADD TOKEN HEADER HERE <<<<<<<<<<<
        };

        if (!loading) {
            setLoading(true);

        }

        try {
            const response = await (await fetch(url, {
                headers,
                body: body ? JSON.stringify(body || {}) : undefined,
                method: method == undefined || method == null ? 'GET' : method
            }));

            code = response.status;
            result = await response.json();
        } catch (err) {
            code = 500;
            error = { message: "Erro interno, contate o administrador!" };
            result = {};

            console.warn(err)
        }
        setLoading(false);

        return [loading, code, result, error];
    }

    return fetchData;
}

export default useFetchData;