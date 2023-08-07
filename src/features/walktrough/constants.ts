import { Slide } from './types';

const propertyDiversityImage = require('@assets/images/property-diversity.png');
const safeSecurityImage = require('@assets/images/safe-security.png');
const convenientTransactionImage = require('@assets/images/convenient-transaction.png');

export const slides: Slide[] = [
  {
    title: 'Property',
    subtitle: 'Diversity',
    isReversed: false,
    image: propertyDiversityImage,
  },
  {
    title: 'Safe',
    subtitle: 'Security',
    isReversed: false,
    image: safeSecurityImage,
  },
  {
    title: 'Convenient',
    subtitle: 'Transaction',
    isReversed: true,
    image: convenientTransactionImage,
  },
];
