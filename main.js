const body = document.querySelector('tbody');

const terminal = 'terminal';
const flight = 'fnr';
const destination = 'apname';
const time = 'esti';
const gate = 'gate';
const remark = 'status';
const name = 'alname';

const filteredData = data.filter(i => !i[name].includes('copy'));

const sortedData = [...filteredData].sort((a, b) =>
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

  terminalTd.appendChild(document.createTextNode(e[terminal] ? e[terminal] : '-'));
  flightTd.appendChild(document.createTextNode(e[flight] ? e[flight] : '-'));
  flightTd.classList.add('flight-cell');
  destinationTd.appendChild(document.createTextNode(e[destination] ? e[destination] : '-'));
  destinationTd.classList.add('destination-cell');
  timeTd.appendChild(document.createTextNode(timeValue));
  gateTd.appendChild(document.createTextNode(e[gate] ? e[gate] : '-'));
  remarkTd.appendChild(document.createTextNode(e[remark] ? e[remark] : '-'));
  remarkTd.classList.add('remark-cell');
  if (remarkTd.innerText === 'Boarding' || remarkTd.innerText === 'baggage delivery') {
    remarkTd.classList.add('remark-yellow')
  }
  if (remarkTd.innerText === 'on position' || remarkTd.innerText === 'departed' || remarkTd.innerText === 'landed' || remarkTd.innerText === 'ready for Boarding') {
    remarkTd.classList.add('remark-green');
  }
  if (remarkTd.innerText === 'closed') {
    remarkTd.classList.add('remark-red')
  }

  row.append(terminalTd, flightTd, destinationTd, timeTd, gateTd, remarkTd)
  
  body.appendChild(row);
})

