import { useState } from "react"

function Hog({ name, image, specialty, weight, greased, hma, onHide, onUnhide }) {
    const [details, setDetails] = useState(false)

    function handleDetails() {
        setDetails((prev) => !prev)
    }

    
    return (
        <div className="pigTile minPigTile" onClick={handleDetails}>
            <div className="minBackgroundSneak" style={{ backgroundImage: `url(${image})` }}>
                <h3 className="smallHeader">{name}</h3>
                {details ? (
                    <>
                        <h3 className="subtleText">Specialty: {specialty}</h3>
                        <p>Weight: {weight} lbs</p>
                        <p>{greased ? "Greased" : "Not Greased"}</p>
                        <p className="achievementText">Highest medal: {hma}</p>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            onUnhide ? onUnhide(name) : onHide(name)}}>{onUnhide ? "Unhide" : "Hide"}</button>
                    </>
                ) : null}
            </div>
        </div>

    )
}

export default Hog