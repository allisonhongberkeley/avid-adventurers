export interface UserProfile {
    name: string;
    age: number;
    location: string;
    interests: string[];
    pronouns: string;
    mutualInterests?: string[];
    message?: string;
    avatarUrl?: string;
  }
  
  export const userData: Record<string, UserProfile> = {
    maya: {
      name: 'Maya',
      age: 27,
      location: 'Castro, SF',
      interests: ['yoga', 'painting', 'mediterranean', 'pickleball', 'sunset'],
      pronouns: 'she/her',
      avatarUrl: '/Maya.png',
    },
    alex: {
        name: 'Alex',
        age: 25,
        location: 'Mission District, SF',
        interests: ['yoga', 'board games', 'italian', 'sunset', 'calligraphy'],
        pronouns: 'he/him',
        avatarUrl: '/Alex.png',
    },
    leo: {
        name: 'Leo',
        age: 32,
        location: 'Pacific Heights, SF',
        interests: ['sail', 'paddleboarding', 'japanese', 'yoga', 'concerts'],
        pronouns: 'he/him',
        avatarUrl: '/Leo.png',
    },
    jordan: {
      name: 'Jordan',
      age: 29,
      location: 'SoMa, SF',
      interests: ['basketball', 'crocheting', 'vietnamese', 'sunset', 'karaoke'],
      pronouns: 'she/her',
      avatarUrl: '/Jordan.png',
    },
    nina: {
      name: 'Nina',
      age: 26,
      location: 'Inner Sunset, SF',
      interests: ['yoga', 'clubbing', 'ethiopian', 'stargazing', 'surfing'],
      pronouns: 'she/her',
      avatarUrl: '/Nina.png',
    },
    tyler: {
      name: 'Tyler',
      age: 28,
      location: 'North Beach, SF',
      interests: ['skateboarding', 'hiking', 'sail', 'pickleball', 'football', 'stargazing'],
      pronouns: 'he/him',
      avatarUrl: '/Tyler.png',
    },
  };
  