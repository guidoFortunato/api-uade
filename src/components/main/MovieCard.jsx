import { Link } from "react-router-dom";
import { getEnvVariables } from "../../helpers";


const { VITE_API_IMAGE } = getEnvVariables()


export const MovieCard = ({ title, image, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link to="/">
        <img
          className="rounded-t-lg"
          src={`${VITE_API_IMAGE}/${image}`}
          alt={title}
        />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-base md:text-xl font-bold tracking-tight text-gray-900">
            { title }
          </h5>
        </Link>
        {/* <p className="mb-3 font-normal text-gray-700">
          { description }
        </p> */}
        <Link
          to="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
