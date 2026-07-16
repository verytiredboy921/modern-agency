function SectionTitle({
  badge,
  title,
  description,
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">

      <p className="text-blue-400 font-semibold uppercase tracking-widest">
        {badge}
      </p>

      <h2 className="text-5xl lg:text-6xl font-black mt-5 leading-tight">
        {title}
      </h2>

      <p className="text-gray-400 mt-8 leading-8">
        {description}
      </p>

    </div>
  );
}

export default SectionTitle;