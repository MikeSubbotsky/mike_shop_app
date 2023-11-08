import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Assuming you have a ProductCard component
import data from '../data/data.json'; // Your local JSON data

const CategoryPage = () => {
  let { categoryId } = useParams();
  categoryId = parseInt(categoryId, 10); // Convert to number if necessary

  // Find the category in the data
  const category = data.categories.find(c => c.id === categoryId);

  // If the category doesn't exist, you can redirect or show an error message
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {category.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
