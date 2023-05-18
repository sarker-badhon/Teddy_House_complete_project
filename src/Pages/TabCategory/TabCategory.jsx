import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabCategory = () => {

    const categories = [
        {
          name: 'Math Toys',
          toys: [
            {
              picture: 'math_toy1.jpg',
              name: 'Math Toy 1',
              price: 19.99,
              rating: 4.5
            },
            {
              picture: 'math_toy2.jpg',
              name: 'Math Toy 2',
              price: 24.99,
              rating: 4.2
            }
          ]
        },
        {
          name: 'Language Toys',
          toys: [
            {
              picture: 'language_toy1.jpg',
              name: 'Language Toy 1',
              price: 14.99,
              rating: 3.8
            },
            {
              picture: 'language_toy2.jpg',
              name: 'Language Toy 2',
              price: 29.99,
              rating: 4.7
            }
          ]
        },
        {
          name: 'Science Toys',
          toys: [
            {
              picture: 'science_toy1.jpg',
              name: 'Science Toy 1',
              price: 9.99,
              rating: 3.5
            },
            {
              picture: 'science_toy2.jpg',
              name: 'Science Toy 2',
              price: 34.99,
              rating: 4.9
            }
          ]
        }
      ];
    return (
        <Tabs>
      <TabList>
        {categories.map(category => (
          <Tab key={category.name}>{category.name}</Tab>
        ))}
      </TabList>
      {categories.map(category => (
        <TabPanel key={category.name}>
          <h2>{category.name}</h2>
          <div className="toy-container">
            {category.toys.map(toy => (
              <div key={toy.name} className="toy-card">
                <img src={toy.picture} alt={toy.name} />
                <h3>{toy.name}</h3>
                <p>Price: ${toy.price}</p>
                <p>Rating: {toy.rating}</p>
                <button>View Details</button>
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
    );
};

export default TabCategory;