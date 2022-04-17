import {useEffect, useState} from "react";
import {GetScores} from "../services/scores.service";

const Leadership = () => {

    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])
    useEffect(() => {
        getScore()
    },[])

    const getScore = async () => {
        await GetScores().then((result) => {
            setData(result)
            setLoading(false)
            console.log(result)
        })
    }

    return (
        <div className={'container'}>
            { loading ?
                <>
                    <h4>Loading...Please wait</h4>
                </>
                :
                <>
                    { data.length || data.count ?
                        <>
                            <h5>Total count: {data.count}</h5>
                            <table className={'table'}>
                                <thead>
                                <tr>
                                    <th>Score</th>
                                    <th>Time takes (sec)</th>
                                    <th>Recorded on</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.scores.map((score,i) => {
                                    return (
                                        <tr key={`row-${i}`}>
                                            <td>{score.score}</td>
                                            <td>{score.timeTaken}</td>
                                            <td>{score.createdAt}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                        </>
                        :
                        <>
                            <h4>No record found.</h4>
                        </>
                    }
                </>
            }
        </div>
    )
}
export default Leadership