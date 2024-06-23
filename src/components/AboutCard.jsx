

export default function AboutCard({ children, title, previewUrl, iconSrc, iconAlt }) {
  return (
    <div className="about-card">
      <div className="about-card-preview" style={{backgroundImage: `url(${previewUrl})`}}></div>
      <div>
        <div className="about-card-title">
          <img className="about-card-icon" src={iconSrc} alt={iconAlt} />
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}