import {useState, useEffect, useContext} from 'react'

import './index.css'
import {useParams} from 'react-router-dom'
import UserContextProvider from '../../context/UserContextProvider'
import Overview from '../Overview'

const apiKey = '777bca361cdbe742d18ee00780f6113b'

const CastDetails = () => {
  const [details, setDetails] = useState([])
  const [dataList, setDataList] = useState([])
  const {data} = useContext(UserContextProvider)
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      const options = {
        method: 'GET',
      }

      const response = await fetch(apiUrl, options)
      const dataJson = await response.json()
      console.log(data.id)
      const fetchedData = dataJson.cast.map(each => ({
        profile: each.profile_path,
        character: each.character,
        name: each.name,
      }))
      setDataList(fetchedData)
    }

    getData()
    const result = data.filter(each => each.id == id)
    setDetails(result)
  }, [])

  return (
    <div className="cast-container">
      <div className="overview-card">
        <ul>
          {details.map(each => (
            <Overview key={each.id} itemDetails={each} />
          ))}
        </ul>
      </div>

      <div className="crew">
        <h1 className="text"> Cast </h1>
        <ul>
          {dataList.map(eachItem => (
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500${eachItem.profile}`}
                alt="poster"
                className="profile-image"
              />
              <h1 className="name"> {eachItem.name} </h1>
              <p className="character"> character: {eachItem.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CastDetails
