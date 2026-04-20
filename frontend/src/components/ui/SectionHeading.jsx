function SectionHeading({ title, description, align = "left" }) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "text-center" : ""}>
      <h2 className="text-section font-semibold text-app-text">{title}</h2>

      {description ? (
        <p
          className={`mt-3 max-w-2xl text-body text-app-muted ${isCentered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
