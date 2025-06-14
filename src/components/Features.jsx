const Features = () => {
  const features = [
    { title: "AI-Powered Analysis", description: "Advanced deep learning model for accurate disease prediction" },
    { title: "Quick Results", description: " User friendly, Quick Results, Easy to use  " },
    { title: "Vision for the Nation", description: " Improve the Nation through Eye Prediction" }
  ];

  return (
    <section id="features" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;