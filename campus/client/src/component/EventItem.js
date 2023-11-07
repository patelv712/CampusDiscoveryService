import React, { useState } from 'react'

const EventItem = props => {
    return (
        <div>
            <li>Event Name: {props.eventName}, Host Name: {props.hostName}, Event Description: {props.eventDescription}, Event Location: {props.eventLocation}, Event Time: {props.eventTime}, Attendees: {props.rsvp}</li>
        </div>

    );

};


export default EventItem;