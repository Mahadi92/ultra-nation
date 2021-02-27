import React from 'react';

const Count = (props) => {
    const count = props.count;

    // let totalPopulation = 0;
    // for (let i = 0; i < count.length; i++) {
    //     const country = count[i];
    //     totalPopulation = totalPopulation + country.population;
    // }

    const totalPopulation = count.reduce((sum, count) => sum + count.population, 0)

    return (
        <div>
            <h3>Selected country: {count.length}</h3>
            <h4>Total population: {totalPopulation}</h4>
        </div>
    );
};

export default Count;