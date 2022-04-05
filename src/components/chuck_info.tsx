interface IChuckInfo {
    numOfWhalesSaved: number,
    numOfRoundHouseKicks: number
}

const ChuckInfo: React.FC<IChuckInfo> = (props) => 
        <>
            <p>Number of Whales Saved: {props.numOfWhalesSaved}</p>

            <p>Number of Round House Kicks (in the last day): {props.numOfRoundHouseKicks}</p>
        </>
    


export default ChuckInfo;