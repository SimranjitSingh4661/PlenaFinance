export const DummyData = {
  DELIVER: [
    {label: 'Penni Underpass, haven', value: '1'},
    {label: '3391 DuBuque , ridge', value: '2'},
    {label: 'Throughway, West Frank', value: '3'},
    {label: 'Courts, Lake Elenore', value: '4'},
  ],
  TIME: [
    {label: '2 Hour', value: '2'},
    {label: '3 Hour', value: '3'},
    {label: '4 Hour', value: '4'},
    {label: '5 Hour', value: '1'},
  ],
  HOME_BANNERS: [
    {
      id: '1',
      image: require('../assets/Images/Card.png'),
    },
    {
      id: '2',
      image: require('../assets/Images/Card.png'),
    },
    {
      id: '3',
      image: require('../assets/Images/Card.png'),
    },
    {
      id: '3',
      image: require('../assets/Images/Card.png'),
    },
  ],
};

export function generateRandomReviews() {
  const randomValue = Math.floor(Math.random() * 999) + 1;
  return randomValue;
}
