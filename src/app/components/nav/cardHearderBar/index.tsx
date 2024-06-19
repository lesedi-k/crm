import { CardHeaderComponent } from "./type";

const CardHeaderBar: CardHeaderComponent = ({name}) => {

    return (
        <div className="bg-red-700 w-full h-1/8">
            <h3>{name}</h3>
        </div>
    );
}

export default CardHeaderBar;