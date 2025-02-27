import { useEffect, useState } from "react"

const useAPI = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            setData(result);
        })
    }, [])

    return data;
}

export default useAPI