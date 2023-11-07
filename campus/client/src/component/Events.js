import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import PopUp from './PopUp';
import {useForm } from "react-hook-form";
import { db } from "../Firebase";
import {uid} from 'uid';
import {set, ref, onValue, remove, update} from 'firebase/database';
import Pagination from './Pagination';
import {useNavigate } from "react-router-dom"; 
import './Events.css'

function Events() { 

    const navigate = useNavigate();

    const [buttonPopUp, setButtonPopUp] = useState(false);

    const {handleSubmit, formState: { errors } } = useForm();


    const {numClicks, setNumClicks} = useState(-1);

    const {state} = useLocation();
    const {name, category} = state;
    const [eventName, setEventName] = useState('');
    const [hostName, setHostName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventTime, setEventTime] = useState('');

    const [rsvp, setRSVP] = useState(['']);
    const [will, setWill] = useState(['']);
    const [maybe, setMaybe] = useState(['']);
    const [wont, setWont] = useState(['']);
    const [nemesis, setNemesis] = useState(['']);

    
    const [guestCapacity, setGuestCapacity] = useState(0);
    const [numAttend, setNumAttend] = useState(0);
    const [willAttend, setWillAttend] = useState(0);
    const [maybeAttend, setMaybeAttend] = useState(0);
    const [wontAttend, setWontAttend] = useState(0);
    const [nemesisAttend, setNemesisAttend] = useState(0);

    const[todo, setTodo] = useState(" ");
    const[todos,setTodos] = useState([]);
    const [info, setInfo] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const[tempUuid, setTempUuid] = useState(" ");

    const[invitees, setInvitees] = useState(['']);

    const[currentPage, setCurrentPage] = useState(1);
    const[eventsPerPage, setEventsPerPage] = useState(10);
    





   
    //write
    //referenced tutorial cited - https://youtu.be/azdwN_4IDKA
    const writeToDatabase = () => {
        let info2 = {
            name: eventName,
            host: hostName,
            description: eventDescription,
            location: eventLocation,
            time: eventTime,
            guest: guestCapacity,
            rsvpStatus: rsvp,
            willStatus: will,
            maybeStatus: maybe,
            wontStatus: wont,
            nemesisStatus: nemesis,
            willAttendStatus: willAttend,
            maybeAttendStatus: maybeAttend,
            wontAttendStatus: wontAttend,
            nemesisAttendStatus: nemesisAttend,
            attend: numAttend
        }
        setInfo(info2);
        
        setTodo(info2);
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            info2,
            uuid,
        }); 
 

        setTodo(" ");
        
    };

    //read
    useEffect(() => {
        onValue(ref(db), snapshot => { 
            setTodos([]);
            const data = snapshot.val();
            if (data != null) {
                Object.values(data).map(todo => {
                    setTodos(oldArray => [...oldArray, todo])
                });
            }
        });
    }, []);

    //delete
    const handleDelete = (todo) => {
        if (category == "admin" || name == todo.info2.host && category == "organizer") {
            remove(ref(db, `/${todo.uuid}`));
        } else {
            alert("You must be an admin or organizer of the event to delete");
        }
    }

    //update
    const handleUpdate = (todo) => {
        if (category == "admin" || name == todo.info2.host && category == "organizer") {
            
            setIsEdit(true);
            setTempUuid(todo.uuid);
            setTodo(todo.info2)
        } else {
            alert("You must be an admin or organizer of the event to delete");
        }
            
    };


    const handleRSVP_ADD_ATTEND_WILL = (todo) => {
        if (todo.info2.willStatus.length <= todo.info2.guest) {
            setRSVP(rsvp => [...todo.info2.rsvpStatus, name + " "]);
            setWill(rsvp => [...todo.info2.willStatus, name + " "]);
            let info2 = {
            name: todo.info2.name,
            host: todo.info2.host,
            description: todo.info2.description,
            location: todo.info2.location,
            time: todo.info2.time,
            guest: todo.info2.guest,
            rsvpStatus: rsvp,
            willStatus: will,
            maybeStatus: todo.info2.maybeStatus,
            wontStatus: todo.info2.wontStatus,
            nemesisStatus: todo.info2.nemesisStatus,
            willAttendStatus: todo.info2.willAttendStatus + 0.5,
            maybeAttendStatus: todo.info2.maybeAttendStatus,
            wontAttendStatus: todo.info2.wontAttendStatus,
            nemesisAttendStatus: todo.info2.nemesisAttendStatus,
            attend: todo.info2.attend + 0.5
        }
        update(ref(db, `/${todo.uuid}`), {
            info2,
            uuid: todo.uuid,
        });
        }
        else {
            alert("guest capacity has been reached")
        }
    };
    
    const handleRSVP_ADD_ATTEND_MAYBE = (todo) => {
        if (todo.info2.willStatus.length <= todo.info2.guest) {
            setRSVP(rsvp => [...todo.info2.rsvpStatus, name + " "]);
            setMaybe(maybe => [...todo.info2.maybeStatus, name + " "]);
            let info2 = {
            name: todo.info2.name,
            host: todo.info2.host,
            description: todo.info2.description,
            location: todo.info2.location,
            time: todo.info2.time,
            guest: todo.info2.guest,
            rsvpStatus: rsvp,
            willStatus: todo.info2.willStatus,
            maybeStatus: maybe,
            wontStatus: todo.info2.wontStatus,
            nemesisStatus: todo.info2.nemesisStatus,
            willAttendStatus: todo.info2.willAttendStatus,
            maybeAttendStatus: todo.info2.maybeAttendStatus + 0.5,
            wontAttendStatus: todo.info2.wontAttendStatus,
            nemesisAttendStatus: todo.info2.nemesisAttendStatus,
            attend: todo.info2.attend + 0.5
        }
        update(ref(db, `/${todo.uuid}`), {
            info2,
            uuid: todo.uuid,
        });
        }
        else {
            alert("guest capacity has been reached")
        }
    };

    const handleRSVP_ADD_ATTEND_WONT = (todo) => {
        if (todo.info2.willStatus.length <= todo.info2.guest) {
            setRSVP(rsvp => [...todo.info2.rsvpStatus, name + " "]);
            setWont(wont => [...todo.info2.wontStatus, name + " "]);
            let info2 = {
            name: todo.info2.name,
            host: todo.info2.host,
            description: todo.info2.description,
            location: todo.info2.location,
            time: todo.info2.time,
            guest: todo.info2.guest,
            rsvpStatus: rsvp,
            willStatus: todo.info2.willStatus,
            maybeStatus: todo.info2.maybeStatus,
            wontStatus: wont,
            nemesisStatus: todo.info2.nemesisStatus,
            willAttendStatus: todo.info2.willAttendStatus,
            maybeAttendStatus: todo.info2.maybeAttendStatus,
            wontAttendStatus: todo.info2.wontAttendStatus + 0.5,
            nemesisAttendStatus: todo.info2.nemesisAttendStatus,
            attend: todo.info2.attend + 0.5
        }
        update(ref(db, `/${todo.uuid}`), {
            info2,
            uuid: todo.uuid,
        });
        }
        else {
            alert("guest capacity has been reached")
        }
    };

    const addInvitees = (todo) => {
        if (name != todo.info2.host) {
            alert("You can only add invitees if you are the host");
        } else {
            let invitee = prompt("Add invitee...");
            console.log(invitee)
            setInvitees(invitees => [...invitees, invitee]);
            console.log(invitees)
        }
    };
    const manageRSVP = (todo) => {
        console.log(name);
        console.log(todo.info2.host);
        if (name != todo.info2.host) {
            alert("You can only manage RSVP if you are the host");
        } else {
            var willArray = [...todo.info2.willStatus]
            var array = [...todo.info2.rsvpStatus]
            let removee = prompt("Remove user...");
            console.log(removee)
            var index = array.indexOf({name})
            if (index+ 1 != -1) {
                console.log("HERE")
                array.splice(index, 1);
                console.log("array" + array)
                setRSVP(array);
                console.log(rsvp);
            }
            
            index = willArray.indexOf({name});
            if (index+ 1 != -1) {
                console.log("HERE")
                willArray.splice(index, 1);
                setWill(willArray);
                console.log(will);
            }
            let  info2 = {
                    name: todo.info2.name,
                    host: todo.info2.host,
                    description: todo.info2.description,
                    location: todo.info2.location,
                    time: todo.info2.time,
                    guest: todo.info2.guest,
                    willStatus: will,
                    maybeStatus: todo.info2.maybeStatus,
                    wontStatus: todo.info2.wontStatus,
                    nemesisStatus: todo.info2.nemesisStatus,
                    rsvpStatus: rsvp,
                    willAttendStatus: todo.info2.willAttendStatus - 0.5,
                    maybeAttendStatus: todo.info2.maybeAttendStatus,
                    wontAttendStatus: todo.info2.wontAttendStatus,
                    nemesisAttendStatus: todo.info2.nemesisAttendStatus,
                    attend: todo.info2.attend - 0.5
                }
            
            update(ref(db, `/${todo.uuid}`), {
                info2,
                uuid: todo.uuid,
            });
        }
    };

    const handleRSVP_ADD_ATTEND_NEMESIS = (todo) => {
        if (todo.info2.willStatus.length <= todo.info2.guest) {
            setRSVP(rsvp => [...todo.info2.rsvpStatus, name + " "]);
            setNemesis(nemesis => [...todo.info2.nemesisStatus, name + " "]);
            let info2 = {
            name: todo.info2.name,
            host: todo.info2.host,
            description: todo.info2.description,
            location: todo.info2.location,
            time: todo.info2.time,
            guest: todo.info2.guest,
            rsvpStatus: rsvp,
            willStatus: todo.info2.willStatus,
            maybeStatus: todo.info2.maybeStatus,
            wontStatus: todo.info2.wontStatus,
            nemesisStatus: nemesis,
            willAttendStatus: todo.info2.willAttendStatus,
            maybeAttendStatus: todo.info2.maybeAttendStatus,
            wontAttendStatus: todo.info2.wontAttendStatus,
            nemesisAttendStatus: todo.info2.nemesisAttendStatus + 0.5,
            attend: todo.info2.attend + 0.5
        }
        update(ref(db, `/${todo.uuid}`), {
            info2,
            uuid: todo.uuid,
        });
        }
        else {
            alert("guest capacity has been reached")
        }
    };

    const handleSubmitChange = () => {
        let info2 = {
            name: eventName,
            host: hostName,
            description: eventDescription,
            location: eventLocation,
            time: eventTime,
            guest: guestCapacity,
            willStatus: todo.info2.willStatus,
            maybeStatus: todo.info2.maybeStatus,
            wontStatus: todo.info2.wontStatus,
            nemesisStatus: todo.info2.nemesisStatus,
            rsvpStatus: todo.info2.rsvpStatus,
            willAttendStatus: todo.info2.willAttendStatus,
            maybeAttendStatus: todo.info2.maybeAttendStatus,
            wontAttendStatus: todo.info2.wontAttendStatus,
            nemesisAttendStatus: todo.info2.nemesisAttendStatus,
            attend: todo.info2.rsvpStatus
        }
        update(ref(db, `/${tempUuid}`), {
            info2,
            uuid: tempUuid,
        });
        setTodo("");
        setIsEdit(false);
        alert("Changes saved.");
    };

    const handleRSVP_REMOVE_WILL = (todo) => {

        setWill(rsvp => [...todo.info2.willStatus, name + " "]);


        var willArray = [...todo.info2.willStatus]
        var array = [...todo.info2.rsvpStatus]
        var index = array.indexOf({name})

        if (index+ 1 != -1) {
            console.log("HERE")
            array.splice(index, 1);
            console.log("array" + array)
            setRSVP(array);
            console.log(rsvp);
        }
        index = willArray.indexOf({name});
        if (index+ 1 != -1) {
            console.log("HERE")
            willArray.splice(index, 1);
            console.log("array" + willArray)
            setWill(willArray);
            console.log(will);
        }
        
          let  info2 = {
                name: todo.info2.name,
                host: todo.info2.host,
                description: todo.info2.description,
                location: todo.info2.location,
                time: todo.info2.time,
                guest: todo.info2.guest,
                willStatus: will,
                maybeStatus: todo.info2.maybeStatus,
                wontStatus: todo.info2.wontStatus,
                nemesisStatus: todo.info2.nemesisStatus,
                rsvpStatus: rsvp,
                willAttendStatus: todo.info2.willAttendStatus - 0.5,
                maybeAttendStatus: todo.info2.maybeAttendStatus,
                wontAttendStatus: todo.info2.wontAttendStatus,
                nemesisAttendStatus: todo.info2.nemesisAttendStatus,
                attend: todo.info2.attend - 0.5
            }
        
        update(ref(db, `/${todo.uuid}`), {
            info2,
            uuid: todo.uuid,
        });
    };


    const handleRSVP_REMOVE_MAYBE = (todo) => {

        setMaybe(rsvp => [...todo.info2.maybeStatus, name + " "]);


        var maybeArray = [...todo.info2.maybeStatus]
        var array = [...todo.info2.rsvpStatus]
        var index = array.indexOf({name})

        if (index+ 1 != -1) {
            console.log("HERE")
            array.splice(index, 1);
            console.log("array" + array)
            setRSVP(array);
            console.log(rsvp);
        }
        index = maybeArray.indexOf({name});
        if (index+ 1 != -1) {
            console.log("HERE")
            maybeArray.splice(index, 1);
            console.log("array" + maybeArray)
            setMaybe(maybeArray);
            console.log(maybe);
        }
        
          let  info2 = {
                name: todo.info2.name,
                host: todo.info2.host,
                description: todo.info2.description,
                location: todo.info2.location,
                time: todo.info2.time,
                guest: todo.info2.guest,
                willStatus: todo.info2.willStatus,
                maybeStatus: maybe,
                wontStatus: todo.info2.wontStatus,
                nemesisStatus: todo.info2.nemesisStatus,
                rsvpStatus: rsvp,
                willAttendStatus: todo.info2.willAttendStatus,
                maybeAttendStatus: todo.info2.maybeAttendStatus - 0.5,
                wontAttendStatus: todo.info2.wontAttendStatus,
                nemesisAttendStatus: todo.info2.nemesisAttendStatus,
                attend: todo.info2.attend - 0.5
            }
        
        update(ref(db, `/${todo.uuid}`), {
            info2,
            uuid: todo.uuid,
        });
    };

    const handleRSVP_REMOVE_WONT = (todo) => {

        setWont(rsvp => [...todo.info2.wontStatus, name + " "]);


        var wontArray = [...todo.info2.wontStatus]
        var array = [...todo.info2.rsvpStatus]
        var index = array.indexOf({name})

        if (index+ 1 != -1) {
            console.log("HERE")
            array.splice(index, 1);
            console.log("array" + array)
            setRSVP(array);
            console.log(rsvp);
        }
        index = wontArray.indexOf({name});
        if (index+ 1 != -1) {
            console.log("HERE")
            wontArray.splice(index, 1);
            console.log("array" + wontArray)
            setWont(wontArray);
            console.log(wont);
        }
        
          let  info2 = {
                name: todo.info2.name,
                host: todo.info2.host,
                description: todo.info2.description,
                location: todo.info2.location,
                time: todo.info2.time,
                guest: todo.info2.guest,
                willStatus: todo.info2.willStatus,
                maybeStatus: todo.info2.maybeStatus,
                wontStatus: wont,
                nemesisStatus: todo.info2.nemesisStatus,
                rsvpStatus: rsvp,
                willAttendStatus: todo.info2.willAttendStatus,
                maybeAttendStatus: todo.info2.maybeAttendStatus,
                wontAttendStatus: todo.info2.wontAttendStatus - 0.5,
                nemesisAttendStatus: todo.info2.nemesisAttendStatus,
                attend: todo.info2.attend - 0.5
            }
        
        update(ref(db, `/${todo.uuid}`), {
            info2,
            uuid: todo.uuid,
        });
    };
    

    const handleRSVP_REMOVE_NEMSIS = (todo) => {

    };
    function filter() {
        var ReGeX1 = prompt("Enter filter name")
        var ReGeX2 = prompt("Enter filer value")
        document.getElementById("filter").classList.add("visible");
    };




    const lastIndex = currentPage * eventsPerPage;
    const firstIndex = lastIndex - eventsPerPage;
    const currEvents = todos.slice(firstIndex, lastIndex)
    const paginate = (pgNo) => setCurrentPage(pgNo)



    return (
        <div>
            <h1> Events </h1>
            <h2> Hello {name}, you are {category}</h2>
            <button onClick={() => setButtonPopUp(true)}> Add Event </button>
            <button onClick={()=>navigate('./Directory')}>Show Map</button>
            <button onClick={()=>navigate('./MyEvents', {number:{clicks: numClicks}})}>My Events</button>
            <button onClick={()=>{ filter() }}>Filter</button>
            <button id="filter" onClick={()=>navigate('./FilteredEvents')}>Filtered Events</button>

            {isEdit ? (
                    <PopUp trigger = {buttonPopUp} setTrigger = {setButtonPopUp}>
                        <form onSubmit={handleSubmit(handleSubmitChange)}> 
                            <p>Enter Event Name</p>
                            <input type = "text" required = "true" onChange={(input) => setEventName(input.target.value)}/>
                            <p>Enter Host Name</p>
                            <input type = "text" required = "true" onChange={(input) => setHostName(input.target.value)}/>
                            <p>Enter Event Description</p>
                            <input type = "text" required = "true" onChange={(input) => setEventDescription(input.target.value)}/>
                            <p>Enter Event Location</p>
                            <input type = "text" required = "true" onChange={(input) => setEventLocation(input.target.value)}/>
                            <p>Enter Guest Capacity</p>
                            <input type = "number"  required = "true" onChange={(input) => setGuestCapacity(input.target.value)}/>
                            <p>Enter Event Time</p>
                            <input type = "time"  required = "true" onChange={(input) => setEventTime(input.target.value)}/>
                            <input type = "submit" name = "userModel" id = "userModel" value = "Save Changes"/>
                        </form>
                        
                     </PopUp>
                ) : (
                    <PopUp trigger = {buttonPopUp} setTrigger = {setButtonPopUp}>
                        <form onSubmit={handleSubmit(writeToDatabase)}> 
                            <p>Enter Event Name</p>
                            <input type = "text" required = "true" onChange={(input) => setEventName(input.target.value)}/>
                            <p>Enter Host Name</p>
                            <input type = "text" required = "true" onChange={(input) => setHostName(input.target.value)}/>
                            <p>Enter Event Description</p>
                            <input type = "text" required = "true" onChange={(input) => setEventDescription(input.target.value)}/>
                            <p>Enter Event Location</p>
                            <input type = "text" required = "true" onChange={(input) => setEventLocation(input.target.value)}/>
                            <p>Enter Guest Capacity</p>
                            <input type = "number"  required = "true" onChange={(input) => setGuestCapacity(input.target.value)}/>
                            <p>Enter Event Time</p>
                            <input type = "time"  required = "true" onChange={(input) => setEventTime(input.target.value)}/>
                            <input type = "submit" name = "userModel" id = "userModel"/>
                        </form>
                    </PopUp>
                 
                )} 

            {currEvents.map(todo => (
                <>
                <h1>{todo.info2.name}</h1>
                <p>Event Name: {todo.info2.name}, Host Name: {todo.info2.host}, Event Description: {todo.info2.description}, Event Location: {todo.info2.location}, Event Time: {todo.info2.time}, Guest Capactity: {todo.info2.guest}</p>
                <p> {todo.info2.attend} Respondees: {todo.info2.rsvpStatus}</p>
                <p> {todo.info2.willAttendStatus} Attendees: {todo.info2.willStatus}</p>
                <p> {todo.info2.maybeAttendStatus} Maybe Attendees: {todo.info2.maybeStatus}</p>
                <p> {todo.info2.wontAttendStatus} Wont Attendees: {todo.info2.wontStatus}</p>
                <p> {todo.info2.nemesisAttendStatus} Nemesis: {todo.info2.nemesisStatus}</p>
                <button onClick = {() => handleUpdate(todo)}>update</button>
                <button onClick = {() => handleDelete(todo)}> delete</button>
                <br></br>
                <button onClick = {() => handleRSVP_ADD_ATTEND_WILL(todo)}>will attend</button>
                <button onClick = {() => handleRSVP_ADD_ATTEND_MAYBE(todo)}>maybe</button>
                <button onClick = {() => handleRSVP_ADD_ATTEND_WONT(todo)}>Wont Attend</button>
                <button onClick = {() => handleRSVP_ADD_ATTEND_NEMESIS(todo)}>Im your nemisis</button>
                <br></br>
                <button onClick = {() => handleRSVP_REMOVE_WILL(todo)}> CANCEL</button>
                <button onClick = {() => handleRSVP_REMOVE_MAYBE(todo)}>CANCEL</button>
                <button onClick = {() => handleRSVP_REMOVE_WONT(todo)}>CANCEL</button>
                <button onClick = {() => handleRSVP_REMOVE_NEMSIS(todo)}>CANCEL</button>
                <br></br>
                Host Only: <button onClick = {() => addInvitees(todo)}>Add Invitees</button> <button onClick = {() => manageRSVP(todo)}>Delete RSVPs</button>
                </>
            ))}
                <Pagination eventsPerPage={eventsPerPage} allEvents={todos.length} paginate={paginate}/>

            
        </div>
    )
}

export default Events;