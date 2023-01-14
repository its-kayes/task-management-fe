import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useState } from "react";
import { addEventSuccess, storeEvents } from "../store/events/eventsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([
    { title: "Vat khete hobe :3", date: "2023-01-17" },
    { title: "Check", date: "2021-04-02" },
  ]);

  // const { value } = useSelector((state) => state.check);
  // const { events: eventsArray } = useSelector((state) => state.events);

  const handleDateClick = (arg) => {
    console.log(arg);
    toast.success(arg.dateStr);
  };

  class Event {
    constructor(events) {
      const update = events.map((event, index) => ({
        title: event.title,
        startStr: event.startStr,
        end: event._instance.range.end,
        start: event._instance.range.start,
      }));
      return { events: update };
      // console.log(update);
    }
  }

  const handleEvents = (events) => {
    // console.log({ events });
    // console.log({ title: events[0].title });
    // console.log({ startStr: events[0].startStr });
    // console.log({ end: events[0]._instance.range.end });
    // console.log({ start: events[0]._instance.range.start });

    const updateEvent = new Event(events);
    console.log(updateEvent, "updateEvent");

    // dispatch(storeEvents(events));
  };

  return (
    <div className="">
      <section className="w-2/3 ">
        <FullCalendar
          initialView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          // weekends={false}
          events={events}
          dateClick={handleDateClick}
          eventsSet={handleEvents}
        />
      </section>
    </div>
  );
}
