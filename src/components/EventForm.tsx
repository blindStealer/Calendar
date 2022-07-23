import React, { FC, useState } from "react";
import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/formatDate";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

export const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    guest: "",
    date: "",
    description: "",
  });

  const { user } = useTypedSelector((state) => state.auth);

  const setGuest = (guest: string) => {
    setEvent({ ...event, guest: guest });
  };

  const changeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({
      ...event,
      description: e.target.value,
    });
  };

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const subForm = () => {
    props.submit({
      ...event,
      author: user.username,
    });
  };

  return (
    <Form>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input value={event.description} onChange={changeDescription} />
      </Form.Item>
      <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
        <DatePicker onChange={selectDate} />
      </Form.Item>
      <Form.Item
        label="Выбрать пользователя"
        name="setGuest"
        rules={[rules.required()]}
      >
        <Select onChange={setGuest}>
          {props.guests.map((guest) => {
            return (
              <Select.Option key={guest.username} value={guest.username}>
                {guest.username}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Row justify={"end"}>
        <Button onClick={subForm}>Создать</Button>
      </Row>
    </Form>
  );
};
