import chickenImg from '../assets/images/chicken.png';
import muttonImg from '../assets/images/mutton.png';
import comboImg from '../assets/images/combo.png';
import bbqImg from '../assets/images/bbq.png';
import fishImg from '../assets/images/fish.png';
import vegImg from '../assets/images/veg.png';

export const menuItems = [
  {
    id: 101,
    name: "CHICKEN MANDI",
    category: "THE CLASSIC SENTENCE",
    description: "Slow-cooked succulent chicken over aromatic basmati rice, seasoned with our secret prison spice blend.",
    image: chickenImg,
    basePrice: 450
  },
  {
    id: 202,
    name: "MUTTON MANDI",
    category: "MAXIMUM SECURITY",
    description: "Tender chunks of premium mutton, pit-roasted to perfection. Guaranteed to hold your cravings captive.",
    image: muttonImg,
    basePrice: 650
  },
  {
    id: 303,
    name: "SPECIAL COMBOS",
    category: "THE LAST MEAL",
    description: "A platter for the entire cell block. Mix of meats, sides, and our signature jail sauces.",
    image: comboImg,
    basePrice: 1200
  },
  {
    id: 404,
    name: "BBQ CHICKEN MANDI",
    category: "SOLITARY CONFINEMENT",
    description: "Smoky, charred, and dangerously addictive. Glazed with our special cell-mate BBQ sauce.",
    image: bbqImg,
    basePrice: 490
  },
  {
    id: 505,
    name: "FISH MANDI (SEA BLOCK)",
    category: "WET ROOM",
    description: "Catch of the day, seasoned with coastal prison spices and steamed over rice.",
    image: fishImg,
    basePrice: 550
  },
  {
    id: 606,
    name: "VEG MANDI",
    category: "MINIMUM SECURITY",
    description: "Even for those who choose a clean path, we have a sentence of flavor waiting.",
    image: vegImg,
    basePrice: 380
  }
];
