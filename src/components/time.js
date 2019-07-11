import React from "react";

const convert_date = date => {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  };
};
const Time = props => {
  const { date, handleTime, self } = props;
  console.log(self.update);
  const theDate = convert_date(date);

  return (
    <div>
      <h2>
        {theDate.hours} : {theDate.minutes} : {theDate.seconds}
      </h2>
    </div>
  );
};

export default Time;
