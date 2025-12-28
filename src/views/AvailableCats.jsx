import { useEffect, useState } from "react";

const catsData = [
  { name: "Whiskers", age: 2, breed: "Persian", image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" },
  { name: "Mittens", age: 1, breed: "Bengal", image: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg" },
  { name: "Shadow", age: 3, breed: "Siamese", image: "https://cdn2.thecatapi.com/images/MTY3ODMzNQ.jpg" },
  { name: "Pumpkin", age: 2, breed: "British Shorthair", image: "https://cdn2.thecatapi.com/images/MjA1ODg5Ng.jpg" },
  { name: "Luna", age: 1, breed: "Sphynx", image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" },
  { name: "Oliver", age: 4, breed: "Peterbald", image: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg" },
  { name: "Bella", age: 2, breed: "Birman", image: "https://cdn2.thecatapi.com/images/MTY3ODMzNQ.jpg" },
  { name: "Leo", age: 3, breed: "Abyssinian", image: "https://cdn2.thecatapi.com/images/MjA1ODg5Ng.jpg" },
  { name: "Milo", age: 1, breed: "Persian", image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" },
  { name: "Simba", age: 2, breed: "Bengal", image: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg" },
  { name: "Nala", age: 3, breed: "Siamese", image: "https://cdn2.thecatapi.com/images/MTY3ODMzNQ.jpg" },
  { name: "Coco", age: 1, breed: "Sphynx", image: "https://cdn2.thecatapi.com/images/MjA1ODg5Ng.jpg" }
];

export default function AvailableCats() {
  const [cats, setCats] = useState(catsData);
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    // Static breeds for now
    const staticBreeds = [
      { id: "abys", name: "Abyssinian" },
      { id: "beng", name: "Bengal" },
      { id: "birm", name: "Birman" },
      { id: "bsho", name: "British Shorthair" },
      { id: "pers", name: "Persian" },
      { id: "siam", name: "Siamese" },
      { id: "sphy", name: "Sphynx" },
      { id: "pete", name: "Peterbald" }
    ];
    setBreeds(staticBreeds);
  }, []);

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedBreed === "" || cat.breed === selectedBreed)
  );

  return (
    <>
      <div className="cats-header">
        <h2>Available Cats</h2>

        <div className="filters d-flex gap-2">
          <select
            className="form-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option value="">All Breeds</option>
            {breeds.map(breed => (
              <option key={breed.id} value={breed.name}>{breed.name}</option>
            ))}
          </select>

          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <hr />

      <div className="row">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-3 col-sm-6 mb-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} />
              <div className="cat-info">
                <strong>{cat.name}</strong>
                <span>Age: {cat.age}</span>
                <span>Breed: {cat.breed}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
