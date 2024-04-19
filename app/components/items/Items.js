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
        <div
            className="w-[152px] relative rounded-lg bg-white shadow-[0px_52px_14px_rgba(0,_0,_0,_0),_0px_33px_13px_rgba(0,_0,_0,_0.01),_0px_19px_11px_rgba(0,_0,_0,_0.02),_0px_8px_8px_rgba(0,_0,_0,_0.03),_0px_2px_5px_rgba(0,_0,_0,_0.04),_0px_0px_0px_rgba(0,_0,_0,_0.04)] h-[220px] overflow-hidden shrink-0 text-xl">
            <Image
                className="absolute top-[0.2px] left-[0.3px] w-[151.7px] h-[132px] object-cover"
                alt=""
                src="/img1.png"
                width={152}
                height={132}
            />
            {data && (
                <>
                    <div className="absolute top-[142.9px] left-[19.9px] font-semibold">
                        {data.name}
                    </div>
                    <div className="absolute top-[174.9px] left-[19.9px] text-lg font-medium text-gray-700">

                    </div>
                </>
            )}
        </div>
    );
};

export default Plats;