import ChuckImage from '../assets/chuck_norris.jpg';

const ChuckCard: React.FC<{message: string}> = (props) =>

        <>
            <h2>{ props.message }</h2>

            <img src={ ChuckImage } alt='A handsome man' /> 
        </>


export default ChuckCard;