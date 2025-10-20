import "@fontsource/lato"

// This import returns the path to the file.
import svgFile from "./thumbnail.svg";

// Fetch the content of the SVG file.
const svgMarkup = await fetch(svgFile).then((r) => r.text());

const dp = new DOMParser();
const svgDocument = dp.parseFromString(svgMarkup, "image/svg+xml");

const svg = svgDocument.querySelector<SVGElement>("svg");


document.body.append(svg);
