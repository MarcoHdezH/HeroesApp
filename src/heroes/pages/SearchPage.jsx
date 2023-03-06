import { useLocation, useNavigate } from 'react-router-dom';
import {getHeroesByName} from '../helpers';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import {HeroCard} from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const {searchText,onInputChange} = useForm({
    searchText:''
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();

    // if(searchText.trim().lenght<=1) return;

    navigate(`?q=${searchText}`);


  }
  return (
    <>
      <h1>Página de Busqueda</h1>
      <hr />

      <div className='row'>
        <div className='col-md-5'>
          <h4>Buscando...</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text" placeholder='Buscar un Heroe' className='form-control' name='searchText' autoComplete='off' value={searchText} onChange={onInputChange}/>
            <button className='btn btn-outline-dark mt-3 pt-1'>Buscar</button>
          </form>
        </div>

        <div className='col-md-7'>
          <h4>Resultados</h4>
          <hr />
          {
            (q==='')
            ? <div className='alert alert-primary'>Buscar un Heroe</div>
            : (heroes.length===0) && <div className='alert alert-danger'>Sin resultados para <b>{q}</b></div>
          }

          {
            heroes.map( hero =>(
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>

      </div>

    </>
  )
}