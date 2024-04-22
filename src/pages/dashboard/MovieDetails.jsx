import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../../helpers/getData"

export const MovieDetails = () => {
  const { id } = useParams()

  useEffect(() => {
    
    const getMovieDetails = async () => {
      const data = await getData(`https://api.themoviedb.org/3/movie/${id}`)
      // console.log({data})
    }
    getMovieDetails()
    
  }, []);


  return (
    <div className="text-white">MovieDetails</div>
  )
}