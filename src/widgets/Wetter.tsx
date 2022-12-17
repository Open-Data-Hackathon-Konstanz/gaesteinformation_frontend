import React from 'react';

import Button from 'react-bootstrap/Button';

const getData = () => {
    fetch("/data/weather.json").then(
        (r) => {console.log(r)}
    );
    return "";
}
const WetterWidget: React.FC = () => (
    <div className="p-1">
        {getData()}
    </div>
);

export default WetterWidget;
