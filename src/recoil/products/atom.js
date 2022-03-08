import { atom } from "recoil";

//  https://recoiljs.org/docs/guides/atom-effects/
//  https://recoiljs.org/docs/guides/asynchronous-data-queries
//  Axios

export const products = [
  {
    id: 1,
    title: "Tofu",
    price: 100
  }, 
  {
    id: 2, 
    title: "Västkustchips - Havssalt",
    price: 600
  },
  {
    id: 3,
    title: "Schyssta bananer",
    price: 20
  },
  {
    id: 4,
    title: "Starköll",
    price: 300
  },
  {
    id: 5,
    title: "Bedrägeri",
    price: 200
  },
  {
    id: 6,
    title: "Strumpor",
    price: 699
  },
  {
    id: 7,
    title: "Körv",
    price: 19
  },
  {
    id: 8,
    title: "Intel Master Interion",
    price: 6500
  },
  {
    id: 9,
    title: "GeForce Ti 4090 X-TREME",
    price: 293600
  }
];

export const productsState = atom({
  key: "productsState",
  default: products
})