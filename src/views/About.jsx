import React from "react";

export default function About() {
  const teamMembers = [
    {
      name: "Bob Doe",
      role: "Director",
      image: "https://images.unsplash.com/photo-1595433562696-19b9c1f2b7f4",
    },
    {
      name: "Alice Smith",
      role: "Manager",
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
    },
    {
      name: "John Doe",
      role: "Coordinator",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    },
  ];

  return (
    <div className="container my-5 about-container">
      {/* Mission Section */}
      <section className="about-section mb-5">
        <h2>Our Mission</h2>
        <p>
          We help cats find safe, loving homes by making adoption simple,
          transparent, and friendly for everyone. From rescue to rehoming,
          we focus on care, trust, and responsible matching.
        </p>
      </section>

      {/* History Section */}
      <section className="about-section mb-5">
        <h2>Our History</h2>
        <p>
          Purrfect Adoption started as a small local effort and grew into a
          community-driven platform that supports adopters and fosters.
          We work with volunteers to help cats get the second chance they deserve.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <h2>Our Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 team-card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <strong>{member.name}</strong>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
