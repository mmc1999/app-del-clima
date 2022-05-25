import { useContext } from 'react';
import { SearchContext } from '../../context/searchClose';
import useGetDate from '../../hooks/useGetDate'
import moduleSearch from "./Search.module.css"

const Search = () => {
  let {
    handleChange,
    handleSubmit,
    state,
  } = useGetDate();
  let {
    setIsSearchOpen
  }=useContext(SearchContext)
  return (
    // HACER EL GIT PUSH AHORA NO TENGO WIFI
    
    //
    //
    <div className={`${moduleSearch.divPrincipal} ${setIsSearchOpen ? moduleSearch.divTrue : ""}`}>
      <p onClick={() => setIsSearchOpen(false)} className={moduleSearch.cancelar}>X</p>
      <form onSubmit={handleSubmit} className={moduleSearch.formulario}>
        <input
          type="text"
          name="ciudad"
          value={state.ciudad}
          onChange={handleChange}
          className={moduleSearch.input}
          placeholder="Search location"
        />
        <button>Buscar</button>
      </form>
    </div>
    
  )
}

export default Search