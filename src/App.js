const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ]
  return (
    <div className="categories-container">
      {
        categories.map( (category, key) => (
          <div className="category-container" key={key}>
          {/* <img src={}/> */}
          <div className="category-container-body">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
        ))
      }
    </div>
  );
};

export default App;
