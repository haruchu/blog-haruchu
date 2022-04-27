import React from "react";
import Calendar from 'tui-calendar'; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const Contributions = () => {

  const calendar = new Calendar('#calendar', {
    defaultView: "month",
    useCreationPopup: true,
    useDetailPopup: true
  });

  return (
    <>
      <div id="menu">
        <span id="menu-navi">
          <button type="button" className="btn btn-default btn-sm move-today" data-action="move-today">Today</button>
          <button type="button" className="btn btn-default btn-sm move-day" onClick={() => calendar.prev()}>
            <i className="calendar-icon ic-arrow-line-left" data-action="move-prev">前</i>
          </button>
          <button type="button" className="btn btn-default btn-sm move-day" onClick={() => calendar.next()}>
            <i className="calendar-icon ic-arrow-line-right" data-action="move-next">次</i>
          </button>
        </span>
        <span id="renderRange" className="render-range"></span>
      </div>

      <div id="calendar" onClick={() => calendar.getDate()}></div>
    </>
  );
};
export default Contributions;
