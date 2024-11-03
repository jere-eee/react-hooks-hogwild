import Hog from "./Hog"

function Hogs({ hogs, onHide, title, onUnhide }) {
    
    
    
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px"
        }}>
        {title && <h2>{title}</h2>}
            {hogs.map((hog, index) => {
                return <Hog 
                key={index}
                name={hog.name} 
                image={hog.image} 
                specialty={hog.specialty}
                weight={hog.weight}
                greased={hog.greased}
                hma={hog["highest medal achieved"]}
                onHide={onHide}
                onUnhide={onUnhide}
                />
            })}
        </div>
    )
}

export default Hogs