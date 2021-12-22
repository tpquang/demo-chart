const data = [
  [
    'Date',
    'Sprint 1',
    'Sprint 2',
    'Sprint 3',
    'Sprint 4',
    'Sprint 5',
    'Sprint 6',
    'Sprint 7'
  ],
  
    [new Date(2015, 0, 1), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 2), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 3), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 4), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 5), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 6), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 7), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 8), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 9), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 10), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 11), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 12), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 13), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 14), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 15), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 16), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 17), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 18), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 19), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
    [new Date(2015, 0, 20), Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5,Math.floor(Math.random() * 5) + 5],
  
]

export default data
