import { useState } from "react";

const useFetchData = async ({
    url,
    method,
    data,
}: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [code, setCode] = useState<number>();
    const [result, setResult] = useState<any>();
    const [error, setError] = useState<any>();

    if (!loading) {
        setLoading(true);

    }

    const headers = {
        "Content-type": "application/json"
        // >>>>>>>>>>>>>> ADD TOKEN HEADER HERE <<<<<<<<<<<
    };

    const response = await fetch(url, {
        headers,
        body: JSON.stringify(data === undefined ? {} : data),
        method: method == undefined || method == null ? 'GET' : method
    });

    setCode(response.status);

    try {
        const text: any = response.text();
        const data = JSON.parse(text);
        setResult(data);
    } catch (err) {
        setError(error)
        setResult({});
    }
    setLoading(false);

    return [loading, code, result, error];
}

interface Props {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    data?: any;
}

export default useFetchData;