import { useEffect, useState } from "react";

const featuredCats = [
  { name: "Bob Doe", age: "3 months" },
  { name: "Mittens", age: "2 months" },
  { name: "Shadow", age: "5 months" },
  { name: "Luna", age: "1 month" },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
              res.json()
            )
          )
        );

        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index] && responses[index][0] ? responses[index][0].url : '',
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div>
      <section className="welcome">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          At Purrfect Adoption, we believe every cat deserves a safe and loving
          home. Our mission is to connect wonderful cats with caring families
          through a simple and trusted adoption process.
        </p>
      </section>

      <section>
        <h2>Featured Cats</h2>

        <div className="row">
          {cats.map((cat, i) => (
            <div key={i} className="col-md-3 col-sm-6 mb-4">
              <div className="featured-card">
                <div className="card-box">
                  {cat.image && <img src={cat.image} alt={cat.name} />}
                </div>
                <div className="card-info">
                  <strong>{cat.name}</strong>
                  <span>Age: {cat.age}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
