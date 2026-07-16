function Stats() {
  const stats = [
    { number: "50+", text: "Projects Completed" },
    { number: "20+", text: "Happy Clients" },
    { number: "99%", text: "Client Satisfaction" },
    { number: "24/7", text: "Support" },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-5xl font-bold text-blue-500">
              {stat.number}
            </h2>

            <p className="mt-3 text-gray-400">
              {stat.text}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;