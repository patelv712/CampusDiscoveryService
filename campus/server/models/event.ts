import mongoose, { Schema, model, Types } from "mongoose";

export interface Event extends mongoose.Document {
    eventName: string;
    hostName: string;
    eventDescription: string;
    eventLocation: string;
    eventTime: string;
}

const eventSchema = new Schema<Event>({
    eventName: {
        type: String
    },
    hostName: {
        type: String
    },
    eventDescription: {
        type: String
    },
    eventLocation: {
        type: String
    },
    eventTime: {
        type: String
    },
})

export const EventModel = model<Event>('Event', eventSchema);

/*
    const [eventName, setEventName] = useState('');
    const [hostName, setHostName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventTime, setEventTime] = useState('');
*/