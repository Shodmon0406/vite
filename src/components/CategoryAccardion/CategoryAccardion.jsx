// src/components/Catalog.jsx
import React from 'react';

const catalogData = [
  {
    category: 'Электроника',
    subcategories: ['Смартфоны', 'Ноутбуки', 'Аксессуары'],
  },
  {
    category: 'Бытовая техника',
    subcategories: ['Холодильники', 'Пылесосы', 'Стиральные машины'],
  },
  {
    category: 'Одежда и обувь',
    subcategories: ['Мужская одежда', 'Женская одежда', 'Обувь'],
  },
  {
    category: 'Дом и сад',
    subcategories: ['Мебель', 'Освещение', 'Товары для сада'],
  },
  {
    category: 'Продукты питания',
    subcategories: ['Напитки', 'Сладости', 'Молочные продукты'],
  },
];

const Catalog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Каталог</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {catalogData.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <ul className="list-disc list-inside">
              {category.subcategories.map((subcategory, subIndex) => (
                <li key={subIndex} className="text-gray-700">{subcategory}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
