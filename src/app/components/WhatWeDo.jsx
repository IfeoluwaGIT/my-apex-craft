const WhatWeDo = () => {
    const services = [
      {
        title: "Professional Writing",
        description:
          "We help individuals and businesses craft professional documents, including reports, proposals, and business plans, tailored to their needs.",
      },
      {
        title: "Proofreading Services",
        description:
          "Our experts ensure your documents are error-free and polished, maintaining a professional tone and impeccable grammar.",
      },
      {
        title: "Custom Paper Solutions",
        description:
          "We assist in creating custom papers, essays, and research documents that meet academic and professional standards.",
      },
    ];
  
    const logos = [
      "/logo1.png",
      "/logo2.png",
      "/logo3.png",
      "/logo4.png",
      "/logo5.png",
    ];
  
    return (
      <section className="px-6 py-16 bg-green-50">
        {/* What We Do Heading */}
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          What We Do
        </h2>
  
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                Learn More
              </button>
            </div>
          ))}
        </div>
  
        {/* You Are in Good Company */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            You Are in Good Company
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-16"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatWeDo;
  