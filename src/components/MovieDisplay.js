

export default function MovieDisplay({movie}) {

    const loaded = () => {
    return (
        <div className="mt-4">
        <h1 className="text-light mb-4">{movie.Title}</h1>
        <h2 className="text-info mb-4">{movie.Genre}</h2>
        <img className="mb-4 border border-light border-3" src={movie.Poster} alt={movie.Title} />
        <h2 className="text-primary mb-4">Year released: {movie.Year}</h2> 
        <div className="border border-light w-50 mx-auto bg-secondary">    
        <h3 className="text-light mb-4 mt-2">Plot:</h3>
        <h5 className="text-light mb-4">{movie.Plot}</h5>     
            </div> 
        </div>

    )
    }

    //function to return loading JSX
    const loading = () => {
        return <h1>No Movie to Display</h1>
    };

    //Ternary operater to determine which function to return
    return movie ? loaded() : loading();

}