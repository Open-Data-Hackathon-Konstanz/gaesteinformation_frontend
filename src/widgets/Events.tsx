import React from 'react';

import events from "../events.json"
import {Table} from "react-bootstrap";

const EventsWidget: React.FC<{no_events:number}> = ({no_events}) =>
    (<Table>
        <thead>
        <tr>
            <th>Titel</th>
            <th>Zeit</th>
            <th>Ort</th>
            <th>Beschreibung</th>
        </tr>
        </thead>
        <tbody>
    {
        events.splice(0, no_events).map((entry, i) => {
            return (<tr>
                <td><b>{entry.title}</b></td>
                <td>{entry.all_day && "ganzer Tag"}{!entry.all_day && entry.begin_time+" - "+entry.end_time}</td>
                <td>{entry.location.name}</td>
                <td dangerouslySetInnerHTML={{__html: entry.description as string}}></td>
                </tr>);
            }
        )
    }
        </tbody>
    </Table>);

export default EventsWidget;
