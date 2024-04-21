import React, {useState, useEffect} from 'react';

// eslint-disable-next-line react-hooks/rules-of-hooks

const Categories = () => {
    const [data, fetchData] = useState(null);
    useEffect(() => {
        fetch('https://qrit.b-wise.ma/qrit-menu/plats.php')
            .then(response => response.json())
            .then(data => fetchData(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <React.Fragment>
            {data && data.map((item, index) => (
                (item['id'] === '1') &&
                <div key={index}
                     className="absolute top-[255px] left-[47px] flex flex-row items-center justify-start text-7xl text-darkslategray font-poppins">
                    <b className="relative">{item['name']}</b>
                </div>
            ))}
            {data && data.map((item, index) => (
                (item['id'] === '2') &&
                <div key={index}
                    className="absolute top-[545px] left-[47px] flex flex-row items-center justify-start text-7xl text-darkslategray font-poppins">
                    <b className="relative">{item['name']}</b>
                </div>
            ))}
            {data && data.map((item, index) => (
                (item['id'] === '3') &&
                <div key={index}
                    className="absolute top-[835px] left-[47px] flex flex-row items-center justify-start text-7xl text-darkslategray font-poppins">
                    <b className="relative">{item['name']}</b>
                </div>
            ))}
        </React.Fragment>
    )
}
export default Categories;