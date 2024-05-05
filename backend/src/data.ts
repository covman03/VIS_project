import { Product } from './models/productModel'
import bcrypt from 'bcryptjs'
import { User } from './models/userModel'

export const sampleProducts: Product[] = [
  {
    nazev:
      'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l',
    cena: 260,
    popis:
      'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
    image: '../images/Castrol-edge.png',
    kategorie: 'olej',
    znacka: 'Castrol',
    pocetKusu: 10,
    rating: 3.0,
    numReviews: 10,
  },
  {
    nazev:
      'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l-1',
    cena: 260,
    popis:
      'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
    image: '../images/Castrol-edge.png',
    kategorie: 'olej',
    znacka: 'Castrol',
    pocetKusu: 10,
    rating: 3.0,
    numReviews: 10,
  },
  {
    nazev:
      'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l-2',
    cena: 260,
    popis:
      'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
    image: '../images/Castrol-edge.png',
    kategorie: 'olej',
    znacka: 'Castrol',
    pocetKusu: 10,
    rating: 3.0,
    numReviews: 10,
  },
  {
    nazev:
      'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l-3',
    cena: 260,
    popis:
      'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
    image: '../images/Castrol-edge.png',
    kategorie: 'olej',
    znacka: 'Castrol',
    pocetKusu: 10,
    rating: 3.0,
    numReviews: 10,
  },
  {
    nazev:
      'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l-4',
    cena: 260,
    popis:
      'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
    image: '../images/Castrol-edge.png',
    kategorie: 'olej',
    znacka: 'Castrol',
    pocetKusu: 10,
    rating: 3.0,
    numReviews: 10,
  },
  {
    nazev:
      'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l-5',
    cena: 260,
    popis:
      'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
    image: '../images/Castrol-edge.png',
    kategorie: 'olej',
    znacka: 'Castrol',
    pocetKusu: 10,
    rating: 3.0,
    numReviews: 10,
  },
  {
    nazev: 'Motorový olej Castrol EDGE Titanium Professional A5 0W-30, 1L',
    slug: 'motorovy-olej-castrol-edge-titanium-professional-a5-0w-30-1l',
    cena: 300,
    popis:
      'olej motorový, syntetický, balení 1 litr, specifikace: SAE 0W-30, ACEA A1/B1, A5/B5, API SL/CF, Volvo cars recommends Castrol EDGE Professional',
    image: '../images/Castrol-edge.png',
    kategorie: 'olej',
    znacka: 'Castrol',
    pocetKusu: 10,
    rating: 4,
    numReviews: 10,
  },
  {
    nazev: 'Motorový olej Ford Motorcraft A5 5W-30, 5L',
    slug: 'motorovy-olej-ford-motorcraft-a5-5w-30-5l',
    cena: 969,
    popis:
      'olej motorový, syntetický, balení 5 litrů, specifikace: SAE 5W-30, ACEA A1/B1, A5/B5, API SM/CF, ILSAC GF-4, Ford WSS M2C913-A, Ford WSS M2C913-B, Ford WSS M2C913-C, Ford WSS M2C913-D',
    image: '../images/Castrol-edge.png',
    kategorie: 'olej',
    znacka: 'Motorcraft',
    pocetKusu: 0,
    rating: 3.0,
    numReviews: 10,
  },
]

export const ukazkovyUzivatel: User[] = [
  {
    name: 'Martin',
    email: 'zelik.martin@email.cz',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]