"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ukazkovyUzivatel = exports.sampleProducts = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.sampleProducts = [
    {
        nazev: 'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
        slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l1',
        cena: 260,
        popis: 'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
        image: '../images/Castrol-edge.png',
        kategorie: 'olej',
        znacka: 'Castrol',
        pocetKusu: 10,
        rating: 3.0,
        numReviews: 10,
    },
    {
        nazev: 'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
        slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l12',
        cena: 260,
        popis: 'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
        image: '../images/Castrol-edge.png',
        kategorie: 'olej',
        znacka: 'Castrol',
        pocetKusu: 10,
        rating: 3.0,
        numReviews: 10,
    },
    {
        nazev: 'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
        slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l3',
        cena: 260,
        popis: 'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
        image: '../images/Castrol-edge.png',
        kategorie: 'olej',
        znacka: 'Castrol',
        pocetKusu: 10,
        rating: 3.0,
        numReviews: 10,
    },
    {
        nazev: 'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
        slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l2',
        cena: 260,
        popis: 'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
        image: '../images/Castrol-edge.png',
        kategorie: 'olej',
        znacka: 'Castrol',
        pocetKusu: 10,
        rating: 3.0,
        numReviews: 10,
    },
    {
        nazev: 'Motorový olej Castrol EDGE Titanium Professional LongLife III 5W-30, 1L',
        slug: 'motorovy-olej-castrol-edge-titanium-professional-longlife-iii-5w-30-1l4',
        cena: 260,
        popis: 'olej motorový, syntetický, balení 1 litr, specifikace: SAE 5W-30, ACEA C3, VW 504 00/ 507 00, Porsche C30',
        image: '../images/Castrol-edge.png',
        kategorie: 'olej',
        znacka: 'Castrol',
        pocetKusu: 10,
        rating: 3.0,
        numReviews: 10,
    },
];
exports.ukazkovyUzivatel = [
    {
        name: 'Martin',
        email: 'zelik.martin@email.cz',
        password: bcryptjs_1.default.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: 'John',
        email: 'user@example.com',
        password: bcryptjs_1.default.hashSync('123456'),
        isAdmin: false,
    },
];
