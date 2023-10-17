import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError;
    return (
        <div className="p-40 text-center justify-center items-center">
        <h1 className="text-3xl font-extrabold pb-4">Oops!!!</h1>
        <p className="text-xl font-extrabold pb-4">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
};

export default Error;