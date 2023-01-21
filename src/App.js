import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/";

function App() {

    const [data, setData] = useState()

    const getData = () => {
        axios.get(url).then((response) => {
            setData(response.data)
        });
    }

    useEffect(getData, [])

    return (
        <div className="App">
            {data.map(item => {
                console.log(item);
            })}
        </div>
    );
}

export default App;
