/**
 * WORLD COUNTRIES ATLAS — Gamility Explorer
 * Client-Side Geopolitical Discovery Engine, Nations Comparator & Geography Quiz Master
 * Copyright © 2026 Gamility (All Rights Reserved)
 */

(function () {
  'use strict';

  /* ==========================================================================
     CURATED DATASET: 50 SOVEREIGN NATIONS
     ========================================================================== */
  const COUNTRIES_DATA = [
    // --- ASIA ---
    {
      id: 'jp',
      name: 'Japan',
      officialName: 'State of Japan',
      capital: 'Tokyo',
      continent: 'Asia',
      subregion: 'Eastern Asia',
      flagCode: 'jp',
      emoji: '🇯🇵',
      population: 125120000,
      areaKm2: 377975,
      currency: { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
      languages: ['Japanese'],
      utcOffsetHours: 9,
      dialCode: '+81',
      tld: '.jp',
      drivingSide: 'Left',
      borders: [],
      unMember: true,
      funFacts: [
        'Consists of over 6,800 islands, with Honshu, Hokkaido, Kyushu, and Shikoku forming 97% of its landmass.',
        'Home to Mount Fuji, an active stratovolcano and UNESCO World Heritage cultural icon.',
        'Boasts the highest density of automated vending machines in the world per capita.'
      ]
    },
    {
      id: 'in',
      name: 'India',
      officialName: 'Republic of India',
      capital: 'New Delhi',
      continent: 'Asia',
      subregion: 'Southern Asia',
      flagCode: 'in',
      emoji: '🇮🇳',
      population: 1428627663,
      areaKm2: 3287263,
      currency: { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
      languages: ['Hindi', 'English', 'Bengali', 'Tamil', 'Telugu'],
      utcOffsetHours: 5.5,
      dialCode: '+91',
      tld: '.in',
      drivingSide: 'Left',
      borders: ['Pakistan', 'China', 'Nepal', 'Bhutan', 'Bangladesh', 'Myanmar'],
      unMember: true,
      funFacts: [
        'The most populous nation on Earth with over 1.42 billion citizens.',
        'Birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.',
        'Houses the Himalayas, containing 9 of the 10 highest mountain peaks globally.'
      ]
    },
    {
      id: 'cn',
      name: 'China',
      officialName: "People's Republic of China",
      capital: 'Beijing',
      continent: 'Asia',
      subregion: 'Eastern Asia',
      flagCode: 'cn',
      emoji: '🇨🇳',
      population: 1411750000,
      areaKm2: 9596961,
      currency: { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
      languages: ['Standard Mandarin'],
      utcOffsetHours: 8,
      dialCode: '+86',
      tld: '.cn',
      drivingSide: 'Right',
      borders: ['Mongolia', 'Russia', 'India', 'Kazakhstan', 'North Korea', 'Vietnam', 'Myanmar', 'Nepal'],
      unMember: true,
      funFacts: [
        'Spans 5 geographical timezones, yet officially observes a single unified timezone: Beijing Time (UTC+8).',
        'Home to the Great Wall, stretching over 21,196 kilometers across northern frontiers.',
        'Native and sole natural habitat for wild Giant Pandas in the bamboo forests of Sichuan.'
      ]
    },
    {
      id: 'kr',
      name: 'South Korea',
      officialName: 'Republic of Korea',
      capital: 'Seoul',
      continent: 'Asia',
      subregion: 'Eastern Asia',
      flagCode: 'kr',
      emoji: '🇰🇷',
      population: 51745000,
      areaKm2: 100210,
      currency: { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
      languages: ['Korean'],
      utcOffsetHours: 9,
      dialCode: '+82',
      tld: '.kr',
      drivingSide: 'Right',
      borders: ['North Korea'],
      unMember: true,
      funFacts: [
        'Seoul capital area is home to roughly half of the entire nation’s population.',
        'World leader in high-speed optical fiber internet penetration and 5G cellular infrastructure.',
        'Invented Hangul, one of the most scientific and phonetically systematic alphabets in human history.'
      ]
    },
    {
      id: 'id',
      name: 'Indonesia',
      officialName: 'Republic of Indonesia',
      capital: 'Jakarta',
      continent: 'Asia',
      subregion: 'South-Eastern Asia',
      flagCode: 'id',
      emoji: '🇮🇩',
      population: 277534122,
      areaKm2: 1904569,
      currency: { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
      languages: ['Indonesian'],
      utcOffsetHours: 7,
      dialCode: '+62',
      tld: '.id',
      drivingSide: 'Left',
      borders: ['Malaysia', 'Papua New Guinea', 'Timor-Leste'],
      unMember: true,
      funFacts: [
        'The largest archipelagic state in the world, consisting of over 17,500 islands.',
        'Only place on Earth where the world’s heaviest living lizard, the Komodo Dragon, exists in the wild.',
        'Contains over 130 active volcanoes, located directly along the Pacific Ring of Fire.'
      ]
    },
    {
      id: 'sa',
      name: 'Saudi Arabia',
      officialName: 'Kingdom of Saudi Arabia',
      capital: 'Riyadh',
      continent: 'Asia',
      subregion: 'Western Asia',
      flagCode: 'sa',
      emoji: '🇸🇦',
      population: 36408820,
      areaKm2: 2149690,
      currency: { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
      languages: ['Arabic'],
      utcOffsetHours: 3,
      dialCode: '+966',
      tld: '.sa',
      drivingSide: 'Right',
      borders: ['Jordan', 'Iraq', 'Kuwait', 'Qatar', 'United Arab Emirates', 'Oman', 'Yemen'],
      unMember: true,
      funFacts: [
        'Occupies roughly 80% of the entire Arabian Peninsula.',
        'Contains the Rub al-Khali ("Empty Quarter"), the world’s largest contiguous sand desert.',
        'The flag features a green field with the Shahada script and a horizontal sword, legally never flown at half-mast.'
      ]
    },
    {
      id: 'sg',
      name: 'Singapore',
      officialName: 'Republic of Singapore',
      capital: 'Singapore',
      continent: 'Asia',
      subregion: 'South-Eastern Asia',
      flagCode: 'sg',
      emoji: '🇸🇬',
      population: 5917600,
      areaKm2: 728,
      currency: { code: 'SGD', name: 'Singapore Dollar', symbol: '$' },
      languages: ['English', 'Malay', 'Mandarin', 'Tamil'],
      utcOffsetHours: 8,
      dialCode: '+65',
      tld: '.sg',
      drivingSide: 'Left',
      borders: [],
      unMember: true,
      funFacts: [
        'One of only three sovereign city-states surviving in the modern world (alongside Monaco and Vatican City).',
        'Has expanded its total physical land area by over 25% through innovative maritime land reclamation.',
        'Home to Gardens by the Bay and the world’s tallest indoor waterfall at Jewel Changi Airport.'
      ]
    },
    {
      id: 'th',
      name: 'Thailand',
      officialName: 'Kingdom of Thailand',
      capital: 'Bangkok',
      continent: 'Asia',
      subregion: 'South-Eastern Asia',
      flagCode: 'th',
      emoji: '🇹🇭',
      population: 71697030,
      areaKm2: 513120,
      currency: { code: 'THB', name: 'Thai Baht', symbol: '฿' },
      languages: ['Thai'],
      utcOffsetHours: 7,
      dialCode: '+66',
      tld: '.th',
      drivingSide: 'Left',
      borders: ['Myanmar', 'Laos', 'Cambodia', 'Malaysia'],
      unMember: true,
      funFacts: [
        'The only nation in Southeast Asia that was never colonized by any European empire.',
        'Bangkok’s full ceremonial ceremonial name has 168 letters, holding the Guinness World Record for longest place name.',
        'Over 90% of the population practices Theravada Buddhism.'
      ]
    },
    {
      id: 'vn',
      name: 'Vietnam',
      officialName: 'Socialist Republic of Vietnam',
      capital: 'Hanoi',
      continent: 'Asia',
      subregion: 'South-Eastern Asia',
      flagCode: 'vn',
      emoji: '🇻🇳',
      population: 98186856,
      areaKm2: 331212,
      currency: { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
      languages: ['Vietnamese'],
      utcOffsetHours: 7,
      dialCode: '+84',
      tld: '.vn',
      drivingSide: 'Right',
      borders: ['China', 'Laos', 'Cambodia'],
      unMember: true,
      funFacts: [
        'Second largest coffee exporter in the world behind Brazil, renowned for Robusta beans.',
        'Contains Son Doong Cave, the world’s largest natural cave passage with its own localized cloud weather system.',
        'Features an iconic 3,260-kilometer elongated coastline shaped like the letter "S".'
      ]
    },
    {
      id: 'ae',
      name: 'United Arab Emirates',
      officialName: 'United Arab Emirates',
      capital: 'Abu Dhabi',
      continent: 'Asia',
      subregion: 'Western Asia',
      flagCode: 'ae',
      emoji: '🇦🇪',
      population: 9441129,
      areaKm2: 83600,
      currency: { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
      languages: ['Arabic', 'English'],
      utcOffsetHours: 4,
      dialCode: '+971',
      tld: '.ae',
      drivingSide: 'Right',
      borders: ['Oman', 'Saudi Arabia'],
      unMember: true,
      funFacts: [
        'Home to the Burj Khalifa in Dubai, standing at 828 meters as the tallest man-made structure ever constructed.',
        'A federation formed by seven distinct sovereign emirates.',
        'Has a dedicated government Minister of State for Artificial Intelligence and a Ministry of Happiness.'
      ]
    },
    {
      id: 'my',
      name: 'Malaysia',
      officialName: 'Malaysia',
      capital: 'Kuala Lumpur',
      continent: 'Asia',
      subregion: 'South-Eastern Asia',
      flagCode: 'my',
      emoji: '🇲🇾',
      population: 33938221,
      areaKm2: 330803,
      currency: { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
      languages: ['Malay', 'English', 'Mandarin', 'Tamil'],
      utcOffsetHours: 8,
      dialCode: '+60',
      tld: '.my',
      drivingSide: 'Left',
      borders: ['Thailand', 'Indonesia', 'Brunei'],
      unMember: true,
      funFacts: [
        'Separated into Peninsular Malaysia and Malaysian Borneo by 640 kilometers of the South China Sea.',
        'Home to the Petronas Twin Towers, the tallest twin towers on Earth.',
        'Taman Negara rainforest is estimated to be over 130 million years old, older than the Amazon.'
      ]
    },
    {
      id: 'ph',
      name: 'Philippines',
      officialName: 'Republic of the Philippines',
      capital: 'Manila',
      continent: 'Asia',
      subregion: 'South-Eastern Asia',
      flagCode: 'ph',
      emoji: '🇵🇭',
      population: 115559009,
      areaKm2: 300000,
      currency: { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
      languages: ['Filipino', 'English'],
      utcOffsetHours: 8,
      dialCode: '+63',
      tld: '.ph',
      drivingSide: 'Right',
      borders: [],
      unMember: true,
      funFacts: [
        'Composed of 7,641 islands in the western Pacific Ocean.',
        'The only country in the world whose national flag is inverted upside down (red stripe on top) when at war.',
        'World’s primary habitat for the Philippine Eagle, one of the largest and rarest eagles on Earth.'
      ]
    },
    {
      id: 'tr',
      name: 'Turkey',
      officialName: 'Republic of Türkiye',
      capital: 'Ankara',
      continent: 'Asia',
      subregion: 'Western Asia',
      flagCode: 'tr',
      emoji: '🇹🇷',
      population: 85372377,
      areaKm2: 783562,
      currency: { code: 'OTHER', name: 'Turkish Lira', symbol: '₺' },
      languages: ['Turkish'],
      utcOffsetHours: 3,
      dialCode: '+90',
      tld: '.tr',
      drivingSide: 'Right',
      borders: ['Greece', 'Bulgaria', 'Georgia', 'Armenia', 'Azerbaijan', 'Iran', 'Iraq', 'Syria'],
      unMember: true,
      funFacts: [
        'Straddles two continents, Europe and Asia, across the Bosphorus Strait.',
        'Istanbul is the only metropolis in the world located on two separate continents.',
        'Home to Göbekli Tepe, widely recognized as the oldest known monumental temple complex built by humanity (~9500 BCE).'
      ]
    },

    // --- EUROPE ---
    {
      id: 'gb',
      name: 'United Kingdom',
      officialName: 'United Kingdom of Great Britain and Northern Ireland',
      capital: 'London',
      continent: 'Europe',
      subregion: 'Northern Europe',
      flagCode: 'gb',
      emoji: '🇬🇧',
      population: 67736802,
      areaKm2: 242495,
      currency: { code: 'GBP', name: 'British Pound', symbol: '£' },
      languages: ['English', 'Welsh', 'Scots', 'Irish'],
      utcOffsetHours: 0,
      dialCode: '+44',
      tld: '.uk',
      drivingSide: 'Left',
      borders: ['Ireland'],
      unMember: true,
      funFacts: [
        'Home to Greenwich Royal Observatory, which defines the Prime Meridian (Longitude 0°) and Greenwich Mean Time (GMT).',
        'The London Underground ("The Tube") opened in 1863 as the world’s first subterranean passenger railway.',
        'Does not possess a single codified constitutional document, instead relying on centuries of statutes and precedent.'
      ]
    },
    {
      id: 'de',
      name: 'Germany',
      officialName: 'Federal Republic of Germany',
      capital: 'Berlin',
      continent: 'Europe',
      subregion: 'Western Europe',
      flagCode: 'de',
      emoji: '🇩🇪',
      population: 84482267,
      areaKm2: 357114,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['German'],
      utcOffsetHours: 1,
      dialCode: '+49',
      tld: '.de',
      drivingSide: 'Right',
      borders: ['Denmark', 'Poland', 'Czechia', 'Austria', 'Switzerland', 'France', 'Luxembourg', 'Belgium', 'Netherlands'],
      unMember: true,
      funFacts: [
        'Largest economy in Europe and 3rd largest economy in the world by nominal GDP.',
        'Over 65% of the national Autobahn highway network has no federally mandated speed limit.',
        'Home to over 20,000 historic castles and more than 1,500 distinct traditional beer breweries.'
      ]
    },
    {
      id: 'fr',
      name: 'France',
      officialName: 'French Republic',
      capital: 'Paris',
      continent: 'Europe',
      subregion: 'Western Europe',
      flagCode: 'fr',
      emoji: '🇫🇷',
      population: 68070697,
      areaKm2: 551695,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['French'],
      utcOffsetHours: 1,
      dialCode: '+33',
      tld: '.fr',
      drivingSide: 'Right',
      borders: ['Belgium', 'Luxembourg', 'Germany', 'Switzerland', 'Italy', 'Monaco', 'Spain', 'Andorra'],
      unMember: true,
      funFacts: [
        'Holds the global record for the most timezones of any sovereign nation (12 distinct zones) due to overseas departments.',
        'Remains the world’s most visited international tourist destination with over 90 million visitors annually.',
        'Covers the largest physical surface area of any member state in the European Union.'
      ]
    },
    {
      id: 'it',
      name: 'Italy',
      officialName: 'Italian Republic',
      capital: 'Rome',
      continent: 'Europe',
      subregion: 'Southern Europe',
      flagCode: 'it',
      emoji: '🇮🇹',
      population: 58870762,
      areaKm2: 301340,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['Italian'],
      utcOffsetHours: 1,
      dialCode: '+39',
      tld: '.it',
      drivingSide: 'Right',
      borders: ['France', 'Switzerland', 'Austria', 'Slovenia', 'San Marino', 'Vatican City'],
      unMember: true,
      funFacts: [
        'Contains two entirely independent sovereign enclaves inside its mainland: Vatican City and San Marino.',
        'Holds 59 UNESCO World Heritage Sites, more than any other nation on the European continent.',
        'Shaped like a distinct high-heeled boot kicking the island of Sicily into the Mediterranean Sea.'
      ]
    },
    {
      id: 'es',
      name: 'Spain',
      officialName: 'Kingdom of Spain',
      capital: 'Madrid',
      continent: 'Europe',
      subregion: 'Southern Europe',
      flagCode: 'es',
      emoji: '🇪🇸',
      population: 48059777,
      areaKm2: 505990,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['Spanish', 'Catalan', 'Galician', 'Basque'],
      utcOffsetHours: 1,
      dialCode: '+34',
      tld: '.es',
      drivingSide: 'Right',
      borders: ['Portugal', 'France', 'Andorra', 'Gibraltar', 'Morocco'],
      unMember: true,
      funFacts: [
        'The Spanish anthem, "Marcha Real", is one of the very few national anthems in the world with no official lyrics.',
        'Produces over 40% of the entire world’s commercial olive oil supply.',
        'Shares an international land border in North Africa via the autonomous enclaves of Ceuta and Melilla.'
      ]
    },
    {
      id: 'nl',
      name: 'Netherlands',
      officialName: 'Kingdom of the Netherlands',
      capital: 'Amsterdam',
      continent: 'Europe',
      subregion: 'Western Europe',
      flagCode: 'nl',
      emoji: '🇳🇱',
      population: 17811291,
      areaKm2: 41850,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['Dutch', 'Frisian'],
      utcOffsetHours: 1,
      dialCode: '+31',
      tld: '.nl',
      drivingSide: 'Right',
      borders: ['Germany', 'Belgium'],
      unMember: true,
      funFacts: [
        'Roughly 26% of its territory sits below sea level, protected by a gargantuan system of dykes and storm surge barriers.',
        'There are more registered bicycles in the Netherlands (~23 million) than the total resident population.',
        'Second largest agricultural food exporter in the world by dollar value, using high-tech sustainable greenhouses.'
      ]
    },
    {
      id: 'ch',
      name: 'Switzerland',
      officialName: 'Swiss Confederation',
      capital: 'Bern',
      continent: 'Europe',
      subregion: 'Western Europe',
      flagCode: 'ch',
      emoji: '🇨🇭',
      population: 8853500,
      areaKm2: 41285,
      currency: { code: 'OTHER', name: 'Swiss Franc', symbol: 'CHF' },
      languages: ['German', 'French', 'Italian', 'Romansh'],
      utcOffsetHours: 1,
      dialCode: '+41',
      tld: '.ch',
      drivingSide: 'Right',
      borders: ['Germany', 'France', 'Italy', 'Austria', 'Liechtenstein'],
      unMember: true,
      funFacts: [
        'Its national flag is one of only two square sovereign national flags in the world (along with Vatican City).',
        'Has maintained armed geopolitical neutrality uninterrupted since the Congress of Vienna in 1815.',
        'Contains nuclear fallout shelter capacity sufficient to house 100% of its national population.'
      ]
    },
    {
      id: 'se',
      name: 'Sweden',
      officialName: 'Kingdom of Sweden',
      capital: 'Stockholm',
      continent: 'Europe',
      subregion: 'Northern Europe',
      flagCode: 'se',
      emoji: '🇸🇪',
      population: 10521556,
      areaKm2: 450295,
      currency: { code: 'OTHER', name: 'Swedish Krona', symbol: 'kr' },
      languages: ['Swedish'],
      utcOffsetHours: 1,
      dialCode: '+46',
      tld: '.se',
      drivingSide: 'Right',
      borders: ['Norway', 'Finland'],
      unMember: true,
      funFacts: [
        'Has the most islands of any country in the world, with an estimated 267,570 islands.',
        'Practices "Allemansrätten" (The Right to Public Access), allowing citizens to roam and camp freely across all wilderness.',
        'Imports waste from neighboring European countries to power its nationwide waste-to-energy heating plants.'
      ]
    },
    {
      id: 'no',
      name: 'Norway',
      officialName: 'Kingdom of Norway',
      capital: 'Oslo',
      continent: 'Europe',
      subregion: 'Northern Europe',
      flagCode: 'no',
      emoji: '🇳🇴',
      population: 5488984,
      areaKm2: 385207,
      currency: { code: 'OTHER', name: 'Norwegian Krone', symbol: 'kr' },
      languages: ['Norwegian', 'Sami'],
      utcOffsetHours: 1,
      dialCode: '+47',
      tld: '.no',
      drivingSide: 'Right',
      borders: ['Sweden', 'Finland', 'Russia'],
      unMember: true,
      funFacts: [
        'Its coastline, when measuring all intricate fjords, bays, and islands, stretches over 100,000 kilometers.',
        'Manages the Government Pension Fund Global, the world’s largest sovereign wealth fund holding over $1.7 trillion.',
        'Awarded the Nobel Peace Prize annually in Oslo, while the other Nobel Prizes are awarded in Stockholm.'
      ]
    },
    {
      id: 'gr',
      name: 'Greece',
      officialName: 'Hellenic Republic',
      capital: 'Athens',
      continent: 'Europe',
      subregion: 'Southern Europe',
      flagCode: 'gr',
      emoji: '🇬🇷',
      population: 10413982,
      areaKm2: 131957,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['Greek'],
      utcOffsetHours: 2,
      dialCode: '+30',
      tld: '.gr',
      drivingSide: 'Right',
      borders: ['Albania', 'North Macedonia', 'Bulgaria', 'Turkey'],
      unMember: true,
      funFacts: [
        'Regarded as the cradle of Western civilization, birthplace of democracy, Western philosophy, and the Olympic Games.',
        'Includes an archipelago of up to 6,000 islands and islets, of which only 227 are inhabited.',
        'No point in mainland Greece is located more than 137 kilometers away from the Mediterranean Sea.'
      ]
    },
    {
      id: 'pl',
      name: 'Poland',
      officialName: 'Republic of Poland',
      capital: 'Warsaw',
      continent: 'Europe',
      subregion: 'Eastern Europe',
      flagCode: 'pl',
      emoji: '🇵🇱',
      population: 37748910,
      areaKm2: 312696,
      currency: { code: 'OTHER', name: 'Polish Złoty', symbol: 'zł' },
      languages: ['Polish'],
      utcOffsetHours: 1,
      dialCode: '+48',
      tld: '.pl',
      drivingSide: 'Right',
      borders: ['Germany', 'Czechia', 'Slovakia', 'Ukraine', 'Belarus', 'Lithuania', 'Russia'],
      unMember: true,
      funFacts: [
        'Home to the oldest salt mine in continuous operation: the UNESCO-listed Wieliczka Salt Mine, carved since the 13th century.',
        'Białowieża Forest on its eastern border is the last primeval lowland forest in Europe, home to the European bison.',
        'Adopted Europe’s first modern written codified constitution on May 3, 1791.'
      ]
    },
    {
      id: 'pt',
      name: 'Portugal',
      officialName: 'Portuguese Republic',
      capital: 'Lisbon',
      continent: 'Europe',
      subregion: 'Southern Europe',
      flagCode: 'pt',
      emoji: '🇵🇹',
      population: 10467366,
      areaKm2: 92212,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['Portuguese'],
      utcOffsetHours: 0,
      dialCode: '+351',
      tld: '.pt',
      drivingSide: 'Right',
      borders: ['Spain'],
      unMember: true,
      funFacts: [
        'The oldest defined nation-state in Europe, possessing unchanged mainland borders since the Treaty of Alcanizes in 1297.',
        'Produces over 50% of the world’s commercial supply of wine corks from its vast cork oak forests.',
        'Lisbon is historically several centuries older than Rome, founded by Phoenician maritime navigators.'
      ]
    },
    {
      id: 'ie',
      name: 'Ireland',
      officialName: 'Republic of Ireland',
      capital: 'Dublin',
      continent: 'Europe',
      subregion: 'Northern Europe',
      flagCode: 'ie',
      emoji: '🇮🇪',
      population: 5127170,
      areaKm2: 70273,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['English', 'Irish (Gaeilge)'],
      utcOffsetHours: 0,
      dialCode: '+353',
      tld: '.ie',
      drivingSide: 'Left',
      borders: ['United Kingdom'],
      unMember: true,
      funFacts: [
        'Nicknamed the "Emerald Isle" due to its perpetual lush green landscape nourished by frequent Atlantic rainfall.',
        'The only country in the world that features a musical instrument (the Gaelic Celtic harp) as its official state emblem.',
        'Contains zero native species of wild snakes, having been an isolated island since the last Glacial Maximum.'
      ]
    },
    {
      id: 'at',
      name: 'Austria',
      officialName: 'Republic of Austria',
      capital: 'Vienna',
      continent: 'Europe',
      subregion: 'Central Europe',
      flagCode: 'at',
      emoji: '🇦🇹',
      population: 9104772,
      areaKm2: 83879,
      currency: { code: 'EUR', name: 'Euro', symbol: '€' },
      languages: ['German'],
      utcOffsetHours: 1,
      dialCode: '+43',
      tld: '.at',
      drivingSide: 'Right',
      borders: ['Germany', 'Czechia', 'Slovakia', 'Hungary', 'Slovenia', 'Italy', 'Switzerland', 'Liechtenstein'],
      unMember: true,
      funFacts: [
        'The Alps cover roughly 62% of Austria’s landmass, with the highest peak being the Grossglockner (3,798 m).',
        'Vienna consistently ranks among the top global cities with the highest quality of living indices in the world.',
        'Its red-white-red national flag dates back to 1191, ranking among the world’s oldest national flag designs.'
      ]
    },

    // --- AMERICAS ---
    {
      id: 'us',
      name: 'United States',
      officialName: 'United States of America',
      capital: 'Washington, D.C.',
      continent: 'Americas',
      subregion: 'North America',
      flagCode: 'us',
      emoji: '🇺🇸',
      population: 339996563,
      areaKm2: 9833517,
      currency: { code: 'USD', name: 'United States Dollar', symbol: '$' },
      languages: ['English', 'Spanish'],
      utcOffsetHours: -5,
      dialCode: '+1',
      tld: '.us',
      drivingSide: 'Right',
      borders: ['Canada', 'Mexico'],
      unMember: true,
      funFacts: [
        'World’s largest economy by nominal GDP and the third most populous nation on the planet.',
        'Established Yellowstone in 1872 as the world’s first designated National Park.',
        'Spans 6 standard timezones across the contiguous mainland, Alaska, and the Hawaiian archipelago.'
      ]
    },
    {
      id: 'ca',
      name: 'Canada',
      officialName: 'Canada',
      capital: 'Ottawa',
      continent: 'Americas',
      subregion: 'North America',
      flagCode: 'ca',
      emoji: '🇨🇦',
      population: 39566248,
      areaKm2: 9984670,
      currency: { code: 'OTHER', name: 'Canadian Dollar', symbol: '$' },
      languages: ['English', 'French'],
      utcOffsetHours: -5,
      dialCode: '+1',
      tld: '.ca',
      drivingSide: 'Right',
      borders: ['United States'],
      unMember: true,
      funFacts: [
        'Second largest sovereign country by total physical land area in the world.',
        'Possesses the longest ocean coastline of any nation on Earth: 243,042 kilometers.',
        'Contains more natural freshwater lakes than all other countries in the world combined.'
      ]
    },
    {
      id: 'mx',
      name: 'Mexico',
      officialName: 'United Mexican States',
      capital: 'Mexico City',
      continent: 'Americas',
      subregion: 'North America',
      flagCode: 'mx',
      emoji: '🇲🇽',
      population: 128455567,
      areaKm2: 1964375,
      currency: { code: 'OTHER', name: 'Mexican Peso', symbol: '$' },
      languages: ['Spanish', 'Nahuatl', 'Maya'],
      utcOffsetHours: -6,
      dialCode: '+52',
      tld: '.mx',
      drivingSide: 'Right',
      borders: ['United States', 'Guatemala', 'Belize'],
      unMember: true,
      funFacts: [
        'Introduced chocolate, corn, vanilla, and chili peppers to the global agricultural diet.',
        'Mexico City is built on the ruins of the Aztec capital Tenochtitlan above a former ancient lake bed and sinks several inches annually.',
        'Home to the Great Pyramid of Cholula, the largest archaeological pyramid base volume on Earth.'
      ]
    },
    {
      id: 'br',
      name: 'Brazil',
      officialName: 'Federative Republic of Brazil',
      capital: 'Brasília',
      continent: 'Americas',
      subregion: 'South America',
      flagCode: 'br',
      emoji: '🇧🇷',
      population: 216422446,
      areaKm2: 8515767,
      currency: { code: 'OTHER', name: 'Brazilian Real', symbol: 'R$' },
      languages: ['Portuguese'],
      utcOffsetHours: -3,
      dialCode: '+55',
      tld: '.br',
      drivingSide: 'Right',
      borders: ['Argentina', 'Bolivia', 'Colombia', 'French Guiana', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela'],
      unMember: true,
      funFacts: [
        'Largest country in both South America and the Southern Hemisphere.',
        'Houses approximately 60% of the Amazon Rainforest, holding the highest biological diversity of flora and fauna on Earth.',
        'Shares an international border with every single South American nation except Chile and Ecuador.'
      ]
    },
    {
      id: 'ar',
      name: 'Argentina',
      officialName: 'Argentine Republic',
      capital: 'Buenos Aires',
      continent: 'Americas',
      subregion: 'South America',
      flagCode: 'ar',
      emoji: '🇦🇷',
      population: 46044703,
      areaKm2: 2780400,
      currency: { code: 'OTHER', name: 'Argentine Peso', symbol: '$' },
      languages: ['Spanish'],
      utcOffsetHours: -3,
      dialCode: '+54',
      tld: '.ar',
      drivingSide: 'Right',
      borders: ['Bolivia', 'Brazil', 'Chile', 'Paraguay', 'Uruguay'],
      unMember: true,
      funFacts: [
        'Home to Aconcagua (6,961 m), the highest peak in both the Western and Southern Hemispheres.',
        'Ushuaia in Tierra del Fuego is universally renowned as the southernmost city on planet Earth.',
        'Birthplace of the Tango dance and musical genre, which emerged in the late 19th century in the ports of Buenos Aires.'
      ]
    },
    {
      id: 'co',
      name: 'Colombia',
      officialName: 'Republic of Colombia',
      capital: 'Bogotá',
      continent: 'Americas',
      subregion: 'South America',
      flagCode: 'co',
      emoji: '🇨🇴',
      population: 52085168,
      areaKm2: 1141748,
      currency: { code: 'OTHER', name: 'Colombian Peso', symbol: '$' },
      languages: ['Spanish'],
      utcOffsetHours: -5,
      dialCode: '+57',
      tld: '.co',
      drivingSide: 'Right',
      borders: ['Brazil', 'Ecuador', 'Panama', 'Peru', 'Venezuela'],
      unMember: true,
      funFacts: [
        'The only nation in South America with coastlines on both the Pacific Ocean and the Caribbean Sea.',
        'Ranked second in the world for aggregate biodiversity per square kilometer, harboring over 1,900 species of birds.',
        'Produces the finest quality emeralds in the international gemstone market, accounting for 70-90% of premium supply.'
      ]
    },
    {
      id: 'cl',
      name: 'Chile',
      officialName: 'Republic of Chile',
      capital: 'Santiago',
      continent: 'Americas',
      subregion: 'South America',
      flagCode: 'cl',
      emoji: '🇨🇱',
      population: 19629590,
      areaKm2: 756102,
      currency: { code: 'OTHER', name: 'Chilean Peso', symbol: '$' },
      languages: ['Spanish'],
      utcOffsetHours: -4,
      dialCode: '+56',
      tld: '.cl',
      drivingSide: 'Right',
      borders: ['Argentina', 'Bolivia', 'Peru'],
      unMember: true,
      funFacts: [
        'The longest north-south country in the world, stretching over 4,300 km while averaging only 175 km in width.',
        'The Atacama Desert in northern Chile is the driest non-polar desert on Earth, hosting leading international space observatories.',
        'Administers Rapa Nui (Easter Island), renowned for nearly 1,000 monumental monolithic Moai stone statues.'
      ]
    },
    {
      id: 'pe',
      name: 'Peru',
      officialName: 'Republic of Peru',
      capital: 'Lima',
      continent: 'Americas',
      subregion: 'South America',
      flagCode: 'pe',
      emoji: '🇵🇪',
      population: 34049588,
      areaKm2: 1285216,
      currency: { code: 'OTHER', name: 'Peruvian Sol', symbol: 'S/' },
      languages: ['Spanish', 'Quechua', 'Aymara'],
      utcOffsetHours: -5,
      dialCode: '+51',
      tld: '.pe',
      drivingSide: 'Right',
      borders: ['Ecuador', 'Colombia', 'Brazil', 'Bolivia', 'Chile'],
      unMember: true,
      funFacts: [
        'Heartland of the ancient Inca Empire and home to the mountain sanctuary of Machu Picchu.',
        'Origin of the domestic potato, cultivating over 4,000 indigenous varieties in the Andean highlands.',
        'Lake Titicaca, shared with Bolivia, is the highest commercially navigable lake in the world at 3,812 meters.'
      ]
    },
    {
      id: 'cu',
      name: 'Cuba',
      officialName: 'Republic of Cuba',
      capital: 'Havana',
      continent: 'Americas',
      subregion: 'Caribbean',
      flagCode: 'cu',
      emoji: '🇨🇺',
      population: 11212191,
      areaKm2: 109884,
      currency: { code: 'OTHER', name: 'Cuban Peso', symbol: '$' },
      languages: ['Spanish'],
      utcOffsetHours: -5,
      dialCode: '+53',
      tld: '.cu',
      drivingSide: 'Right',
      borders: [],
      unMember: true,
      funFacts: [
        'The largest island by land area in the Caribbean Sea.',
        'Renowned for its meticulously preserved vintage American automobiles from the 1950s roaming Havana’s streets.',
        'Home to the Bee Hummingbird, the smallest avian species in the world, measuring barely 5 centimeters in length.'
      ]
    },

    // --- AFRICA ---
    {
      id: 'eg',
      name: 'Egypt',
      officialName: 'Arab Republic of Egypt',
      capital: 'Cairo',
      continent: 'Africa',
      subregion: 'Northern Africa',
      flagCode: 'eg',
      emoji: '🇪🇬',
      population: 110990103,
      areaKm2: 1002450,
      currency: { code: 'OTHER', name: 'Egyptian Pound', symbol: 'E£' },
      languages: ['Arabic'],
      utcOffsetHours: 3,
      dialCode: '+20',
      tld: '.eg',
      drivingSide: 'Right',
      borders: ['Libya', 'Sudan', 'Israel'],
      unMember: true,
      funFacts: [
        'Home to the Great Pyramid of Giza, the oldest and sole remaining monument of the Seven Wonders of the Ancient World.',
        'Controls the strategic Suez Canal, connecting the Mediterranean Sea directly to the Red Sea for 12% of global maritime trade.',
        'Approximately 95% of the population resides within a narrow corridor along the fertile banks of the Nile River.'
      ]
    },
    {
      id: 'ng',
      name: 'Nigeria',
      officialName: 'Federal Republic of Nigeria',
      capital: 'Abuja',
      continent: 'Africa',
      subregion: 'Western Africa',
      flagCode: 'ng',
      emoji: '🇳🇬',
      population: 223804632,
      areaKm2: 923768,
      currency: { code: 'OTHER', name: 'Nigerian Naira', symbol: '₦' },
      languages: ['English', 'Hausa', 'Yoruba', 'Igbo'],
      utcOffsetHours: 1,
      dialCode: '+234',
      tld: '.ng',
      drivingSide: 'Right',
      borders: ['Benin', 'Niger', 'Chad', 'Cameroon'],
      unMember: true,
      funFacts: [
        'The most populous nation in Africa and projected to become the third most populous country in the world by 2050.',
        'Its cinema industry, "Nollywood", is one of the largest film producers globally by volume of films released annually.',
        'Home to more than 500 distinct ethnic languages and vibrant indigenous musical traditions like Afrobeat.'
      ]
    },
    {
      id: 'za',
      name: 'South Africa',
      officialName: 'Republic of South Africa',
      capital: 'Pretoria',
      continent: 'Africa',
      subregion: 'Southern Africa',
      flagCode: 'za',
      emoji: '🇿🇦',
      population: 60414495,
      areaKm2: 1221037,
      currency: { code: 'OTHER', name: 'South African Rand', symbol: 'R' },
      languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English', 'Sepedi'],
      utcOffsetHours: 2,
      dialCode: '+27',
      tld: '.za',
      drivingSide: 'Left',
      borders: ['Namibia', 'Botswana', 'Zimbabwe', 'Mozambique', 'Eswatini', 'Lesotho'],
      unMember: true,
      funFacts: [
        'Has three official capital cities: Pretoria (Executive), Cape Town (Legislative), and Bloemfontein (Judicial).',
        'Recognizes 12 official state languages in its democratic constitution.',
        'Completely encloses the sovereign kingdom of Lesotho within its interior geography.'
      ]
    },
    {
      id: 'ke',
      name: 'Kenya',
      officialName: 'Republic of Kenya',
      capital: 'Nairobi',
      continent: 'Africa',
      subregion: 'Eastern Africa',
      flagCode: 'ke',
      emoji: '🇰🇪',
      population: 54027487,
      areaKm2: 580367,
      currency: { code: 'OTHER', name: 'Kenyan Shilling', symbol: 'KSh' },
      languages: ['Swahili', 'English'],
      utcOffsetHours: 3,
      dialCode: '+254',
      tld: '.ke',
      drivingSide: 'Left',
      borders: ['Ethiopia', 'Somalia', 'South Sudan', 'Tanzania', 'Uganda'],
      unMember: true,
      funFacts: [
        'Host to the annual Great Wildebeest Migration across the Maasai Mara ecosystem, one of nature’s greatest spectacles.',
        'Pioneered mobile money banking globally with M-Pesa, revolutionizing financial inclusion across developing economies.',
        'The Great Rift Valley splits Kenya vertically, featuring dormant volcanoes and alkaline soda lakes flaming with pink flamingos.'
      ]
    },
    {
      id: 'ma',
      name: 'Morocco',
      officialName: 'Kingdom of Morocco',
      capital: 'Rabat',
      continent: 'Africa',
      subregion: 'Northern Africa',
      flagCode: 'ma',
      emoji: '🇲🇦',
      population: 37840000,
      areaKm2: 446550,
      currency: { code: 'OTHER', name: 'Moroccan Dirham', symbol: 'MAD' },
      languages: ['Arabic', 'Berber (Amazigh)', 'French'],
      utcOffsetHours: 1,
      dialCode: '+212',
      tld: '.ma',
      drivingSide: 'Right',
      borders: ['Algeria', 'Mauritania', 'Spain'],
      unMember: true,
      funFacts: [
        'Home to the University of al-Qarawiyyin in Fez, recognized by UNESCO as the oldest continuously operating university on Earth (founded 859 CE).',
        'Only 14 kilometers of water in the Strait of Gibraltar separates Morocco from the European mainland.',
        'Renowned for its red imperial city of Marrakech and the Blue Pearl town of Chefchaouen nestled in the Rif Mountains.'
      ]
    },
    {
      id: 'et',
      name: 'Ethiopia',
      officialName: 'Federal Democratic Republic of Ethiopia',
      capital: 'Addis Ababa',
      continent: 'Africa',
      subregion: 'Eastern Africa',
      flagCode: 'et',
      emoji: '🇪🇹',
      population: 126527060,
      areaKm2: 1104300,
      currency: { code: 'OTHER', name: 'Ethiopian Birr', symbol: 'Br' },
      languages: ['Amharic', 'Oromo', 'Tigrinya'],
      utcOffsetHours: 3,
      dialCode: '+251',
      tld: '.et',
      drivingSide: 'Right',
      borders: ['Eritrea', 'Djibouti', 'Somalia', 'Kenya', 'South Sudan', 'Sudan'],
      unMember: true,
      funFacts: [
        'Follows its own unique 13-month calendar that runs approximately seven to eight years behind the standard Gregorian calendar.',
        'Widely celebrated as the botanical birthplace of Arabica coffee in the ancient forests of Kaffa.',
        'One of the only African nations that successfully repelled 19th-century European colonial expansion, maintaining sovereignty.'
      ]
    },
    {
      id: 'gh',
      name: 'Ghana',
      officialName: 'Republic of Ghana',
      capital: 'Accra',
      continent: 'Africa',
      subregion: 'Western Africa',
      flagCode: 'gh',
      emoji: '🇬🇭',
      population: 33475870,
      areaKm2: 238533,
      currency: { code: 'OTHER', name: 'Ghanaian Cedi', symbol: 'GH₵' },
      languages: ['English', 'Akan', 'Ewe', 'Ga'],
      utcOffsetHours: 0,
      dialCode: '+233',
      tld: '.gh',
      drivingSide: 'Right',
      borders: ['Ivory Coast', 'Burkina Faso', 'Togo'],
      unMember: true,
      funFacts: [
        'In 1957, became the first sub-Saharan African country to declare independence from colonial rule.',
        'Lake Volta is the largest man-made reservoir in the world by surface area, covering 8,502 km².',
        'Geographically the closest country on Earth to the intersection of the Equator and Prime Meridian (coordinates 0°, 0°).'
      ]
    },
    {
      id: 'tz',
      name: 'Tanzania',
      officialName: 'United Republic of Tanzania',
      capital: 'Dodoma',
      continent: 'Africa',
      subregion: 'Eastern Africa',
      flagCode: 'tz',
      emoji: '🇹🇿',
      population: 65497748,
      areaKm2: 947303,
      currency: { code: 'OTHER', name: 'Tanzanian Shilling', symbol: 'TSh' },
      languages: ['Swahili', 'English'],
      utcOffsetHours: 3,
      dialCode: '+255',
      tld: '.tz',
      drivingSide: 'Left',
      borders: ['Kenya', 'Uganda', 'Rwanda', 'Burundi', 'DR Congo', 'Zambia', 'Malawi', 'Mozambique'],
      unMember: true,
      funFacts: [
        'Home to Mount Kilimanjaro (5,895 m), the highest free-standing mountain summit above sea level in the world.',
        'Contains the Ngorongoro Crater, the world’s largest intact, unflooded volcanic caldera teeming with wildlife.',
        'More than 32% of its entire national landmass is formally dedicated to wildlife conservation and national parks.'
      ]
    },

    // --- OCEANIA ---
    {
      id: 'au',
      name: 'Australia',
      officialName: 'Commonwealth of Australia',
      capital: 'Canberra',
      continent: 'Oceania',
      subregion: 'Australia and New Zealand',
      flagCode: 'au',
      emoji: '🇦🇺',
      population: 26439111,
      areaKm2: 7692024,
      currency: { code: 'OTHER', name: 'Australian Dollar', symbol: '$' },
      languages: ['English'],
      utcOffsetHours: 10,
      dialCode: '+61',
      tld: '.au',
      drivingSide: 'Left',
      borders: [],
      unMember: true,
      funFacts: [
        'The only sovereign nation that occupies an entire geographic continent by itself.',
        'Contains the Great Barrier Reef, the largest living coral organism system on Earth, visible from space orbit.',
        'Over 80% of its native mammals, reptiles, and flowering plants are completely endemic and found nowhere else.'
      ]
    },
    {
      id: 'nz',
      name: 'New Zealand',
      officialName: 'New Zealand',
      capital: 'Wellington',
      continent: 'Oceania',
      subregion: 'Australia and New Zealand',
      flagCode: 'nz',
      emoji: '🇳🇿',
      population: 5228100,
      areaKm2: 268838,
      currency: { code: 'OTHER', name: 'New Zealand Dollar', symbol: '$' },
      languages: ['English', 'Māori', 'NZ Sign Language'],
      utcOffsetHours: 12,
      dialCode: '+64',
      tld: '.nz',
      drivingSide: 'Left',
      borders: [],
      unMember: true,
      funFacts: [
        'In 1893, became the first self-governing nation in the world where women won the constitutional right to vote in parliamentary elections.',
        'Native fauna evolved with no land mammals (except small bats), allowing flightless birds like the Kiwi and Kakapo to flourish.',
        'Wellington is the southernmost national capital city of any sovereign nation on Earth.'
      ]
    },
    {
      id: 'fj',
      name: 'Fiji',
      officialName: 'Republic of Fiji',
      capital: 'Suva',
      continent: 'Oceania',
      subregion: 'Melanesia',
      flagCode: 'fj',
      emoji: '🇫🇯',
      population: 936375,
      areaKm2: 18274,
      currency: { code: 'OTHER', name: 'Fijian Dollar', symbol: '$' },
      languages: ['English', 'Fijian', 'Fiji Hindi'],
      utcOffsetHours: 12,
      dialCode: '+679',
      tld: '.fj',
      drivingSide: 'Left',
      borders: [],
      unMember: true,
      funFacts: [
        'An archipelago nation comprised of over 330 volcanic islands and 500 coral islets in the South Pacific.',
        'The 180° meridian passes directly through the Fijian island of Taveuni, creating a spot where you can stand with one foot in "today" and one in "yesterday".',
        'Famous for producing world-champion Rugby Sevens teams, winning back-to-back Olympic gold medals.'
      ]
    },
    {
      id: 'pg',
      name: 'Papua New Guinea',
      officialName: 'Independent State of Papua New Guinea',
      capital: 'Port Moresby',
      continent: 'Oceania',
      subregion: 'Melanesia',
      flagCode: 'pg',
      emoji: '🇵🇬',
      population: 10142615,
      areaKm2: 462840,
      currency: { code: 'OTHER', name: 'Papua New Guinean Kina', symbol: 'K' },
      languages: ['Tok Pisin', 'Hiri Motu', 'English'],
      utcOffsetHours: 10,
      dialCode: '+675',
      tld: '.pg',
      drivingSide: 'Left',
      borders: ['Indonesia'],
      unMember: true,
      funFacts: [
        'The most linguistically diverse country on Earth, with more than 840 distinct living indigenous languages spoken.',
        'Home to all known species of the spectacular Birds-of-Paradise in its rugged equatorial rainforests.',
        'Much of the mountainous interior was uncontacted by the outside world until the 1930s.'
      ]
    },

    // --- POLAR / SPECIAL GEOGRAPHIC WONDERS ---
    {
      id: 'is',
      name: 'Iceland',
      officialName: 'Iceland',
      capital: 'Reykjavik',
      continent: 'Europe',
      subregion: 'Northern Europe',
      flagCode: 'is',
      emoji: '🇮🇸',
      population: 393600,
      areaKm2: 103000,
      currency: { code: 'OTHER', name: 'Icelandic Króna', symbol: 'kr' },
      languages: ['Icelandic'],
      utcOffsetHours: 0,
      dialCode: '+354',
      tld: '.is',
      drivingSide: 'Right',
      borders: [],
      unMember: true,
      funFacts: [
        'Powered nearly 100% by renewable energy (geothermal steam and hydroelectric power).',
        'Has no standing military, armed forces, or air force, and possesses one of the lowest violent crime rates globally.',
        'The Althing parliament was founded in 930 CE at Thingvellir, standing as the world’s oldest active legislative assembly.'
      ]
    }
  ];

  /* ==========================================================================
     GLOBAL STATE & BENCHMARKS
     ========================================================================== */
  const STATE = {
    unit: 'metric', // 'metric' (km²) or 'imperial' (sq mi)
    activeView: 'gallery', // 'gallery', 'compare', 'quiz'
    continentFilter: 'all',
    searchQuery: '',
    populationFilter: 'all',
    currencyFilter: 'all',
    sortBy: 'name-asc',
    comparedIds: [], // Array of up to 3 country IDs
    quiz: {
      round: 1,
      totalQuestions: 5,
      score: 0,
      streak: 0,
      activeQuestion: null,
      locked: false
    }
  };

  // Global statistical maximums for comparator bar charts
  const BENCHMARKS = {
    maxPopulation: 1450000000, // ~India / China scale
    maxAreaKm2: 10000000,      // ~Canada / China scale
    maxDensity: 8500           // ~Singapore scale
  };

  /* ==========================================================================
     DOM ELEMENTS CACHE
     ========================================================================== */
  const DOM = {
    statCountriesCount: document.getElementById('statCountriesCount'),
    displayedCount: document.getElementById('displayedCount'),
    totalCountriesCount: document.getElementById('totalCountriesCount'),
    countriesGrid: document.getElementById('countriesGrid'),
    emptyResultsCard: document.getElementById('emptyResultsCard'),
    emptyResetBtn: document.getElementById('emptyResetBtn'),
    searchInput: document.getElementById('countrySearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    unitBtns: document.querySelectorAll('.unit-btn'),
    continentChips: document.querySelectorAll('.continent-chip'),
    popFilterSelect: document.getElementById('popFilterSelect'),
    currencyFilterSelect: document.getElementById('currencyFilterSelect'),
    sortFilterSelect: document.getElementById('sortFilterSelect'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    modeTabBtns: document.querySelectorAll('.mode-tab-btn[data-view]'),
    randomCountryBtn: document.getElementById('randomCountryBtn'),
    appViews: document.querySelectorAll('.app-view'),
    compareCountBadge: document.getElementById('compareCountBadge'),

    // Comparator Elements
    compSelect1: document.getElementById('compSelect1'),
    compSelect2: document.getElementById('compSelect2'),
    compSelect3: document.getElementById('compSelect3'),
    comparatorMatrix: document.getElementById('comparatorMatrix'),

    // Floating Compare Dock
    compareDock: document.getElementById('compareDock'),
    dockCount: document.getElementById('dockCount'),
    dockChips: document.getElementById('dockChips'),
    dockClearBtn: document.getElementById('dockClearBtn'),
    dockLaunchBtn: document.getElementById('dockLaunchBtn'),

    // Modal Dossier Elements
    modalBackdrop: document.getElementById('countryModalBackdrop'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalDossierContent: document.getElementById('modalDossierContent'),

    // Quiz Elements
    quizStreak: document.getElementById('quizStreak'),
    quizScore: document.getElementById('quizScore'),
    quizQuestionBox: document.getElementById('quizQuestionBox'),
    quizQuestionCount: document.getElementById('quizQuestionCount'),
    quizTypeBadge: document.getElementById('quizTypeBadge'),
    quizPromptArea: document.getElementById('quizPromptArea'),
    quizOptionsGrid: document.getElementById('quizOptionsGrid'),
    quizFeedbackBox: document.getElementById('quizFeedbackBox'),
    quizFeedbackMsg: document.getElementById('quizFeedbackMsg'),
    quizNextBtn: document.getElementById('quizNextBtn'),
    quizFinishedCard: document.getElementById('quizFinishedCard'),
    quizFinalScore: document.getElementById('quizFinalScore'),
    quizRestartBtn: document.getElementById('quizRestartBtn'),
    quizReturnGalleryBtn: document.getElementById('quizReturnGalleryBtn'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  /* ==========================================================================
     UTILITY HELPERS
     ========================================================================== */
  const KM2_TO_SQMI = 0.386102;

  function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
  }

  function formatArea(areaKm2, unit) {
    if (unit === 'imperial') {
      const sqmi = Math.round(areaKm2 * KM2_TO_SQMI);
      return `${formatNumber(sqmi)} sq mi`;
    }
    return `${formatNumber(areaKm2)} km²`;
  }

  function calculateDensity(population, areaKm2) {
    if (!areaKm2 || areaKm2 <= 0) return 0;
    return Math.round(population / areaKm2);
  }

  function formatDensity(population, areaKm2, unit) {
    const rawPerKm2 = population / areaKm2;
    if (unit === 'imperial') {
      const perSqMi = Math.round(rawPerKm2 / KM2_TO_SQMI);
      return `${formatNumber(perSqMi)} / sq mi`;
    }
    return `${formatNumber(Math.round(rawPerKm2))} / km²`;
  }

  /**
   * Calculates formatted 24-hr and 12-hr local time from UTC offset in hours
   */
  function getLocalTimeFormatted(utcOffsetHours) {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const countryTime = new Date(utcTime + (utcOffsetHours * 3600000));
    
    let hours = countryTime.getHours();
    const minutes = countryTime.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;

    const sign = utcOffsetHours >= 0 ? '+' : '';
    const tzLabel = `UTC${sign}${utcOffsetHours}`;
    
    return {
      timeStr: `${hours12}:${minutes} ${ampm}`,
      tzLabel: tzLabel
    };
  }

  function showToast(message) {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    DOM.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3200);
  }

  function getFlagUrl(flagCode) {
    return `https://flagcdn.com/w640/${flagCode.toLowerCase()}.png`;
  }

  /* ==========================================================================
     CORE RENDERING: GALLERY & CARDS
     ========================================================================== */
  function filterAndSortCountries() {
    let list = COUNTRIES_DATA.slice();

    // 1. Continent filter
    if (STATE.continentFilter !== 'all') {
      list = list.filter(c => c.continent === STATE.continentFilter);
    }

    // 2. Population tier filter
    if (STATE.populationFilter === 'mega') {
      list = list.filter(c => c.population >= 100000000);
    } else if (STATE.populationFilter === 'large') {
      list = list.filter(c => c.population >= 25000000 && c.population < 100000000);
    } else if (STATE.populationFilter === 'medium') {
      list = list.filter(c => c.population >= 5000000 && c.population < 25000000);
    } else if (STATE.populationFilter === 'small') {
      list = list.filter(c => c.population < 5000000);
    }

    // 3. Currency Zone filter
    if (STATE.currencyFilter !== 'all') {
      list = list.filter(c => c.currency.code === STATE.currencyFilter);
    }

    // 4. Search query
    if (STATE.searchQuery.trim() !== '') {
      const q = STATE.searchQuery.toLowerCase().trim();
      list = list.filter(c => {
        return (
          c.name.toLowerCase().includes(q) ||
          c.officialName.toLowerCase().includes(q) ||
          c.capital.toLowerCase().includes(q) ||
          c.currency.code.toLowerCase().includes(q) ||
          c.currency.name.toLowerCase().includes(q) ||
          c.languages.some(lang => lang.toLowerCase().includes(q)) ||
          c.id.toLowerCase() === q
        );
      });
    }

    // 5. Sorting
    list.sort((a, b) => {
      switch (STATE.sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'pop-desc':
          return b.population - a.population;
        case 'pop-asc':
          return a.population - b.population;
        case 'area-desc':
          return b.areaKm2 - a.areaKm2;
        case 'area-asc':
          return a.areaKm2 - b.areaKm2;
        case 'density-desc':
          return (b.population / b.areaKm2) - (a.population / a.areaKm2);
        default:
          return 0;
      }
    });

    return list;
  }

  function renderGallery() {
    const filtered = filterAndSortCountries();
    
    // Update tallies
    if (DOM.displayedCount) DOM.displayedCount.textContent = filtered.length;
    if (DOM.totalCountriesCount) DOM.totalCountriesCount.textContent = COUNTRIES_DATA.length;
    if (DOM.statCountriesCount) DOM.statCountriesCount.textContent = COUNTRIES_DATA.length;

    // Handle empty state
    if (filtered.length === 0) {
      if (DOM.countriesGrid) DOM.countriesGrid.innerHTML = '';
      if (DOM.emptyResultsCard) DOM.emptyResultsCard.classList.remove('hidden');
      return;
    } else {
      if (DOM.emptyResultsCard) DOM.emptyResultsCard.classList.add('hidden');
    }

    // Render cards
    let html = '';
    filtered.forEach(country => {
      const isPinned = STATE.comparedIds.includes(country.id);
      const densityStr = formatDensity(country.population, country.areaKm2, STATE.unit);
      const areaStr = formatArea(country.areaKm2, STATE.unit);
      const localTime = getLocalTimeFormatted(country.utcOffsetHours);

      html += `
        <article class="country-card" data-country-id="${country.id}">
          <div class="card-flag-banner">
            <img 
              src="${getFlagUrl(country.flagCode)}" 
              alt="National Flag of ${country.name}" 
              class="card-flag-img"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="card-flag-fallback" style="display: none;">${country.emoji}</div>
            <div class="card-flag-scrim"></div>
            
            <div class="card-clock-badge" title="Local Time in Capital (${localTime.tzLabel})">
              <span class="pulse-dot"></span>
              <span class="live-clock-val" data-clock-offset="${country.utcOffsetHours}">${localTime.timeStr}</span>
            </div>

            <div class="card-continent-pill">
              <span>${getContinentIcon(country.continent)}</span>
              <span>${country.continent}</span>
            </div>

            <button 
              type="button" 
              class="btn-card-compare ${isPinned ? 'pinned' : ''}" 
              data-action="toggle-compare" 
              data-country-id="${country.id}" 
              title="${isPinned ? 'Remove from comparison' : 'Add to comparator'}"
              aria-label="${isPinned ? 'Remove from comparison' : 'Add to comparator'}"
            >
              ${isPinned ? '✓' : '⚖️'}
            </button>
          </div>

          <div class="card-body">
            <div class="card-title-row">
              <h3 class="country-name">${country.name}</h3>
              <p class="country-capital">Capital: <strong>${country.capital}</strong></p>
            </div>

            <div class="card-metrics-grid">
              <div class="metric-cell">
                <span class="metric-lbl">Population</span>
                <span class="metric-val">${formatNumber(country.population)}</span>
              </div>
              <div class="metric-cell">
                <span class="metric-lbl">Territory Size</span>
                <span class="metric-val">${areaStr}</span>
              </div>
              <div class="metric-cell">
                <span class="metric-lbl">Density</span>
                <span class="metric-val">${densityStr}</span>
              </div>
              <div class="metric-cell">
                <span class="metric-lbl">Currency</span>
                <span class="metric-val">${country.currency.code} (${country.currency.symbol})</span>
              </div>
            </div>

            <div class="card-tags-row">
              <span class="info-pill">${country.subregion}</span>
              <span class="info-pill">Drive: ${country.drivingSide}</span>
              <span class="info-pill">${country.languages[0]}</span>
            </div>

            <div class="card-footer">
              <button 
                type="button" 
                class="btn-open-dossier" 
                data-action="open-dossier" 
                data-country-id="${country.id}"
              >
                Inspect Country Dossier ➔
              </button>
            </div>
          </div>
        </article>
      `;
    });

    if (DOM.countriesGrid) {
      DOM.countriesGrid.innerHTML = html;
    }
  }

  function getContinentIcon(continent) {
    switch (continent) {
      case 'Africa': return '🌍';
      case 'Americas': return '🌎';
      case 'Asia': return '🌏';
      case 'Europe': return '🏰';
      case 'Oceania': return '🏝️';
      default: return '🌐';
    }
  }

  /* ==========================================================================
     LIVE WORLD CLOCK TICKER
     ========================================================================== */
  function updateAllClocks() {
    const clockElements = document.querySelectorAll('[data-clock-offset]');
    clockElements.forEach(el => {
      const offset = parseFloat(el.getAttribute('data-clock-offset'));
      if (!isNaN(offset)) {
        const formatted = getLocalTimeFormatted(offset);
        el.textContent = formatted.timeStr;
      }
    });
  }

  /* ==========================================================================
     COUNTRY DOSSIER MODAL
     ========================================================================== */
  function openCountryDossier(countryId) {
    const country = COUNTRIES_DATA.find(c => c.id === countryId);
    if (!country) return;

    const isPinned = STATE.comparedIds.includes(country.id);
    const localTime = getLocalTimeFormatted(country.utcOffsetHours);
    const areaStr = formatArea(country.areaKm2, STATE.unit);
    const densityStr = formatDensity(country.population, country.areaKm2, STATE.unit);

    // Build borders pills
    let bordersHtml = '';
    if (country.borders.length === 0) {
      bordersHtml = '<span class="info-pill">None (Island nation or isolated maritime borders)</span>';
    } else {
      bordersHtml = country.borders.map(borderName => {
        const neighbor = COUNTRIES_DATA.find(c => c.name.toLowerCase() === borderName.toLowerCase());
        if (neighbor) {
          return `<button type="button" class="border-pill-link" data-action="open-dossier" data-country-id="${neighbor.id}">${neighbor.emoji} ${neighbor.name}</button>`;
        }
        return `<span class="info-pill">${borderName}</span>`;
      }).join(' ');
    }

    // Build facts list
    const factsHtml = country.funFacts.map(fact => `<li>${fact}</li>`).join('');

    const contentHtml = `
      <div class="modal-flag-hero">
        <img 
          src="${getFlagUrl(country.flagCode)}" 
          alt="National Flag of ${country.name}" 
          class="modal-flag-img"
          onerror="this.src='https://flagcdn.com/w320/${country.flagCode}.png';"
        >
      </div>

      <div class="modal-header-strip">
        <div class="modal-title-lockup">
          <h2 class="modal-country-name">${country.emoji} ${country.name}</h2>
          <div class="modal-official-name">${country.officialName}</div>
        </div>
        <div class="modal-live-clock">
          <span class="pulse-dot"></span>
          <span>Local Time: <strong data-clock-offset="${country.utcOffsetHours}">${localTime.timeStr}</strong> (${localTime.tzLabel})</span>
        </div>
      </div>

      <div class="modal-body">
        <div class="modal-dossier-grid">
          <div class="dossier-cell">
            <div class="dossier-lbl">Capital City</div>
            <div class="dossier-val">${country.capital}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Total Population</div>
            <div class="dossier-val">${formatNumber(country.population)}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Land Area</div>
            <div class="dossier-val">${areaStr}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Population Density</div>
            <div class="dossier-val">${densityStr}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Currency</div>
            <div class="dossier-val">${country.currency.name} (${country.currency.code} ${country.currency.symbol})</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Calling & TLD</div>
            <div class="dossier-val">${country.dialCode} | ${country.tld}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Continent & Subregion</div>
            <div class="dossier-val">${country.continent} (${country.subregion})</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Primary Languages</div>
            <div class="dossier-val">${country.languages.join(', ')}</div>
          </div>
          <div class="dossier-cell">
            <div class="dossier-lbl">Driving Side</div>
            <div class="dossier-val">${country.drivingSide} side of road</div>
          </div>
        </div>

        <h4 class="modal-section-title">Land Bordering Nations</h4>
        <div class="borders-pills-row">
          ${bordersHtml}
        </div>

        <h4 class="modal-section-title">Geographical & Cultural Highlights</h4>
        <div class="modal-funfacts-box">
          <ul>
            ${factsHtml}
          </ul>
        </div>

        <div class="modal-footer-actions">
          <button 
            type="button" 
            class="btn ${isPinned ? 'btn-secondary' : 'btn-primary'}" 
            data-action="modal-toggle-compare" 
            data-country-id="${country.id}"
          >
            ${isPinned ? 'Remove from Comparator ✕' : 'Add to Comparator ⚖️'}
          </button>
        </div>
      </div>
    `;

    if (DOM.modalDossierContent) DOM.modalDossierContent.innerHTML = contentHtml;
    if (DOM.modalBackdrop) {
      DOM.modalBackdrop.classList.add('open');
      DOM.modalBackdrop.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (DOM.modalBackdrop) {
      DOM.modalBackdrop.classList.remove('open');
      DOM.modalBackdrop.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     NATIONS COMPARATOR SYSTEM
     ========================================================================== */
  function toggleCompareCountry(countryId) {
    const idx = STATE.comparedIds.indexOf(countryId);
    if (idx > -1) {
      STATE.comparedIds.splice(idx, 1);
      showToast('Country removed from comparison matrix.');
    } else {
      if (STATE.comparedIds.length >= 3) {
        showToast('Comparator limit reached (3 nations max). Remove one first.');
        return;
      }
      STATE.comparedIds.push(countryId);
      const c = COUNTRIES_DATA.find(item => item.id === countryId);
      showToast(`Added ${c ? c.name : 'country'} to comparator.`);
    }

    updateComparatorUI();
  }

  function updateComparatorUI() {
    const count = STATE.comparedIds.length;

    // 1. Update badges
    if (DOM.compareCountBadge) DOM.compareCountBadge.textContent = count;
    if (DOM.dockCount) DOM.dockCount.textContent = count;

    // 2. Floating Dock Visibility
    if (count > 0) {
      if (DOM.compareDock) DOM.compareDock.classList.remove('hidden');
    } else {
      if (DOM.compareDock) DOM.compareDock.classList.add('hidden');
    }

    // 3. Render Dock Chips
    if (DOM.dockChips) {
      DOM.dockChips.innerHTML = STATE.comparedIds.map(id => {
        const c = COUNTRIES_DATA.find(item => item.id === id);
        if (!c) return '';
        return `
          <div class="dock-chip">
            <span>${c.emoji}</span>
            <span>${c.name}</span>
            <span class="dock-chip-remove" data-action="remove-dock-chip" data-country-id="${c.id}">&times;</span>
          </div>
        `;
      }).join('');
    }

    // 4. Synchronize Dropdowns in Comparator Tab
    syncComparatorDropdowns();

    // 5. Render Comparator Matrix
    renderComparatorMatrix();

    // 6. Refresh Gallery Pin States
    renderGallery();
  }

  function syncComparatorDropdowns() {
    const selects = [DOM.compSelect1, DOM.compSelect2, DOM.compSelect3];
    
    selects.forEach((select, idx) => {
      if (!select) return;
      const currentSelected = STATE.comparedIds[idx] || '';

      // Populate options if empty
      if (select.children.length <= 1) {
        let optionsHtml = `<option value="">-- Choose Slot ${idx + 1} Country --</option>`;
        COUNTRIES_DATA.forEach(c => {
          optionsHtml += `<option value="${c.id}">${c.emoji} ${c.name} (${c.continent})</option>`;
        });
        select.innerHTML = optionsHtml;
      }

      select.value = currentSelected;
    });
  }

  function renderComparatorMatrix() {
    if (!DOM.comparatorMatrix) return;

    if (STATE.comparedIds.length === 0) {
      DOM.comparatorMatrix.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
          <div style="font-size: 3rem; margin-bottom: 0.75rem;">⚖️</div>
          <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--text-primary);">No Nations Selected</h3>
          <p>Pick countries using the dropdowns above or click the ⚖️ icon on cards in the Catalog.</p>
        </div>
      `;
      return;
    }

    let html = '';
    STATE.comparedIds.forEach(id => {
      const c = COUNTRIES_DATA.find(item => item.id === id);
      if (!c) return;

      const popPercent = Math.min(100, Math.round((c.population / BENCHMARKS.maxPopulation) * 100));
      const areaPercent = Math.min(100, Math.round((c.areaKm2 / BENCHMARKS.maxAreaKm2) * 100));
      const density = Math.round(c.population / c.areaKm2);
      const densityPercent = Math.min(100, Math.round((density / BENCHMARKS.maxDensity) * 100));
      const localTime = getLocalTimeFormatted(c.utcOffsetHours);

      html += `
        <div class="compare-card">
          <div class="compare-hero">
            <img 
              src="${getFlagUrl(c.flagCode)}" 
              alt="Flag of ${c.name}" 
              class="compare-flag-img"
              onerror="this.src='https://flagcdn.com/w320/${c.flagCode}.png';"
            >
            <h3 class="compare-name">${c.emoji} ${c.name}</h3>
            <div class="compare-capital">Capital: ${c.capital}</div>
          </div>

          <div class="compare-stats-stack">
            <!-- Population Bar -->
            <div class="compare-stat-row">
              <div class="compare-stat-header">
                <span class="compare-stat-lbl">Population</span>
                <span class="compare-stat-val">${formatNumber(c.population)}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-fill fill-population" style="width: ${popPercent}%;"></div>
              </div>
            </div>

            <!-- Area Bar -->
            <div class="compare-stat-row">
              <div class="compare-stat-header">
                <span class="compare-stat-lbl">Territory Size</span>
                <span class="compare-stat-val">${formatArea(c.areaKm2, STATE.unit)}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-fill fill-area" style="width: ${areaPercent}%;"></div>
              </div>
            </div>

            <!-- Density Bar -->
            <div class="compare-stat-row">
              <div class="compare-stat-header">
                <span class="compare-stat-lbl">Density</span>
                <span class="compare-stat-val">${formatDensity(c.population, c.areaKm2, STATE.unit)}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-fill fill-density" style="width: ${densityPercent}%;"></div>
              </div>
            </div>
          </div>

          <div class="compare-meta-grid">
            <div>
              <span style="color: var(--text-muted); font-size: 0.75rem;">CURRENCY</span><br>
              <strong>${c.currency.code} (${c.currency.symbol})</strong>
            </div>
            <div>
              <span style="color: var(--text-muted); font-size: 0.75rem;">LOCAL TIME</span><br>
              <strong data-clock-offset="${c.utcOffsetHours}">${localTime.timeStr}</strong>
            </div>
            <div>
              <span style="color: var(--text-muted); font-size: 0.75rem;">DRIVING SIDE</span><br>
              <strong>${c.drivingSide}</strong>
            </div>
            <div>
              <span style="color: var(--text-muted); font-size: 0.75rem;">CALLING CODE</span><br>
              <strong>${c.dialCode}</strong>
            </div>
          </div>

          <button 
            type="button" 
            class="btn btn-secondary btn-sm" 
            data-action="remove-compare" 
            data-country-id="${c.id}"
            style="width: 100%; margin-top: auto;"
          >
            Remove from Slot ✕
          </button>
        </div>
      `;
    });

    DOM.comparatorMatrix.innerHTML = html;
  }

  /* ==========================================================================
     GEOGRAPHY QUIZ MASTER
     ========================================================================== */
  function startQuizRound() {
    STATE.quiz.round = 1;
    STATE.quiz.score = 0;
    STATE.quiz.streak = 0;
    updateQuizHeaderStats();

    if (DOM.quizQuestionBox) DOM.quizQuestionBox.classList.remove('hidden');
    if (DOM.quizFinishedCard) DOM.quizFinishedCard.classList.add('hidden');

    generateNextQuestion();
  }

  function updateQuizHeaderStats() {
    if (DOM.quizStreak) DOM.quizStreak.textContent = STATE.quiz.streak;
    if (DOM.quizScore) DOM.quizScore.textContent = `${STATE.quiz.score} / ${STATE.quiz.totalQuestions}`;
  }

  function generateNextQuestion() {
    STATE.quiz.locked = false;
    if (DOM.quizFeedbackBox) DOM.quizFeedbackBox.classList.add('hidden');

    if (STATE.quiz.round > STATE.quiz.totalQuestions) {
      finishQuiz();
      return;
    }

    if (DOM.quizQuestionCount) {
      DOM.quizQuestionCount.textContent = `Question ${STATE.quiz.round} of ${STATE.quiz.totalQuestions}`;
    }

    // Pick random question type: 0 = Capital, 1 = Flag, 2 = Continent
    const types = ['capital', 'flag', 'continent'];
    const selectedType = types[Math.floor(Math.random() * types.length)];

    // Pick target country
    const targetCountry = COUNTRIES_DATA[Math.floor(Math.random() * COUNTRIES_DATA.length)];

    // Pick 3 distractors
    const distractors = [];
    const pool = COUNTRIES_DATA.filter(c => c.id !== targetCountry.id);
    while (distractors.length < 3) {
      const rand = pool[Math.floor(Math.random() * pool.length)];
      if (!distractors.includes(rand)) {
        distractors.push(rand);
      }
    }

    let questionData = {
      type: selectedType,
      target: targetCountry,
      options: [],
      correctAnswer: ''
    };

    if (selectedType === 'capital') {
      if (DOM.quizTypeBadge) DOM.quizTypeBadge.textContent = 'World Capitals';
      questionData.correctAnswer = targetCountry.capital;
      const allCaps = [targetCountry.capital, ...distractors.map(d => d.capital)];
      questionData.options = shuffleArray(allCaps);

      if (DOM.quizPromptArea) {
        DOM.quizPromptArea.innerHTML = `
          <div class="quiz-prompt-text">
            What is the official capital city of <strong>${targetCountry.emoji} ${targetCountry.name}</strong>?
          </div>
        `;
      }
    } else if (selectedType === 'flag') {
      if (DOM.quizTypeBadge) DOM.quizTypeBadge.textContent = 'Flag Identification';
      questionData.correctAnswer = targetCountry.name;
      const allNames = [targetCountry.name, ...distractors.map(d => d.name)];
      questionData.options = shuffleArray(allNames);

      if (DOM.quizPromptArea) {
        DOM.quizPromptArea.innerHTML = `
          <div class="quiz-prompt-text">
            Which sovereign country does this national flag represent?
          </div>
          <img 
            src="${getFlagUrl(targetCountry.flagCode)}" 
            alt="Quiz National Flag" 
            class="quiz-flag-preview"
            onerror="this.src='https://flagcdn.com/w320/${targetCountry.flagCode}.png';"
          >
        `;
      }
    } else {
      if (DOM.quizTypeBadge) DOM.quizTypeBadge.textContent = 'Continental Geography';
      questionData.correctAnswer = targetCountry.continent;
      
      const allContinents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
      const continentOptions = shuffleArray(allContinents).slice(0, 4);
      if (!continentOptions.includes(targetCountry.continent)) {
        continentOptions[0] = targetCountry.continent;
      }
      questionData.options = shuffleArray(continentOptions);

      if (DOM.quizPromptArea) {
        DOM.quizPromptArea.innerHTML = `
          <div class="quiz-prompt-text">
            On which world continent is <strong>${targetCountry.emoji} ${targetCountry.name}</strong> located?
          </div>
        `;
      }
    }

    STATE.quiz.activeQuestion = questionData;

    // Render options buttons
    if (DOM.quizOptionsGrid) {
      DOM.quizOptionsGrid.innerHTML = questionData.options.map((opt, i) => {
        return `
          <button 
            type="button" 
            class="quiz-option-btn" 
            data-action="quiz-answer" 
            data-answer="${opt}"
          >
            <span style="opacity: 0.6; font-size: 0.85rem;">[${String.fromCharCode(65 + i)}]</span>
            <span>${opt}</span>
          </button>
        `;
      }).join('');
    }
  }

  function handleQuizAnswer(selectedAnswer, buttonElement) {
    if (STATE.quiz.locked) return;
    STATE.quiz.locked = true;

    const current = STATE.quiz.activeQuestion;
    const isCorrect = selectedAnswer === current.correctAnswer;

    // Highlight all option buttons
    const allButtons = DOM.quizOptionsGrid.querySelectorAll('.quiz-option-btn');
    allButtons.forEach(btn => {
      btn.disabled = true;
      const ans = btn.getAttribute('data-answer');
      if (ans === current.correctAnswer) {
        btn.classList.add('correct');
      } else if (ans === selectedAnswer && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      STATE.quiz.score++;
      STATE.quiz.streak++;
      if (DOM.quizFeedbackMsg) {
        DOM.quizFeedbackMsg.className = 'feedback-msg correct';
        DOM.quizFeedbackMsg.textContent = '✓ Outstanding! Correct Answer!';
      }
    } else {
      STATE.quiz.streak = 0;
      if (DOM.quizFeedbackMsg) {
        DOM.quizFeedbackMsg.className = 'feedback-msg wrong';
        DOM.quizFeedbackMsg.textContent = `✗ Not quite! The correct answer is: ${current.correctAnswer}`;
      }
    }

    updateQuizHeaderStats();
    if (DOM.quizFeedbackBox) DOM.quizFeedbackBox.classList.remove('hidden');
  }

  function finishQuiz() {
    if (DOM.quizQuestionBox) DOM.quizQuestionBox.classList.add('hidden');
    if (DOM.quizFinishedCard) DOM.quizFinishedCard.classList.remove('hidden');

    if (DOM.quizFinalScore) {
      DOM.quizFinalScore.textContent = STATE.quiz.score;
    }

    const titleEl = document.getElementById('quizFinishTitle');
    const trophyEl = document.getElementById('quizFinishTrophy');
    if (STATE.quiz.score === 5) {
      if (titleEl) titleEl.textContent = 'Flawless Master of World Geography! 🌟';
      if (trophyEl) trophyEl.textContent = '👑';
    } else if (STATE.quiz.score >= 3) {
      if (titleEl) titleEl.textContent = 'Great Geopolitical Acumen! 🧭';
      if (trophyEl) trophyEl.textContent = '🏆';
    } else {
      if (titleEl) titleEl.textContent = 'Keep Exploring the World Map! 🗺️';
      if (trophyEl) trophyEl.textContent = '🌍';
    }
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /* ==========================================================================
     MYSTERY DISCOVERY RANDOM PICKER
     ========================================================================== */
  function pickRandomCountry() {
    const rand = COUNTRIES_DATA[Math.floor(Math.random() * COUNTRIES_DATA.length)];
    openCountryDossier(rand.id);
    showToast(`Mystery Discovery: Exploring ${rand.name}!`);
  }

  /* ==========================================================================
     VIEW SWITCHER
     ========================================================================== */
  function switchView(viewName) {
    STATE.activeView = viewName;

    DOM.modeTabBtns.forEach(btn => {
      const v = btn.getAttribute('data-view');
      if (v === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    DOM.appViews.forEach(view => {
      if (view.id === `view-${viewName}`) {
        view.classList.remove('hidden');
        view.classList.add('active');
      } else {
        view.classList.add('hidden');
        view.classList.remove('active');
      }
    });

    if (viewName === 'compare') {
      updateComparatorUI();
    } else if (viewName === 'quiz') {
      startQuizRound();
    }
  }

  /* ==========================================================================
     EVENT LISTENERS & BINDINGS
     ========================================================================== */
  function bindEvents() {
    // 1. Search text input
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', (e) => {
        STATE.searchQuery = e.target.value;
        renderGallery();
      });
    }

    if (DOM.clearSearchBtn) {
      DOM.clearSearchBtn.addEventListener('click', () => {
        if (DOM.searchInput) {
          DOM.searchInput.value = '';
          STATE.searchQuery = '';
          renderGallery();
          DOM.searchInput.focus();
        }
      });
    }

    // 2. Unit buttons
    DOM.unitBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.unitBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        STATE.unit = btn.getAttribute('data-unit');
        renderGallery();
        renderComparatorMatrix();
      });
    });

    // 3. Continent chips
    DOM.continentChips.forEach(chip => {
      chip.addEventListener('click', () => {
        DOM.continentChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        STATE.continentFilter = chip.getAttribute('data-continent');
        renderGallery();
      });
    });

    // 4. Secondary filters
    if (DOM.popFilterSelect) {
      DOM.popFilterSelect.addEventListener('change', (e) => {
        STATE.populationFilter = e.target.value;
        renderGallery();
      });
    }

    if (DOM.currencyFilterSelect) {
      DOM.currencyFilterSelect.addEventListener('change', (e) => {
        STATE.currencyFilter = e.target.value;
        renderGallery();
      });
    }

    if (DOM.sortFilterSelect) {
      DOM.sortFilterSelect.addEventListener('change', (e) => {
        STATE.sortBy = e.target.value;
        renderGallery();
      });
    }

    // 5. Reset filters button
    function resetAllFilters() {
      STATE.continentFilter = 'all';
      STATE.populationFilter = 'all';
      STATE.currencyFilter = 'all';
      STATE.sortBy = 'name-asc';
      STATE.searchQuery = '';

      if (DOM.searchInput) DOM.searchInput.value = '';
      if (DOM.popFilterSelect) DOM.popFilterSelect.value = 'all';
      if (DOM.currencyFilterSelect) DOM.currencyFilterSelect.value = 'all';
      if (DOM.sortFilterSelect) DOM.sortFilterSelect.value = 'name-asc';

      DOM.continentChips.forEach(c => {
        if (c.getAttribute('data-continent') === 'all') c.classList.add('active');
        else c.classList.remove('active');
      });

      renderGallery();
      showToast('Filters reset to default.');
    }

    if (DOM.resetFiltersBtn) DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);
    if (DOM.emptyResetBtn) DOM.emptyResetBtn.addEventListener('click', resetAllFilters);

    // 6. View tabs
    DOM.modeTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.getAttribute('data-view');
        if (v) switchView(v);
      });
    });

    if (DOM.randomCountryBtn) {
      DOM.randomCountryBtn.addEventListener('click', pickRandomCountry);
    }

    // 7. Modal backdrop & close
    if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener('click', closeModal);
    if (DOM.modalBackdrop) {
      DOM.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === DOM.modalBackdrop) closeModal();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // 8. Global Delegated Click Handler for Cards & Dossier Actions
    document.addEventListener('click', (e) => {
      // 1. If clicking compare button or inside compare button
      const compareBtn = e.target.closest('[data-action="toggle-compare"]');
      if (compareBtn) {
        e.stopPropagation();
        const id = compareBtn.getAttribute('data-country-id');
        if (id) toggleCompareCountry(id);
        return;
      }

      // 2. If clicking anywhere on a country card (opens dossier)
      const countryCard = e.target.closest('.country-card');
      if (countryCard) {
        const countryId = countryCard.getAttribute('data-country-id');
        if (countryId) {
          openCountryDossier(countryId);
          return;
        }
      }

      // 3. Other explicit actions
      const target = e.target.closest('[data-action]');
      if (!target) return;

      const action = target.getAttribute('data-action');
      const countryId = target.getAttribute('data-country-id');

      if (action === 'open-dossier') {
        openCountryDossier(countryId);
      } else if (action === 'modal-toggle-compare') {
        toggleCompareCountry(countryId);
        openCountryDossier(countryId); // Refresh modal button text
      } else if (action === 'remove-compare') {
        toggleCompareCountry(countryId);
      } else if (action === 'remove-dock-chip') {
        toggleCompareCountry(countryId);
      } else if (action === 'quiz-answer') {
        const ans = target.getAttribute('data-answer');
        handleQuizAnswer(ans, target);
      }
    });

    // 9. Floating Dock Buttons
    if (DOM.dockClearBtn) {
      DOM.dockClearBtn.addEventListener('click', () => {
        STATE.comparedIds = [];
        updateComparatorUI();
        showToast('Comparator cleared.');
      });
    }

    if (DOM.dockLaunchBtn) {
      DOM.dockLaunchBtn.addEventListener('click', () => {
        switchView('compare');
      });
    }

    // 10. Comparator Dropdown Pickers
    function handleSlotSelect(slotIndex, selectEl) {
      const selectedId = selectEl.value;
      if (!selectedId) {
        if (STATE.comparedIds[slotIndex]) {
          STATE.comparedIds.splice(slotIndex, 1);
        }
      } else {
        // Prevent duplicate selection across slots
        if (STATE.comparedIds.includes(selectedId) && STATE.comparedIds[slotIndex] !== selectedId) {
          showToast('Country is already chosen in another comparison slot.');
          selectEl.value = STATE.comparedIds[slotIndex] || '';
          return;
        }
        STATE.comparedIds[slotIndex] = selectedId;
      }
      // Remove undefined holes
      STATE.comparedIds = STATE.comparedIds.filter(Boolean);
      updateComparatorUI();
    }

    if (DOM.compSelect1) DOM.compSelect1.addEventListener('change', (e) => handleSlotSelect(0, e.target));
    if (DOM.compSelect2) DOM.compSelect2.addEventListener('change', (e) => handleSlotSelect(1, e.target));
    if (DOM.compSelect3) DOM.compSelect3.addEventListener('change', (e) => handleSlotSelect(2, e.target));

    // 11. Quiz Next & Restart Buttons
    if (DOM.quizNextBtn) {
      DOM.quizNextBtn.addEventListener('click', () => {
        STATE.quiz.round++;
        generateNextQuestion();
      });
    }

    if (DOM.quizRestartBtn) {
      DOM.quizRestartBtn.addEventListener('click', startQuizRound);
    }

    if (DOM.quizReturnGalleryBtn) {
      DOM.quizReturnGalleryBtn.addEventListener('click', () => switchView('gallery'));
    }
  }

  /* ==========================================================================
     APPLICATION INITIALIZATION
     ========================================================================== */
  function init() {
    // 1. Initial render
    renderGallery();
    syncComparatorDropdowns();

    // 2. Event bindings
    bindEvents();

    // 3. Live clock periodic ticker (every 30 seconds)
    setInterval(updateAllClocks, 30000);

    // Initial check for hash routing (e.g. #compare, #quiz)
    const hash = window.location.hash.replace('#', '');
    if (['gallery', 'compare', 'quiz'].includes(hash)) {
      switchView(hash);
    }
  }

  // Launch when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
