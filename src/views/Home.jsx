import { useEffect, useState } from "react";

const featuredCats = [
  { name: "Bob Doe", age: "3 months", image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" },
  { name: "Mittens", age: "2 months", image: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg" },
  { name: "Shadow", age: "5 months", image: "https://cdn2.thecatapi.com/images/MTY3ODMzNQ.jpg" },
  { name: "Luna", age: "1 month", image: "https://cdn2.thecatapi.com/images/MjA1ODg5Ng.jpg" },
];

export default function Home() {
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
          {featuredCats.map((cat, i) => (
            <div key={i} className="col-md-3 col-sm-6 mb-4">
              <div className="featured-card">
                <div className="card-box">
                  <img src={cat.image} alt={cat.name} />
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
