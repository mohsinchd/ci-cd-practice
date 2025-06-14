import React from "react";
import { render, screen } from "@testing-library/react";
import Dummy from "../app/_components/Dummy";

describe("Dummy Component", () => {
  it("renders correctly", () => {
    render(<Dummy />);

    // Check if the text "Dummy" is in the document
    const dummyText = screen.getByText("Dummy");
    expect(dummyText).toBeInTheDocument();
  });
});
