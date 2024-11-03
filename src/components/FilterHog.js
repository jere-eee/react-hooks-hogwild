function FilterHog({categories, greaseCh}) {
    return (
        <>
        <div className="filterWrapper">
            <span className="smallHeader">Filter by category:</span>
            {categories.map((cat, index) => {
                return <button key={index} onClick={greaseCh}>{cat}</button>
            })}
        </div>
        </>
    )
}

export default FilterHog