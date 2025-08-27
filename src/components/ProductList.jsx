import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "http://www.azspagirls.com/files/2010/09/orange.jpg",
    title: "Orange",
    price: 15,
  },
  {
    image: "http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg",
    title: "Banana",
    price: 10,
  },
  {
    image: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg",
    title: "Lemon",
    price: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    title: "Apple",
    price: 30,
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Strawberry",
    price: 10,
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Pineapple",
    price: 40,
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    title: "Watermelon",
    price: 40,
  },
  {
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
    title: "Grapes",
    price: 60,
  },
  {
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80",
    title: "Kiwi",
    price: 80,
  },
  {
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    title: "Mango",
    price: 75,
  },
];

const ProductListContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
`;

const ProductRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  justify-content: center;
`;


export default function ProductList({ onAddToCart }) {
  return (
    <ProductListContainer>
      <ProductRow>
        {products.map((product) => (
          <ProductCard {...product} key={product.title} onAddToCart={() => onAddToCart(product)} />
        ))}
      </ProductRow>
    </ProductListContainer>
  );
}
