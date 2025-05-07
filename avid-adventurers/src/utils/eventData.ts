export interface EventDetails {
    title: string;
    time: string;
    weekday: string;
    date: string;
    imageUrl: string;
    location: string;
    interestedPeople: string[];
  }
  
  export const eventData: Record<string, EventDetails> = {
    sunset: {
      title: 'Sunset Picnic',
      time: '6:00 PM',
      weekday: 'Tuesday',
      date: 'May 6th',
      imageUrl: '/picnic.png',
      location: 'Golden Gate Park',
      interestedPeople: ['jordan', 'nina', 'alex'],
    },
    yoga: {
      title: 'Guided Yoga',
      time: '5:30 PM',
      weekday: 'Thursday',
      date: 'May 8th',
      imageUrl: '/yoga.png',
      location: 'Salesforce Park',
      interestedPeople: ['leo', 'nina', 'maya', 'alex'],
    },
    arizmendi: {
      title: 'Lunch Meetup',
      time: '12:45 PM',
      weekday: 'Friday',
      date: 'May 9th',
      imageUrl: '/arizmendi.png',
      location: 'Arizmendi Bakery',
      interestedPeople: ['alex', 'maya', 'jordan'],
    },
    sailing: {
      title: 'Sailing',
      time: '7:00 AM',
      weekday: 'Sunday',
      date: 'May 11th',
      imageUrl: '/sailing.png',
      location: 'Central Bay',
      interestedPeople: ['maya', 'nina', 'leo'],
    },
    skateboarding: {
        title: 'Skateboarding',
        time: '2:00 PM',
        weekday: 'Friday',
        date: 'May 12th',
        imageUrl: '/skateboarding.png',
        location: 'Potrero del Sol',
        interestedPeople: ['jordan', 'tyler'],
    },
  };
  