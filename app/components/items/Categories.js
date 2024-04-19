import { useEffect, useState } from 'react';

function Categories() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://qrit.b-wise.ma/qrit-menu/catg.php?id=1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchData().then(r => console.log('Data fetched!'));
    }, []); // Empty dependency array means this effect runs once on mount

    return (

    <div>
        <h1>{data.name}</h1>
    </div>
    );
}

export default Categories;
