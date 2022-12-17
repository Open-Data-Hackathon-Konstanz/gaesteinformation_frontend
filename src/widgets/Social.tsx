import React from 'react';

import insta from "../insta.json";
import {Table} from "react-bootstrap";

const SocialWidget: React.FC<{no_images:number}> = ({no_images}) =>
    (<Table>
        <thead>
        <tr>
            <th>Neueste Bilder</th>
        </tr>
        </thead>
        <tbody>
        <tr>
    {
        insta.map((entry, i) => {
            if (i < no_images)
            return (
                    <td><img width={"200px"} src={entry.url}></img></td>
               );
            }
        )
    }
        </tr>
        </tbody>
    </Table>);

export default SocialWidget;
