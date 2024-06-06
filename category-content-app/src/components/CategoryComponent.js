import React, { useState, useEffect } from 'react';

const categories = {
  Fruits: [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ],
  Vegetables: [
    { id: 4, name: 'Carrot' },
    { id: 5, name: 'Broccoli' },
    { id: 6, name: 'Spinach' },
  ],
  Drinks: [
    { id: 7, name: 'Water' },
    { id: 8, name: 'Juice' },
    { id: 9, name: 'Soda' },
  ],
};

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [contentList, setContentList] = useState([]);
  const [pendingCategory, setPendingCategory] = useState(null);

  useEffect(() => {
    if (pendingCategory !== null) {
      const timeout = setTimeout(() => {
        setSelectedCategory(pendingCategory);
      }, 1000); // Change content after 1 second
      return () => clearTimeout(timeout);
    }
  }, [pendingCategory]);

  useEffect(() => {
    if (selectedCategory) {
      const newList = categories[selectedCategory].map(item => (
        <div key={item.id}>{item.name}</div>
      ));
      setContentList(newList);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setPendingCategory(category);
  };

  return (
    <div>
      <div>
        {Object.keys(categories).map(category => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      <div>{contentList}</div>
    </div>
  );
};

export default CategoryComponent;
