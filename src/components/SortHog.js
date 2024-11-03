function SortHog({sorts, sortCh}) {
    return (
        <>
        <div className="navWrapper">
            <span className="smallHeader">Sort by category:</span>
            <div></div>
            {sorts.map((sort, index) => {
                return <button key={index} onClick={sortCh}>{sort}</button>
            })}
        </div>
        </>
    )
}

export default SortHog