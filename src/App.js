import './App.css';
import MovieBus from "./content/main/MovieBus";
import Visual from './content/main/Visual';

function App() {

    return (
        <>
            <section className="visual">
                <Visual/>
            </section>
            <section className="movie-bus">
                <MovieBus/>
            </section>
        </>
    );
}

export default App;
