import uuid from 'uuid';

export default () => {
  return [
    {
      id: uuid(),
      service: "A",
      machine: 1,
      start: 1,
      duration: 12,
      engineers: 2,
      eLabel: {x: 1 + 0.25, y: 1, label: `Engineers: 2`,style: { fontSize: 10 }}
    },
    {
      id: uuid(),
      service: "B",
      machine: 2,
      start: 2,
      duration: 24,
      engineers: 3,
      eLabel: {x: 2 + 0.25, y: 2, label: `Engineers: 3`,style: { fontSize: 10 }}
    },
    {
      id: uuid(),
      service: "C",
      machine: 3,
      start: 3,
      duration: 36,
      engineers: 2,
      eLabel: {x: 3 + 0.25, y: 3, label: `Engineers: 2`,style: { fontSize: 10 }}
    },
    {
      id: uuid(),
      service: "D",
      machine: 1,
      start: 4,
      duration: 48,
      engineers: 5,
      eLabel: {x: 4 + 0.25, y: 1, label: `Engineers: 5`,style: { fontSize: 10 }}
    },
    {
      id: uuid(),
      service: "E",
      machine: 2,
      start: 5,
      duration: 12,
      engineers: 4,
      eLabel: {x: 5 + 0.25, y: 2, label: `Engineers: 4`,style: { fontSize: 10 }}
    }
  ];
};


