import { Navigate, useParams } from 'react-router-dom'
import { getHeroByID } from '../helpers';

export const HeroPage = () => {

  const { HeroID } = useParams();

  const hero = getHeroByID( HeroID );

  if( !hero ){
    return <Navigate to="/"/>
  }

  return (
    <>
      <h1>{hero.superhero}</h1>

    </>
  )
}