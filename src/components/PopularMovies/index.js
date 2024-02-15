import {Link} from 'react-router-dom'

import './index.css'

const PopularMovies = props => {
  const {items} = props
  const {id, title, posterPath} = items

  return (
    <Link to={`/details/${id}`} className="link-item">
      <li className="movies-details">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt="poster"
          />
        </div>
        <div>
          <h1> {title} </h1>
        </div>
      </li>
    </Link>
  )
}

export default PopularMovies
