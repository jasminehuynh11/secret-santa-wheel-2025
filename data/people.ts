export interface Person {
  id: string;
  name: string;
  aliases: string[];
  gender: 'male' | 'female';
  starSign: string;
  hint: string;
  avatar: string;
}

export const people: Person[] = [
  {
    id: 'khanh',
    name: 'Khánh',
    aliases: ['Bub', 'Sue'],
    gender: 'female',
    starSign: 'Virgo',
    hint: 'She likes skincare related products (mask, clay mask), stuffs could be useful',
    avatar: '👩',
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    aliases: [],
    gender: 'female',
    starSign: 'Taurus',
    hint: 'She likes healthcare related products (vitamin, gummy vitamin), skincare, stuffs could be useful',
    avatar: '👩',
  },
  {
    id: 'tan',
    name: 'Tan',
    aliases: ['Tấn Dũng'],
    gender: 'male',
    starSign: 'Aquarius',
    hint: 'he likes ...',
    avatar: '👨',
  },
  {
    id: 'vinh-nguyen',
    name: 'Vĩnh Nguyên',
    aliases: [],
    gender: 'male',
    starSign: 'Aquarius',
    hint: 'He likes dog related products (toy, treat), stuffs could make his dog happy',
    avatar: '👨',
  },
  {
    id: 'chi-nga',
    name: 'Chị Nga',
    aliases: [],
    gender: 'female',
    starSign: 'Sagittarius',
    hint: 'She likes anything cute',
    avatar: '👩',
  },
  {
    id: 'linh-dan',
    name: 'Linh Đan',
    aliases: [],
    gender: 'female',
    starSign: 'Leo',
    hint: 'she likes ...',
    avatar: '👩',
  },
];

export function getPersonById(id: string): Person | undefined {
  return people.find(p => p.id === id);
}

export function getPersonByName(name: string): Person | undefined {
  return people.find(p => 
    p.name.toLowerCase() === name.toLowerCase() ||
    p.aliases.some(alias => alias.toLowerCase() === name.toLowerCase())
  );
}

