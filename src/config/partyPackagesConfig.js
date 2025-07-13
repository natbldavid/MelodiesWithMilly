// src/config/partyPackagesConfig.js

import oneCategoryImg     from '../assets/mwmfunpartyphoto.JPG';
import twoCategoryImg     from '../assets/mwmtwoentertainerspackagebronze.JPG';
import virtualCategoryImg from '../assets/mwmroyalvideomessage.jpg';

import oneBronzeImg       from '../assets/mwmfunpartyphoto.jpg';
import oneSilverImg       from '../assets/mwmmainofficalreal.jpg';
import oneGoldImg         from '../assets/mwmsweetpartyphoto.jpg';
import oneDiamondImg      from '../assets/mwmmidparty.jpg';

import twoBronzeImg       from '../assets/mwmtwoentertainerspackagebronze.jpg';
import twoSilverImg       from '../assets/mwmtwoentertainerspackagesilver.jpg';
import twoGoldImg         from '../assets/mwmtwoentertainerspackagegold.jpg';
import twoDiamondImg      from '../assets/mwmtwoentertainerspackagebronze.jpg';

import virtualRoyalImg    from '../assets/mwmroyalvideomessage.jpg';
import virtualFestiveImg  from '../assets/mwmfestivevideomessage.jpg';

const partyPackages = [
  {
    id: 'one-entertainer',
    title: 'One Entertainer Packages',
    categoryImage: oneCategoryImg,
    packages: [
      {
        id: 'one-bronze',
        name: 'Bronze 30 min Party',
        price: 'from £90',
        image: oneBronzeImg,
        features: [
          'Party games',
          'A song from the chosen entertainer',
          'A gift for the birthday child',
          'and more...'
        ],
      },
      {
        id: 'one-silver',
        name: 'Silver 1hr Party',
        price: 'from £145',
        image: oneSilverImg,
        features: [
          'Party games',
          'A song from the chosen entertainer',
          'Pass the parcel',
          'Bubbles',
          'and more...'
        ],
      },
      {
        id: 'one-gold',
        name: 'Gold 90 min Party',
        price: 'from £175',
        image: oneGoldImg,
        features: [
          'Party games',
          'A song from the chosen entertainer',
          'Pass the parcel',
          'Bubbles',
          'Crafts',
          'and more...'
        ],
      },
      {
        id: 'one-diamond',
        name: 'Diamond 2hr Party',
        price: 'from £200',
        image: oneDiamondImg,
        features: [
          'Party games',
          'A song from the chosen entertainer',
          'Pass the parcel',
          'Bubbles',
          'Crafts',
          'Snack break',
          'Tattoos',
          'Glitter',
          'and more...'
        ],
      },
    ],
  },
  {
    id: 'two-entertainer',
    title: 'Two Entertainer Packages',
    categoryImage: twoCategoryImg,
    packages: [
      {
        id: 'two-bronze',
        name: 'Bronze 30 min Party',
        price: 'from £150',
        image: twoBronzeImg,
        features: [
          'Party games',
          'A song from the chosen entertainer',
          'A gift for the birthday child',
          'and more...'
        ],
      },
      {
        id: 'two-silver',
        name: 'Silver 1hr Party',
        price: 'from £250',
        image: twoSilverImg,
        features: [
          'Party games',
          'A song from the chosen entertainer',
          'Pass the parcel',
          'Bubbles',
          'and more...'
        ],
      },
      {
        id: 'two-gold',
        name: 'Gold 90 min Party',
        price: 'from £290',
        image: twoGoldImg,
        features: [
          'Party games',
          'A song from the chosen entertainer',
          'Pass the parcel',
          'Bubbles',
          'Crafts',
          'and more...'
        ],
      },
      {
        id: 'two-diamond',
        name: 'Diamond 2hr Party',
        price: 'from £330',
        image: twoDiamondImg,
        features: [
          'Party games',
          'A song from the chosen entertainer',
          'Pass the parcel',
          'Bubbles',
          'Crafts',
          'Snack break',
          'Tattoos',
          'Glitter',
          'and more...'
        ],
      },
    ],
  },
  {
    id: 'virtual',
    title: 'Virtual Packages',
    categoryImage: virtualCategoryImg,
    packages: [
      {
        id: 'virtual-royal-message',
        name: 'Royal Video Message',
        price: 'from £15',
        image: virtualRoyalImg,
        features: [
          'Personalised video message from a princess of your chooice'
        ],
      },
      {
        id: 'virtual-festive-message',
        name: 'Festive Video Message',
        price: 'from £10',
        image: virtualFestiveImg,
        features: [
          'Personalised message from Melody the Elf - £10',
          'Christmas greeting from Father Christmas AND Melody the Elf personal message - £15',
        ],
      },
    ],
  },
];

export default partyPackages;
