import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    // FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data);
    })  

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                </div>
            </div>

        </> /* Poderiamos utilizar uma div, pois a função só pode exportar um componente. Nesse caso,
            utilizamos apenas o fragmente (<> </>) para retornar mais de um componente. Caso utilizassemos a DIV, 
            iria aparecer mais uma div dentro da página, o que não ocorre com o fragmente, pois não altera em nada o visual da página*/
    );
}

export default Listing;