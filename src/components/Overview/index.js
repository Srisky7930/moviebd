import './index.css'

const Overview = props => {
  const {itemDetails} = props
  const {
    title,
    backdropPath,
    overview,
    voteAvg,
    releaseDate,
    posterPath,
  } = itemDetails

  return (
    <li>
      <div className="card">
        <div>
          <div className="title-card">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                alt="poster"
                className="poster-image"
              />
            </div>
            <div>
              <h1 className="title"> {title} </h1>
              <p className="text"> Rating: {voteAvg} </p>
              <p className="text"> Release Date: {releaseDate} </p>
            </div>
          </div>
          <div>
            <h1 className="title"> Overview </h1>
            <p className="text"> {overview} </p>
          </div>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
            alt="backbropPoster"
            className="backdrop-image"
          />
        </div>
      </div>
    </li>
  )
}

export default Overview
