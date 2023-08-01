import { Slide } from './types';

const propertyDiversityIllustration = require('@assets/images/property-diversity.png');
const safeSecurityIllustration = require('@assets/images/safe-security.png');
const convenientTransactionIllustration = require('@assets/images/convenient-transaction.png');

export const slides: Slide[] = [
  {
    imageSource: propertyDiversityIllustration,
    title: { tx: 'walktrough.property', isGradient: false },
    description: { tx: 'walktrough.diversity', isGradient: true },
  },
  {
    imageSource: safeSecurityIllustration,
    title: { tx: 'walktrough.safe', isGradient: false },
    description: { tx: 'walktrough.security', isGradient: true },
  },
  {
    imageSource: convenientTransactionIllustration,
    title: { tx: 'walktrough.convenient', isGradient: true },
    description: { tx: 'walktrough.transaction', isGradient: false },
  },
];
