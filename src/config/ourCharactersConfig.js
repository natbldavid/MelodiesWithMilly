// src/config/partyCharacters.js

// 1) Import your images so Vite can bundle them:
import icequeenImg     from '../assets/mwmelsa.jpg';
import polynesianprincessImg from '../assets/mwmpolynesianprincess.jpg';
import mermaidPrincessImg    from '../assets/mwmmermaidPrincess.jpg';
import princessbeautyImg from '../assets/mwmprincessbeauty.jpg';
import thegoodwitchImg from '../assets/mwmprincessworldphoto.jpg';
import colombianprincessImg from '../assets/mwmcolombianprincess.jpg';
import spiderheroImg from '../assets/mwmspider.jpg';
import snowsisterImg from '../assets/mwmanna.jpg';
import starryprincessImg from '../assets/mwmfairy.jpg';
import towerprincessImg from '../assets/mwmfairy.jpg';
import beautyqueenImg from '../assets/mwmbarbie.jpg';
import melodyImg from '../assets/mwmfairy2.jpg';
import carribeanmermaidImg from '../assets/mwmpirate.jpg';
import arabianprincessImg from '../assets/mwmarabianprincess.jpg';
import southernprincessImg from '../assets/mwmtoad.jpg';
import queenofmeanImg from '../assets/mwmqueenofmean.jpg';
import melodyelfImg from '../assets/mwmelf.jpg';
import winniethewitchImg from '../assets/mwmwinniethewitch.jpg';
import noncharacterImg from '../assets/mwmwinniethewitch.jpg';

// 2) Define an array of character objects:
const partyCharacters = [
  {
    id:    'icequeen',
    name:  'Ice Queen',
    power: 'Ability to create snowstorms and form ice',
    photo: icequeenImg,
  },
  {
    id:    'polynesianprincess',
    name:  'Polynesian Princess',
    power: 'Connection with the sea',
    photo: polynesianprincessImg,
  },
  {
    id:    'mermaidPrincess',
    name:  'Mermaid Princess',
    power: 'Fantastic swimmer & very adventurous',
    photo: mermaidPrincessImg,
  },
      {
    id:    'princessbeauty',
    name:  'Princess Beauty',
    power: 'Talking to cutlery and tableware',
    photo: princessbeautyImg,
  },
      {
    id:    'thegoodwitch',
    name:  'The Good Witch',
    power: 'Being popular',
    photo: thegoodwitchImg,
  },
      {
    id:    'colombianprincess',
    name:  'Colombian Princess',
    power: 'Being the heart of her familia and community',
    photo: colombianprincessImg,
  },
      {
    id:    'spiderhero',
    name:  'Spider-Hero',
    power: 'Acrobatics and shooting webs',
    photo: spiderheroImg,
  },
      {
    id:    'snowsister',
    name:  'Snow Sister',
    power: 'Staying positive, being the best sister and Princess to her town',
    photo: snowsisterImg,
  },
      {
    id:    'starryprincess',
    name:  'Starry Princess',
    power: 'Dreaming big and inspiring others',
    photo: starryprincessImg,
  },
      {
    id:    'towerprincess',
    name:  'Tower Princess',
    power: 'Healing the sick with her lustrous long hair ',
    photo: towerprincessImg,
  },
      {
    id:    'beautyqueen',
    name:  'Beauty Queen',
    power: 'Always looking fabulous and empowering women!',
    photo: beautyqueenImg,
  },
     {
    id:    'melody',
    name:  'Melody, the Fairy Princess',
    power: 'Being kind and lots of fun',
    photo: melodyImg,
  },
      {
    id:    'caribbeanmermaid',
    name:  'Caribbean Mermaid',
    power: 'Beautiful voice',
    photo: carribeanmermaidImg,
  },
      {
    id:    'arabianprincess',
    name:  'Arabian Princess',
    power: 'Being compassionate, speaking to genies and flying on magic carpets',
    photo: arabianprincessImg,
  },
    {
    id:    'southernprincess',
    name:  'Southern Princess',
    power: 'Creating the most magical gumbo & beignets',
    photo: southernprincessImg,
  },
      {
    id:    'queenofmean',
    name:  'Queen of Mean',
    power: 'Being mean',
    photo: queenofmeanImg,
  },
        {
    id:    'melodytheelf',
    name:  'Melody, the Elf',
    power: 'Checking whos naughty or nice and being Santas best helper',
    photo: melodyelfImg,
  },
          {
    id:    'winniethewitch',
    name:  'Winnie the Witch',
    power: 'Creating spells',
    photo: winniethewitchImg,
  },
            {
    id:    'noncharacterentertainer',
    name:  'Non-Character Entertainer',
    power: 'Entertaining lots of children',
    photo: noncharacterImg,
  },

];

// 3) Export for use in your components:
export default partyCharacters;