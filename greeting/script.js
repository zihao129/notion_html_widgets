function updateElement(id, content) {
  document.getElementById(id).innerHTML = content;
}

function displayWidget() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';

  const greetings = ['早上好', '中午好', '下午好'];
  const days = [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ];
  const months = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ];

  const greetIndex = hours < 12 ? 0 : hours < 17 ? 1 : 2;
  const greet = `${greetings[greetIndex]} `;

  const dayName = days[today.getDay()];
  const monthName = months[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();

  const hour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  const hourStr = hour < 10 ? `0${hour}` : `${hour}`;
  const minStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  updateElement('greet', greet);
  updateElement('date', `${dayName}, ${monthName} ${date} ${year}`);
  updateElement('hour', hourStr);
  updateElement('min', minStr);
  updateElement('sec', `${secStr} ${ampm}`);

  setTimeout(displayWidget, 500);
}

displayWidget();
