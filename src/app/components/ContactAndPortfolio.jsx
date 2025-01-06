const ContactAndPortfolio = () => {
    const portfolioItems = [
      { title: "Leadership Training", description: "Build leadership skills to drive success in your organization." },
      { title: "Project Management", description: "Master tools and techniques to manage projects effectively." },
      { title: "Business Communication", description: "Learn to communicate professionally and effectively." },
      { title: "Team Building", description: "Develop strong and cohesive teams for peak performance." },
      { title: "Personal Development", description: "Enhance your professional and personal growth." },
      { title: "Time Management", description: "Learn strategies to manage your time and productivity." },
      { title: "Conflict Resolution", description: "Handle workplace conflicts with tact and diplomacy." },
      { title: "Customer Service Excellence", description: "Deliver exceptional customer experiences every time." },
    ];
  
    return (
      <section>
        {/* Contact Bar */}
        <div className="bg-green-700 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-6">
            Let us help you achieve your goals with our tailored training and consultancy services.
          </p>
          <button className="bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-100 transition">
            Let's Talk
          </button>
        </div>
  
        {/* Training Portfolio */}
        <div className="px-6 py-16 bg-gray-50">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-green-800 mb-4">
            Our Training Portfolio
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We provide comprehensive training programs designed to empower individuals and organizations. Explore our key areas of focus below.
          </p>
  
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactAndPortfolio;
  