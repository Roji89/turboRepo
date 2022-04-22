import * as React from "react";
import SideBar from "./Menu";
import Paper from "@mui/material/Paper";
import { mocked } from "ts-jest/utils";
import { cleanup, render, screen } from "@testing-library/react";
import { Icon } from "@mui/material";

jest.mock("@mui/material/Paper", () => ({
  ...jest.requireActual("@mui/material/Paper"),
}));

const renderComponent = () =>
  render(
    <SideBar
      style={{
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      open={false}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onClickOpen={() => {}}
      onClickClose={() => {}}
      openByClick={false}
    ></SideBar>
  );

describe("<SideBar />", () => {
  beforeEach(() => cleanup());

  it("should match snapshot", () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it("<DrawerHeader />", () => {
    expect(screen.findAllByRole("button")).toBeInTheDocument;
  });
});
