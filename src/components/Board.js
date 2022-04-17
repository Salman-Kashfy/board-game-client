const Board = ({cells}) => {
    return (
        <>
            {cells.map((rowCells,i) => {
                return (
                    <div key={`col-${i}`} className={'colCell'}>
                        {rowCells.map((columnCell,j) => {
                            return (
                                <div key={`row-${i}${j}`} className={`rowCell dynamic${columnCell}`}></div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}
export default Board