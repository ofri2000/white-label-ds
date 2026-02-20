export interface Question {
  id: number
  category: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const questions: Question[] = [
  {
    id: 1,
    category: 'General Knowledge',
    question: 'Which country has the most natural lakes in the world?',
    options: ['United States', 'Canada', 'Finland', 'Russia'],
    correctIndex: 1,
    explanation: 'Canada has over 60% of the world\u2019s lakes, with an estimated 2 million lakes covering 7.6% of its landmass.',
  },
  {
    id: 2,
    category: 'Music',
    question: 'Which instrument has the most strings in a standard orchestra?',
    options: ['Violin', 'Harp', 'Piano', 'Guitar'],
    correctIndex: 2,
    explanation: 'A standard piano has 88 keys and 230 strings, making it the instrument with the most strings in an orchestra.',
  },
  {
    id: 3,
    category: 'Movies',
    question: 'What was the first fully computer-animated feature film?',
    options: ['Shrek', 'Toy Story', 'A Bug\u2019s Life', 'Finding Nemo'],
    correctIndex: 1,
    explanation: 'Toy Story (1995) by Pixar was the first entirely computer-animated feature film ever released.',
  },
  {
    id: 4,
    category: 'Sports',
    question: 'In which sport would you perform a \u201cmarani\u201d?',
    options: ['Cricket', 'Kabaddi', 'Tennis', 'Swimming'],
    correctIndex: 1,
    explanation: 'A marani is a defensive move in Kabaddi where the defender tries to catch the raider by the ankle.',
  },
  {
    id: 5,
    category: 'General Knowledge',
    question: 'What is the capital city of Japan?',
    options: ['Osaka', 'Tokyo', 'Kyoto', 'Hiroshima'],
    correctIndex: 1,
    explanation: 'Tokyo has been the capital of Japan since 1868, when the Emperor moved from Kyoto to Tokyo.',
  },
  {
    id: 6,
    category: 'Music',
    question: 'Which band performed at the first-ever Glastonbury Festival?',
    options: ['The Beatles', 'T. Rex', 'Led Zeppelin', 'Pink Floyd'],
    correctIndex: 1,
    explanation: 'T. Rex headlined the first Glastonbury Festival (then called Pilton Festival) in September 1970.',
  },
  {
    id: 7,
    category: 'Movies',
    question: 'Who directed the 1994 film Pulp Fiction?',
    options: ['Martin Scorsese', 'Quentin Tarantino', 'Steven Spielberg', 'David Fincher'],
    correctIndex: 1,
    explanation: 'Quentin Tarantino wrote and directed Pulp Fiction, which won the Palme d\u2019Or at Cannes.',
  },
  {
    id: 8,
    category: 'Sports',
    question: 'How many players are on a standard volleyball team on the court?',
    options: ['5', '6', '7', '8'],
    correctIndex: 1,
    explanation: 'A standard volleyball team has 6 players on the court at any given time during a match.',
  },
  {
    id: 9,
    category: 'General Knowledge',
    question: 'Which element has the chemical symbol Au?',
    options: ['Silver', 'Gold', 'Copper', 'Aluminum'],
    correctIndex: 1,
    explanation: 'Au comes from the Latin word "aurum", meaning gold. Gold has been prized since ancient times.',
  },
  {
    id: 10,
    category: 'General Knowledge',
    question: 'What is the longest river in the world?',
    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctIndex: 1,
    explanation: 'The Nile stretches approximately 6,650 km through northeastern Africa, making it the world\u2019s longest river.',
  },
]

export const leaderboardData = [
  { rank: 1, name: 'You', score: 4847, initials: 'Y' },
  { rank: 2, name: 'Sarah M.', score: 4210, initials: 'SM' },
  { rank: 3, name: 'Mike T.', score: 3890, initials: 'MT' },
  { rank: 4, name: 'Emma W.', score: 3654, initials: 'EW' },
  { rank: 5, name: 'Alex K.', score: 3421, initials: 'AK' },
  { rank: 6, name: 'Lisa P.', score: 3187, initials: 'LP' },
]
