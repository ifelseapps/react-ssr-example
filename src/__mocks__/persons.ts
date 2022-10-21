import { Person } from '../types/person';

export const PERSONS_MOCK: Person[] = [
  {
    name: 'Владислав',
    surname: 'Поляков',
    email: 'vlad@pyatnica.tv',
    phone: '+7 (903) 123-45-65',
    pic: 'https://www.kinopoisk.ru/images/sm_actor/1193331.jpg'
  },
  {
    name: 'Андрей',
    surname: 'Симонов',
    email: 'simonov@pyatnica.tv',
    phone: '+7 (910) 143-45-65',
    pic: 'https://www.kinopoisk.ru/images/sm_actor/565974.jpg'
  },
  {
    name: 'Игорь',
    surname: 'Жмых',
    email: 'jmyh@pyatnica.tv',
    phone: '+7 (911) 689-35-23',
    pic: 'https://www.kinopoisk.ru/images/sm_actor/1324756.jpg'
  },
  {
    name: 'Валерий',
    surname: 'Киселев',
    email: 'kokos@pyatnica.tv',
    phone: '+7 (923) 222-55-55',
    pic: 'https://www.kinopoisk.ru/images/sm_actor/1556984.jpg'
  },
  {
    name: 'Мария',
    surname: 'Мельникова',
    email: 'm.melnikova@pyatnica.tv',
    phone: '+7 (903) 456-53-88',
    pic: 'https://www.kinopoisk.ru/images/sm_actor/3676537.jpg'
  },
  {
    name: 'Василий',
    surname: 'Куренной',
    email: 'kurenok@pyatnica.tv',
    phone: '+7 (905) 769-23-11',
    pic: 'https://www.kinopoisk.ru/images/sm_actor/1634100.jpg'
  },
];

export const getPersons = () => new Promise<Person[]>((resolve) => {
  setTimeout(() => resolve(PERSONS_MOCK), 2000);
});
