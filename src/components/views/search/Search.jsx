import { useContext } from 'react';
import { SearchContext } from '../../context/searchClose';
import moduleSearch from "./Search.module.css"

const Search = () => {
  let {
    setIsSearchOpen,
    isSearchOpen,
    handleChange,
    handleSubmit,
    state,
  }=useContext(SearchContext)
  return (
    <div className={`${moduleSearch.divPrincipal} ${isSearchOpen ? moduleSearch.divTrue : moduleSearch.divFalse}`}>
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
        <button className={moduleSearch.boton}>Search</button>
      </form>
    </div>
    
  )
}

export default Search