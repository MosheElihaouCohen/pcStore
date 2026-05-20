import React from "react";

export const LanguageContext = React.createContext('lang');

export const calculatePrice = (price, discount) => {
    if(discount > 0){
        return price - price * (discount / 100);
    }
    return price;
}

export const products = [
    {
      discount: 25,
      name: "Apple Macbook Aire 13",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/notebooks/note_1.jpg",
      price: 37.0,
      productId: 1,
    },
    {
      discount: 25,
      name: "PlayStation 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/categories/gaming/consoles.jpg",
      price: 37.0,
      productId: 2,
    },
    {
      discount: 25,
      name: "Mousepad Hyperx Fury S Pro Speed",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/mousepad.jpg",
      price: 37.0,
      productId: 3,
    },
    {
      discount: 25,
      name: "Ryzen 5 3600x",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/categories/pc_components/processors.jpg",
      price: 37.0,
      productId: 4,
    },
    {
      discount: 25,
      name: "Mouse Logitech g403",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/categories/peripherals/mouse.jpg",
      price: 37.0,
      productId: 5,
    },
    {
      discount: 25,
      name: "Moto e7i Power",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/phones/phone_1.jpg",
      price: 37.0,
      productId: 6,
    },
    {
      discount: 25,
      name: "Dell Inspiron",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/notebooks/note_6.jpg",
      price: 37.0,
      productId: 7,
    },
    {
      discount: 25,
      name: "Samsung Galaxy Z Fold4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/phones/phone_5.jpg",
      price: 37.0,
      productId: 8,
    },
  ];