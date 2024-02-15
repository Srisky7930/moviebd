import {useState, useEffect, useContext} from 'react'

import PopularMovies from '../PopularMovies'

import './index.css'
import UserContextProvider from '../../context/UserContextProvider'
import Pagination from '../Pagination'

const apiKey = '777bca361cdbe742d18ee00780f6113b'

const Upcoming = () => {
  const {data, setData} = useContext(UserContextProvider)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentItems = data.slice(startIndex, endIndex)
  console.log(currentItems)

  const goToNextPage = () => setCurrentPage(prev => prev + 1)
  const goToPrevPage = () => setCurrentPage(prev => prev - 1)

  useEffect(() => {
    const getUpcoming = async () => {
      const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
      const options = {
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      const dataJson = await response.json()
      const fetchedData = dataJson.results.map(each => ({
        id: each.id,
        title: each.title,
        posterPath: each.poster_path,
        overview: each.overview,
        backdropPath: each.backdrop_path,
        releaseDate: each.release_date,
        voteAvg: each.vote_average,
      }))
      setData(fetchedData)
    }

    getUpcoming()
  }, [])

  return (
    <div className="container">
      <h1> Upcoming </h1>
      <ul>
        {currentItems.map(each => (
          <PopularMovies key={each.id} items={each} />
        ))}
      </ul>
      <div className="buttons-card">
        <Pagination prevPage={goToPrevPage} nextPage={goToNextPage} />
      </div>
    </div>
  )
}

export default Upcoming
