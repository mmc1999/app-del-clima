import React, { useEffect, useState } from 'react'

const initialValues = {
    ciudad: ""
}

const useGetDate = () => {
    const [state, setState] = useState(initialValues);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState(`https://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=ccd9c754eecdd2f591303fed4ef3051b`)

    const getData = async () => {
        try {
            setLoading(true)
            const data1 = await fetch(url)
            const res1 = await data1.json();
            if(res1.length > 0) {
                const data2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${res1[0].lat}&lon=${res1[0].lon}&exclude=hourly,minutely&appid=ccd9c754eecdd2f591303fed4ef3051b&units=metric`)
                const res2 = await data2.json();
                setLoading(false)
                setData(res2)
            }
        } catch (error) {
            console.log(error)   
        }
    }

    useEffect(() => { 
        getData()
    },[url])
    
    const handleChange = (e) => {
        setState({
            ...state,
           [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //para aregarle espacios a la variable de la url
        let ciudad = new URLSearchParams(state.ciudad).toString();
        setUrl(`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=1&appid=ccd9c754eecdd2f591303fed4ef3051b`)
    }
    
  return {
    handleChange,
    handleSubmit,
    state,
    data,
    loading
  }
}

export default useGetDate