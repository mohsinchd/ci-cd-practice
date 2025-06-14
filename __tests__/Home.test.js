import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// Mock the Image component from next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, priority, ...props }) => {
    return (
      <img
        src={src}
        alt={alt}
        data-priority={priority ? "true" : undefined}
        {...props}
      />
    );
  },
}));

describe("Home Page", () => {
  it("renders Next.js logo", () => {
    render(<Home />);

    // Check if the Next.js logo is in the document
    const logoImage = screen.getByAltText("Next.js logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/next.svg");
  });

  it("contains 'Get started by editing' text", () => {
    render(<Home />);

    const startedText = screen.getByText(/Get started by editing/i);
    expect(startedText).toBeInTheDocument();
  });
});
