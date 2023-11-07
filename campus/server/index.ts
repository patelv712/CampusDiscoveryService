import express, { json } from "express";
import { EventModel } from "./models/event";
import cors from "cors"

const PORT = 3002;

export const app = express();
app.use(cors())

app.get("/api", (req: any, res: any) => {
    res.json({ message: "Hello from server!" });
  });

app.get("/api/events", (req: any, res: any) => {
  console.log("got here");
  const events = EventModel.find({});
  return events;
})

app.get("/api/event", (req: any, res: any) => {
  let eventName = req.body.eventName;
  const event = EventModel.findOne({eventName: eventName})
  return res.send(event);
})

app.post("/api/event", (req: any, res: any) => {
  let eventName = req.body.eventName;
  let hostName = req.body.hostName;
  let eventDescription = req.body.eventDescription;
  let eventLocation = req.body.eventLocation;
  const event = EventModel.create({eventName: eventName, hostName: hostName, eventDescription: eventDescription, eventLocation: eventLocation})
  return res.send(event);
})

app.delete("/api/event", (req: any, res: any) => {
  let eventName = req.body.eventName;
  EventModel.find({eventName: eventName}).remove();
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});