function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 sm:py-4 sm:text-base";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40",

    secondary:
      "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:bg-white hover:text-black hover:-translate-y-1",

    ghost:
      "text-white hover:bg-white/10",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;