import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { getEnvVariables } from "../../helpers";

const { VITE_API_IMAGE } = getEnvVariables()


export const MovieCard = ({ title, image, description }) => {
  const [like, setLike] = useState(false);

  const newDescription = description.length > 100 ? description.slice(0, 100) + "..." : description



  return (
    <div className="max-w-sm rounded-lg relative hover:cursor-pointer">
      <Link to="/">
        <img
          className="rounded-lg"
          src={`${VITE_API_IMAGE}/${image}`}
          alt={title}
        />
      </Link>
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-lg transition-all">
       <span className="whitespace-normal text-xs md:text-sm font-semibold flex justify-center items-center h-full text-center">{title}</span>
       <span>
        {
          like ? <FaHeart onClick={()=> setLike( prev => !prev )} className="absolute text-red-500 top-3 left-4 " /> : <FaRegHeart onClick={()=> setLike( prev => !prev )} className="absolute top-3 left-4 text-gray-300" /> 
        }
       </span>
      </div>
    </div>
  );
};
