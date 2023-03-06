import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroByID } from '../helpers';

export const HeroPage = () => {

  const { HeroID } = useParams();
  const navigate = useNavigate();
  const hero = useMemo( ()=> getHeroByID(HeroID), [HeroID] );


  const onNavigateBack = () => {
    hero.publisher==='DC Comics'?navigate('/DC'):navigate('/Marvel');
  }

  if (!hero) {
    return <Navigate to="/" />
  }

  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft'>
      <div className='col-4'>
        <img className='img-thumbnail' src={`/heroes/${HeroID}.jpg`} alt={hero.superhero} />
      </div>

      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter Ego: </b> {hero.alter_ego} </li>
          <li className='list-group-item'> <b>Publisher: </b> {hero.publisher} </li>
          <li className='list-group-item'> <b>First Appearance: </b> {hero.first_appearance} </li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button onClick={onNavigateBack} className='btn btn-outline-primary'>Regresar</button>
      </div>
    </div>
  )
}