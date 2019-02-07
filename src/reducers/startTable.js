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
      eLabel: {x: 1.25, y: 1, label: `E-2 (A)`,style: { fontSize: 14 ,fontWeight:900 }}
    },
    {
      id: uuid(),
      service: "B",
      machine: 2,
      start: 2,
      duration: 24,
      engineers: 3,
      eLabel: {x: 2.5, y: 2, label: `E-3 (B)`,style: {  fontSize: 14 ,fontWeight:900 }}
    },
    {
      id: uuid(),
      service: "C",
      machine: 3,
      start: 3,
      duration: 36,
      engineers: 2,
      eLabel: {x: 3.75, y: 3, label: `E-2 (C)`,style: {  fontSize: 14 ,fontWeight:900 }}
    },
    {
      id: uuid(),
      service: "D",
      machine: 1,
      start: 4,
      duration: 48,
      engineers: 5,
      eLabel: {x: 5, y: 1, label: `E-5 (D)`,style: {  fontSize: 14 ,fontWeight:900 }}
    },
    {
      id: uuid(),
      service: "E",
      machine: 2,
      start: 5,
      duration: 12,
      engineers: 4,
      eLabel: {x: 5.25, y: 2, label: `E-4 (E)`,style: {  fontSize: 14 ,fontWeight:900 }}
    }
  ];
};


