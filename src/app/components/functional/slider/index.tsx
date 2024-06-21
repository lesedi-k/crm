import { SliderComponent } from "./type";
  
  const Slider: SliderComponent = ({options, selected, setSelected}) => {
    // Component logic here
    return (
        <div className="
                    flex flex-row justify-between items-center
                    h-8 w-2/5
                    card rounded-full
                    p-4
                    place-self-end
                    "
        >
            {options.map((o, index)=>(
                <>
                    <div className={` hover:cursor-pointer
                                    ${o !== selected ? `` : `card font-bold px-4 py-1 rounded-full`}`
                                }
                        onClick={() => setSelected(o)}
                    >
                        <p key={o+index}>{o}</p>
                    </div>
                </>
            ))}
        </div>
        
    )
  };

export default Slider;