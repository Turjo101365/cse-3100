import React from "react";

const featuredCats = [
  {
    name: "Bob Doe",
    age: "3 months",
    image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
  },
  {
    name: "Mittens",
    age: "2 months",
    image: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
  },
  {
    name: "Shadow",
    age: "5 months",
    image: "https://cdn2.thecatapi.com/images/MTY3ODMzNQ.jpg",
  },
  {
    name: "Luna",
    age: "1 month",
    image: "https://cdn2.thecatapi.com/images/MjA1ODg5Ng.jpg",
  },
];

export default function Home() {
  return (
    <div className="container">
      {/* Welcome Section */}
      <section className="welcome my-5 text-center">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          At Purrfect Adoption, we believe every cat deserves a safe and loving
          home. Our mission is to connect wonderful cats with caring families
          through a simple and trusted adoption process.
        </p>
      </section>

      {/* Featured Cats Section */}
      <section className="featured-cats my-5">
        <h2 className="text-center mb-4">Featured Cats</h2>

        <div className="row">
          {featuredCats.map((cat, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="featured-card card h-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{cat.name}</h5>
                  <p className="card-text">Age: {cat.age}</p>
                  {/* Optional adopt button */}
                  <button
                    className="btn btn-primary"
                    onClick={() => alert(`You clicked on ${cat.name}`)}
                  >
                    Adopt Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
