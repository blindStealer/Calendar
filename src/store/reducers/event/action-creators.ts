import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";
import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";
import { AppDispatch } from "../../index";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => {
    return {
      type: EventActionEnum.SET_GUESTS,
      payload,
    };
  },

  setEvents: (payload: IEvent[]): SetEventsAction => {
    return {
      type: EventActionEnum.SET_EVENTS,
      payload,
    };
  },

  fetchGuests: () => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await UserService.getUsers();

        dispatch(EventActionCreators.setGuests(response.data));
      } catch (e) {
        console.log(e);
      }
    };
  },

  createEvent: (newEvent: IEvent) => {
    return (dispatch: AppDispatch) => {
      try {
        const events = localStorage.getItem("events") || "[]";

        const parseEvents = JSON.parse(events) as IEvent[];

        parseEvents.push(newEvent);
        dispatch(EventActionCreators.setEvents(parseEvents));
        localStorage.setItem("events", JSON.stringify(parseEvents));
      } catch (e) {
        console.log(e);
      }
    };
  },

  fetchEvents: () => {
    return (dispatch: AppDispatch) => {
      const events = localStorage.getItem("events") || "[]";

      const parseEvents = JSON.parse(events) as IEvent[];

      dispatch(EventActionCreators.setEvents(parseEvents));
    };
  },
};
