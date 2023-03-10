import type { Link } from '@ixtlan-nx/shared-types';

//TODO: should come from API
export const links: Link[] = [
  {
    id: '1',
    title: 'Mystery Skools Insta',
    url: 'https://instagram.com/mystery.skools',
    visible: true,
    dateCreated: '2023-01-08T02:35:06.060Z',
    lastUpdate: null,
    type: 'social',
    svg: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '-70 -150 1000 1000',
      fill: 'currentColor',
      d: 'M571 500q0-59-41-101t-101-42-101 42-42 101 42 101 101 42 101-42 41-101zm77 0q0 91-64 156t-155 64-156-64-64-156 64-156 156-64 155 64 64 156zm61-229q0 21-15 36t-37 15-36-15-15-36 15-36 36-15 37 15 15 36zM429 148H327l-54 2-57 5-40 11q-28 11-49 32t-33 49q-6 16-10 40t-6 58-1 53 0 59 0 43 0 43 0 59 1 53 6 58l10 40q12 28 33 49t49 32q16 6 40 11t57 5 54 2 59 0 43 0 42 0 59 0 54-2 58-5 39-11q28-11 50-32t32-49q6-16 10-40t6-58 1-53 0-59 0-43 0-43 0-59-1-53-6-58l-10-40q-11-28-32-49t-50-32q-16-6-39-11t-58-5-54-2-59 0-42 0zm428 352q0 128-3 177-5 116-69 180t-179 69q-50 3-177 3t-177-3q-116-6-180-69T3 677q-3-49-3-177t3-177q5-116 69-180t180-69q49-3 177-3t177 3q116 6 179 69t69 180q3 49 3 177z',
    },
  },
  {
    id: '2',
    title: 'Mystery Skools Twitter',
    url: 'https://twitter.com',
    visible: true,
    dateCreated: '2023-01-08T02:35:06.060Z',
    lastUpdate: null,
    type: 'social',
    svg: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '-40 -150 1000 1000',
      fill: 'currentColor',
      d: 'M904 228q-37 54-90 93v23q0 73-21 145t-64 139-103 117-144 82-181 30q-151 0-276-81 19 3 43 3 126 0 224-77-59-2-105-36t-64-89q19 2 34 2 24 0 48-6-63-13-104-62T60 396v-2q38 21 82 23-37-25-59-64t-22-86q0-49 25-91 68 83 164 133t208 55q-5-21-5-41 0-75 53-127t127-53q79 0 132 57 61-12 114-44-20 64-79 100 52-6 104-28z',
    },
  },
];
