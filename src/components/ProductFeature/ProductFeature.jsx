import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import Container from "../shared/Container";
import ProductCard from "./ProductCard";

const ProductFeature = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts()
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // handleExploreMore function
  const [showAllProducts, setShowAllProducts] = useState(true);
  const handleExploreMore = () => {
    setShowAllProducts(!showAllProducts);
  };
  const displayedProducts = showAllProducts ? products : products.slice(0, 4);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <section className="my-20 items-center justify-center flex">
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {displayedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <button
            className="bg-[#57baea] text-white font-medium py-3 px-8 rounded-md mt-10 mx-auto block"
            onClick={handleExploreMore}
          >
            {showAllProducts ? "Show Less" : "Explore More"}
          </button>
        </div>
      </section>
    </Container>
  );
};

export default ProductFeature;
