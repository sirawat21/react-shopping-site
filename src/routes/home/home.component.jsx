import Directory from "../../components/directory/directory.component";
import hats from "../../assets/image/category/hats.png";
import jackets from "../../assets/image/category/jackets.png";
import men from "../../assets/image/category/men.png";
import sneakers from "../../assets/image/category/sneakers.png";
import womens from "../../assets/image/category/womens.png";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: hats,
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: jackets,
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: men,
    },
    {
      id: 4,
      title: "womens",
      imageUrl: sneakers,
    },
    {
      id: 5,
      title: "mens",
      imageUrl: womens,
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};
export default Home;
