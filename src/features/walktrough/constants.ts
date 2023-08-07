import { Slide } from './types';

const propertyDiversityImage = require('@assets/images/property-diversity.png');
const safeSecurityImage = require('@assets/images/safe-security.png');
const convenientTransactionImage = require('@assets/images/convenient-transaction.png');

export const slides: Slide[] = [
  {
    heading: 'Property',
    subtitle: 'Diversity',
    isReversed: false,
    image: propertyDiversityImage,
  },
  {
    heading: 'Safe',
    subtitle: 'Security',
    isReversed: false,
    image: safeSecurityImage,
  },
  {
    heading: 'Convenient',
    subtitle: 'Transaction',
    isReversed: true,
    image: convenientTransactionImage,
  },
];
