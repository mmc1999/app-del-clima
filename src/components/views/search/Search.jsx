import useGetDate from '../../hooks/useGetDate'
import ResultadoBusqueda from '../resultadoBusqueda/ResultadoBusqueda'

const Search = () => {
  let {
    handleChange,
    handleSubmit,
    state,
    loading,
    data,
  } = useGetDate()
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="ciudad"
          value={state.ciudad}
          onChange={handleChange}
        />
        <button>Buscar</button>
      </form>
      <ResultadoBusqueda data={data} state={state} /> 
    </>
    
  )
}

export default Search