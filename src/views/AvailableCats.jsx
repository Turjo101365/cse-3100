import { useEffect, useState } from "react";

const catsData = [
  { name: "Whiskers", age: 2, breed: "Persian" },
  { name: "Mittens", age: 1, breed: "Bengal" },
  { name: "Shadow", age: 3, breed: "Siamese" },
  { name: "Pumpkin", age: 2, breed: "British Shorthair" },
  { name: "Luna", age: 1, breed: "Sphynx" },
  { name: "Oliver", age: 4, breed: "Peterbald" },
  { name: "Bella", age: 2, breed: "Birman" },
  { name: "Leo", age: 3, breed: "Abyssinian" },
  { name: "Milo", age: 1, breed: "Persian" },
  { name: "Simba", age: 2, breed: "Bengal" },
  { name: "Nala", age: 3, breed: "Siamese" },
  { name: "Coco", age: 1, breed: "Sphynx" }
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch breeds
        const breedsResponse = await fetch("https://api.thecatapi.com/v1/breeds");
        const breedsData = await breedsResponse.json();
        setBreeds(breedsData);

        // Fetch images for cats
        const images = await Promise.all(
          catsData.map(() =>
            fetch("https://api.thecatapi.com/v1/images/search")
              .then(res => res.json())
          )
        );

        setCats(
          catsData.map((cat, i) => ({
            ...cat,
            image: images[i] && images[i][0] ? images[i][0].url : '',
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        setCats(catsData); // Set without images
        setBreeds([]); // No breeds
      }
    };

    fetchData();
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
