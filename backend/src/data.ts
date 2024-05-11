import { Product } from './models/productModel'
import bcrypt from 'bcryptjs'
import { User } from './models/userModel'

export const sampleProducts: Product[] = [
  {
    nazev:
      'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l1',
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
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l12',
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
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l3',
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
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l2',
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
    slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l4',
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
