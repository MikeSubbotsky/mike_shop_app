// import React, { useState } from 'react';
// import data from '../data/data.json'
// import Banner from '../components/Banner';

// const HomePage = () => {
//   const [bannerItems, setBannerItems] = useState(data);



//   return (
//     <div>
//       <Banner items={bannerItems} />
//       {/* ... other components */}
//     </div>
//   );
// };

// export default HomePage;

// HomePage.js
import React, { useState } from 'react';
import data from '../data/data.json';
import Banner from '../components/Banner';
import CategoryCard from '../components/CategoryCard'; // Make sure to create this component
import ProductCard from '../components/ProductCard'; // Make sure to create this component
import Heading from '../components/Heading';

const HomePage = () => {
  const [bannerItems, setBannerItems] = useState(data);
  // Assuming the first four categories are the recommended ones
  const recommendedCategories = data.categories.slice(0, 4);

  // Assuming the first product of each recommended category is the recommended product
  const recommendedProducts = recommendedCategories.map(category => category.products[0]);

  return (
    <div>
      <Banner items={bannerItems} />
      <div className="container mx-auto px-4">
        <Heading text="Recommended Categories" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <Heading text="Recommended Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* ... other components */}
    </div>
  );
};

export default HomePage;

