import React, { FC, useEffect, useState } from "react";
import { Button, Layout, Modal, Row } from "antd";
import { EventCalendar } from "../components/EventCalendar";
import { EventForm } from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

export const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();

  const { guests, events } = useTypedSelector((state) => state.event);

  useEffect(() => {
    fetchGuests();
    fetchEvents();
  }, []);

  const submitEvent = (event: IEvent) => {
    createEvent(event);
    setModalVisible(false);
  };

  return (
    <>
      <EventCalendar events={events} />
      <Row justify={"center"}>
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
        title={"Modal"}
        footer={null}
      >
        <EventForm guests={guests} submit={submitEvent} />
      </Modal>
    </>
  );
};
