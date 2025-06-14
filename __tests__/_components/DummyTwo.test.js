import DummyTwo from "@/app/_components/DummyTwo";
import { render } from "@testing-library/react";

describe("DummyTwo Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<DummyTwo />);

    // Check if the button with text "hello world" is in the document
    const buttonElement = getByTestId("btn");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("hello world");
  });
});
