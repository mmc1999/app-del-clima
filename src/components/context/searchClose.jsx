import React, { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

const SearchContext = createContext();
const initialValues = {
  ciudad: ""
}

const SearchProvider = ({ children }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [state, setState] = useState(initialValues);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState(`https://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=ccd9c754eecdd2f591303fed4ef3051b`)
    const [ubicacion, setUbicacion] = useState("")

    useEffect(() => { 
        const getData = async () => {
            try {
                setLoading(true)
                const data1 = await fetch(url)
                const res1 = await data1.json();
                const data2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${res1[0].lat}&lon=${res1[0].lon}&exclude=hourly,minutely&appid=ccd9c754eecdd2f591303fed4ef3051b&units=metric`)
                const res2 = await data2.json();
                console.log(res1)
                setUbicacion(`${res1[0].name}, ${res1[0].state}`)
                await Promise.all([res2])
                    .then(value => {
                        setData(value[0])
                        setLoading(false)
                    })
                    .catch(error => {
                        console.log("error en el promise")
                        setLoading(false)
                        Swal.fire({
                            title: 'Error!',
                            text: 'Hay un error en la API.',
                            icon: 'error',
                            confirmButtonText: 'Cool'
                          })
                    })
            } catch (error) {
                console.log(error + " error en el catch")  
                setLoading(false)
                Swal.fire({
                    title: 'Error!',
                    text: 'La ubicacion solicitada. No ha sido encontrada',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }
        }
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
        setUrl(`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=1&appid=ccd9c754eecdd2f591303fed4ef3051b`);
        setIsSearchOpen(false)
    }
    let datas = {
        isSearchOpen,
        setIsSearchOpen,
        handleChange,
        handleSubmit,
        state,
        data,
        loading,
        ubicacion
    }
    return (
      <SearchContext.Provider value={datas}>
        {children}
      </SearchContext.Provider>
    );
  };

  export { SearchContext, SearchProvider };