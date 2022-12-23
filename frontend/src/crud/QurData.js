import axios from "axios";
import { useQuery } from "react-query";

function QurData() {
    const { data, isLoading, isError, error } = useQuery('app', () => {
        return axios.get('http://localhost:3500/app/data')
    })
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <div>

            <button><a href="/viewdata">viewdata</a></button>
            {data?.data.map((hero) => {
                return (
                    <div key={hero.firstname}>{hero.firstname}</div>
                )
            }
            )}
        </div>
    )
}
export default QurData;