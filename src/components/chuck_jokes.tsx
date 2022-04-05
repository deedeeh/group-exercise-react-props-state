// An alternative way of declaring a component is to write it as a function which
// returns a JSX.Element 
import Joke from '../joke';

function ChuckJokes(props: Joke) : JSX.Element {

    return (
        <>
            <p>{props.joke}</p>
        </>
    )
}

export default ChuckJokes;