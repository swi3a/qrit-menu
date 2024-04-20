import React, {useState, useEffect} from 'react';
import Image from "next/image";

const Plats = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://qrit.b-wise.ma/qrit-menu/plats.php')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <React.Fragment>
            {data && data.map((item, index) => (
                <div  key={index} className="w-[160px] relative rounded-lg bg-red-100 shadow-[0px_52px_14px_rgba(0,_0,_0,_0),_0px_33px_13px_rgba(0,_0,_0,_0.01),_0px_2px_5px_rgba(0,_0,_0,_0.04),_0px_0px_0px_rgba(0,_0,_0,_0.04)] h-[240px] overflow-hidden shrink-0 text-xl">
                    <Image
                        className="absolute top-[0.2px] left-[0.3px] w-[160.7px] h-[132px] object-cover"
                        alt=""
                        src="/img1.png"
                        width={160}
                        height={132}
                    />

                    <h3 className="absolute justify-center top-[150px] pl-5 pr-1  font-normal text-lg">
                        {item['name']}
                    </h3>
                    <div className="absolute top-[210px] left-[33px] text-lg font-medium text-gray-700">
                        {item['prix']} MAD
                    </div>

                </div>
            ))}
        </React.Fragment>
    )
};

export default Plats;