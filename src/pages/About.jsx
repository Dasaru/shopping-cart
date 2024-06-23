import AboutCard from "../components/AboutCard";
import htmlPreview from "../assets/html-preview.png";
import cssPreview from "../assets/css-preview.png";
import javascriptPreview from "../assets/javascript-preview.png";
import reactPreview from "../assets/react-preview.png";
// import reactTestingLibraryPreview from "../assets/react-testing-library-preview.png";
import figmaPreview from "../assets/figma-preview.png";

export default function About() {
  return (
    <div className="page-container about-page">
      <AboutCard
        title="HTML"
        previewUrl={htmlPreview}
        iconSrc="html5-logo.png"
        iconAlt="html icon"
      >
        <ul>
          <li>Point one</li>
          <li>Point two</li>
          <li>Point three</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="CSS"
        previewUrl={cssPreview}
        iconSrc="css3-logo.png"
        iconAlt="css icon"
      >
        <ul>
          <li>Point one</li>
          <li>Point two</li>
          <li>Point three</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="Javascript"
        previewUrl={javascriptPreview}
        iconSrc="js-logo.png"
        iconAlt="javascript icon"
      >
        <ul>
          <li>Point one</li>
          <li>Point two</li>
          <li>Point three</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="React"
        previewUrl={reactPreview}
        iconSrc="react-logo.png"
        iconAlt="react icon"
      >
        <ul>
          <li>Point one</li>
          <li>Point two</li>
          <li>Point three</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="React Testing Library"
        previewUrl={""}
        iconSrc="react-testing-library-logo.png"
        iconAlt="react testing library icon"
      >
        <ul>
          <li>Point one</li>
          <li>Point two</li>
          <li>Point three</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="Figma"
        previewUrl={figmaPreview}
        iconSrc="figma-logo.png"
        iconAlt="figma icon"
      >
        <ul>
          <li>Point one</li>
          <li>Point two</li>
          <li>Point three</li>
        </ul>
      </AboutCard>
    </div>
  );
}