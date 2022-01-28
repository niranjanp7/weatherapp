import Api from './api.js';

function Result(){
    //const data = new Api();
    //console.log(data);
    // if (Object.keys(data).length === 0)
        return (
                <Api />
        );
    // else
    //     return (
    //         <h3>{data.wind.speed}</h3>
    //     );
}


export default function Report(i) {
    return (
        <Result />
    );
}