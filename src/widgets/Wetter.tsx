import React from 'react';

import wetter from "../wetter.json"
import {Table} from "react-bootstrap";

const WetterWidget: React.FC = () => (
    <Table>
            <thead>
            <tr>
                    <th>Mittag</th>
                    <th>Nachmittag</th>
                    <th>Abend</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                    {wetter.map((entry) => {
                            return (
                                <td>
                                        {entry.temp}°C<br/>{entry.wind}km/h<br/>{entry.rain}l
                                </td>
                            )
                    })}
            </tr>
            </tbody>
    </Table>
);

export default WetterWidget;
