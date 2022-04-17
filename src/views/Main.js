import {useState,useEffect,createRef} from 'react'
import Board from '../components/Board'
import constants from '../constants'
import LostSound from '../assets/audio/lost.wav'
import WonSound from '../assets/audio/won.wav'
const Main = () => {

    // Initialize data as per example in the PDF
    const [cells,setCells] = useState([])
    const size = 10
    const enemies = Math.floor(size*0.667)
    const items = enemies
    const [rowPos,setRowPos] = useState(constants.rowPos)
    const [colPos,setColPos] = useState(constants.colPos)
    const [gameOver,setGameOver] = useState(false)
    const [score,setScore] = useState(0)
    const [message,setMessage] = useState('')

    // Sound references
    const lostRef = createRef()
    const wonRef = createRef()

    useEffect(() => {
        startGame()
    },[])

    useEffect(() => {
        document.addEventListener("keydown", downHandler);
        return () => {
            document.removeEventListener("keydown", downHandler);
        };
    },[cells,colPos,rowPos])

    /*
    * Create n x n cells
    * */
    const createCells = () => {
        return Array(size).fill(0).map(()=>Array(size).fill(0))
    }

    /*
    * Check where the knight has landed
    * */
    const checkCell = (value) => {
        switch (value) {
            case 'danger':
                /*
                * Game lost and stop
                * */
                setGameOver(true)
                setMessage('Game over')
                lostRef.current.play();
                break
            case 'item':
                /*
                * Game won and stop
                * */
                setScore(score + 1)
                if( (score + 1) === items){
                    setGameOver(true)
                    setMessage('Congratulations! You won')
                    wonRef.current.play();
                }
                break
            default:
                break
        }
    }

    const downHandler = (e) => {
        if([37,38,39,40].indexOf(e.keyCode) === -1) return
        cells[rowPos][colPos] = 0
        switch (e.keyCode) {
            case 37: // left
                if( (colPos-1) >= 0){
                    let pos = colPos - 1
                    checkCell(cells[rowPos][pos])
                    cells[rowPos][pos] = 1
                    setColPos(pos)
                }
                break
            case 38: // up
                if( (rowPos-1) >= 0){
                    let pos = rowPos - 1
                    checkCell(cells[pos][colPos])
                    cells[pos][colPos] = 1
                    setRowPos(pos)
                }
                break
            case 39: // right
                if( (colPos+1) < size){
                    let pos = colPos + 1
                    checkCell(cells[rowPos][pos])
                    cells[rowPos][pos] = 1
                    setColPos(pos)
                }
                break
            case 40: // down
                if( (rowPos+1) < size){
                    let pos = rowPos + 1
                    checkCell(cells[pos][colPos])
                    cells[pos][colPos] = 1
                    setRowPos(pos)
                }
                break
            default:
                break
        }
        setCells(cells)
    }

    const startGame = () => {
        let square = createCells();
        /*
        * Set knight initial position
        * */
        setRowPos(constants.rowPos)
        setColPos(constants.colPos)
        square[constants.rowPos][constants.colPos] = 1

        let row,column;
        for (let i = 0; i < enemies; i++) {
            // Spawn Enemies
            do {
                row = Math.floor(Math.random() * size);
                column = Math.floor(Math.random() * size);
            }while (square[row][column]!==0)
            square[row][column] = 'danger'

            // Spawn Items
            do {
                row = Math.floor(Math.random() * size);
                column = Math.floor(Math.random() * size);
            }while (square[row][column]!==0 && square[row][column]!=='danger')
            square[row][column] = 'item'
        }
        setCells(square)
    }

    const reStartGame = () => {
        setGameOver(false)
        setScore(0)
        lostRef.current.pause();
        lostRef.current.currentTime = 0;
        wonRef.current.pause();
        wonRef.current.currentTime = 0;
        startGame()
    }

    return (
        <>
            <div className={'text-center my-3'}>
                <button onClick={reStartGame} className={'btn'}>Restart</button>
                <h4>Score: {score}/{items}</h4>
                { gameOver ? <><h3 className={'my-3'}>{message}</h3></> : '' }
            </div>
            <Board cells={ gameOver ? createCells() : cells}/>
            <audio src={LostSound} ref={lostRef} preload={'auto'}/>
            <audio src={WonSound} ref={wonRef} preload={'auto'}/>
        </>
    )
}
export default Main