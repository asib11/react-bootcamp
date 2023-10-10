import{ useEffect, useState } from 'react';
import DataShow from './DataShow';

const DataLoad = () => {
    const [jsonDatas, setJsonDatas] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setJsonDatas(data))
    } ,[])

    return (
        <div>
            <h1>Welcome to local file json data Load</h1>
            {
                jsonDatas.map(jsonData => <DataShow key={jsonData.id} jData ={jsonData}></DataShow>)
                // jsonDatas.map(jsonData => console.log(jsonData))
            }
        </div>
    );
};

export default DataLoad;