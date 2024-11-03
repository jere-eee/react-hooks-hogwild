export default function NewHogForm({ onName, onImage, onSpecialty, onWeight, onGreased, onHma, onFormSub }) {
    return (
        <form onSubmit={onFormSub}>
            <h2>Add a hog</h2>
            <label>
                Name
                <input type="text" name="text" onChange={onName}/>
            </label>
            <label>
                Image url
                <input type="text" name="img-url" onChange={onImage}/>
            </label>
            <label>
                Specialty
                <input type="text" name="specialty" onChange={onSpecialty}/>
            </label>
            <label>
                Weight (lbs)
                <input type="number" name="weight" onChange={onWeight}/>
            </label>
            <label>
                Greased?
                <input type="checkbox" name="greased" onChange={onGreased}/>
            </label>
            <label>
                Highest medal achieved?
                <input type="text" name="medal" onChange={onHma}/>
            </label>
            <input type="submit" value="Add hog" />
        </form>
    )
}