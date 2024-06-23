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
          <li>Semantic HTML</li>
          <li>Accessibility friendly</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="CSS"
        previewUrl={cssPreview}
        iconSrc="css3-logo.png"
        iconAlt="css icon"
      >
        <ul>
          <li>Flexbox layout</li>
          <li>Responsive design</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="Javascript"
        previewUrl={javascriptPreview}
        iconSrc="js-logo.png"
        iconAlt="javascript icon"
      >
        <ul>
          <li>Fetch API for asynchronous requests</li>
          <li>Event Listeners: onClick, onChange, onFocus, and onBlur</li>
          <li>ES6+ syntax</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="React"
        previewUrl={reactPreview}
        iconSrc="react-logo.png"
        iconAlt="react icon"
      >
        <ul>
          <li>React Hooks: useState, useEffect, useRef, and useContext</li>
          <li>State management with useContext and a state provider</li>
          <li>Single page routing using react-router-dom and BrowserRouter</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="React Testing Library"
        previewUrl={""}
        iconSrc="react-testing-library-logo.png"
        iconAlt="react testing library icon"
      >
        <ul>
          <li>Component unit testing</li>
          <li>Mocking user interaction and click events</li>
          <li>Version control using Git</li>
        </ul>
      </AboutCard>
      <AboutCard
        title="Figma"
        previewUrl={figmaPreview}
        iconSrc="figma-logo.png"
        iconAlt="figma icon"
      >
        <ul>
          <li>Page layout design</li>
          <li>Feature planning and mockups</li>
        </ul>
      </AboutCard>
    </div>
  );
}