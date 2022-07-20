const body = document.querySelector('tbody');

const terminal = 'terminal';
const flight = 'fnr';
const destination = 'apname';
const time = 'esti';
const gate = 'gate';
const remark = 'status';

const sortedData = [...data].sort((a, b) =>
  Date.parse(a[time]) < Date.parse(b[time]) ? -1 : (Date.parse(a[time]) > Date.parse(b[time]) ? 1 : 0));


sortedData.map(e => {
  const row = document.createElement('tr');

  const terminalTd = document.createElement('td');
  const flightTd = document.createElement('td');
  const destinationTd = document.createElement('td');
  const timeTd = document.createElement('td');
  const gateTd = document.createElement('td');
  const remarkTd = document.createElement('td');
  let timeValue;

  // console.log(e[time]);

  if (e[time]) {
    const hours = new Date(Date.parse(e[time])).getHours();
    let minutes = new Date(Date.parse(e[time])).getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`
    };
    timeValue = `${hours}:${minutes}`;
  } else {
    timeValue = '-';
  };

  // console.log(timeValue);

  terminalTd.appendChild(document.createTextNode(e[terminal] ? e[terminal] : '-'));
  flightTd.appendChild(document.createTextNode(e[flight] ? e[flight] : '-'));
  destinationTd.appendChild(document.createTextNode(e[destination] ? e[destination] : '-'));
  timeTd.appendChild(document.createTextNode(timeValue));
  gateTd.appendChild(document.createTextNode(e[gate] ? e[gate] : '-'));
  remarkTd.appendChild(document.createTextNode(e[remark] ? e[remark] : '-'));

  row.append(terminalTd, flightTd, destinationTd, timeTd, gateTd, remarkTd)
  
  body.appendChild(row);
})

