import React, { FC } from "react";
import { IEvent } from "../models/IEvent";
import { Calendar } from "antd";
import { Moment } from "moment";
import { formatDate } from "../utils/formatDate";

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Moment) => {
    const date = formatDate(value.toDate());

    const currentDateEvents = props.events.filter(
      (event) => event.date === date
    );

    return (
      <div>
        {currentDateEvents.map((event) => {
          return (
            <>
              <div style={{ color: "red" }}>{event.guest}</div>
              {event.description}
            </>
          );
        })}
      </div>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};
