import {useState, useEffect, useContext} from 'react'

import './index.css'
import PopularMovies from '../PopularMovies'
import Pagination from '../Pagination'
import UserContextProvider from '../../context/UserContextProvider'

const apiKey = '777bca361cdbe742d18ee00780f6113b'

const Home = () => {
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
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

      const options = {
        method: 'GET',
      }

      const response = await fetch(url, options)
      const dataJson = await response.json()
      console.log(currentItems)
      console.log(data.results)
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

    getData()
  }, [])

  return (
    <div className="container">
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

export default Home
