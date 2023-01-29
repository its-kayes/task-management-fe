import { useState } from "react";
import ApiCalendar from "react-google-calendar-api";

export default function Calender() {
  const [events, setEvents] = useState([]);
  const config = {
    clientId:
      "1042700113038-rrndn64tk3lds916eprmfqhaf1bc99ei.apps.googleusercontent.com",
    apiKey: "AIzaSyDJKqkctmUcXEMueI-e-0HxUzOEmqFDloc",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };

  const apiCalendar = new ApiCalendar(config);

  const handleItemClick = (e, name) => {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
    } else {
      apiCalendar.handleSignoutClick();
    }
  };

  const allEvents = () => {
    apiCalendar.listUpcomingEvents(10).then((data) => {
      setEvents(data.result.items);
      // console.log(data.result.items);
    });
  };

  return (
    <div>
      {" "}
      <button onClick={(e) => handleItemClick(e, "sign-in")}>sign-in</button>
      <button onClick={(e) => handleItemClick(e, "sign-out")}>
        sign-out
      </button>{" "}
      <button onClick={allEvents} className="mx-10 text-red-500">
        {" "}
        Get Events{" "}
      </button>
      <div>
        List of All events:-
        {events?.map((event) => (
          <div key={event.id}>
            <h1>Name:- {event.summary}</h1>
            <p>Descriptions:- {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
