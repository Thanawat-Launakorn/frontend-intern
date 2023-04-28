import React from "react";

import { Badge, BadgeProps, Calendar as TableCalendar } from "antd";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

import type { CellRenderInfo } from "rc-picker/lib/interface";
import Container from "../../../components/containers";
import { IHoliday } from "../../../models/IHoliday";

const getListData = (value: Dayjs) => {
  let listData;

  switch (value.date()) {
    case value.date():
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export default function Calendar() {
  const [holiday, setHoliday] = React.useState<Array<Partial<IHoliday>>>([]);
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <b>{item.content}</b>
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const options = {
    method: "GET",
    url: "https://public-holiday.p.rapidapi.com/2023/US",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "294536808bmsh9b424828e9c9f86p1ae80ajsn47c1507e7225",
      "X-RapidAPI-Host": "public-holiday.p.rapidapi.com",
    },
  };

  React.useEffect(() => {
    (async () => {
      try {
        const response = await axios.request(options);
        setHoliday(response.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <>
      <Container className="p-5">
        <TableCalendar
          cellRender={cellRender}
          className="min-h-screen rounded-lg shadow-lg p-10"
        />
      </Container>
    </>
  );
}

// (date: Dayjs | any) => {
//   holiday.map((e) => {
//     if (e.date === dayjs(new Date()).format("YYYY-MM-DD")) {
//       <h5>{e.localName}</h5>;
//     }
//   });
// }
