import { getByTestId } from "@testing-library/dom";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Profile from "./components/Profile";
import AppInfo from "./components/AppInfo"
import Project from "./components/Project"
import TestCase from "./components/TestCase"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//This test verifies the Profile Component and it's elements
it("Renders Profile Page Content", () => {
  act(() => {
    render(<Profile />, container);
  });
  const profileTitle = getByTestId(container, "profileTitle")
  const profileEmail = getByTestId(container, "userEmailValue")
  const profileDesignation = getByTestId(container, "profile_designation")
  const profileUpdateDesignation = getByTestId(container, "updateDesignation")
  const profileSignOut = getByTestId(container, "signOut")
  expect(container).toContainElement(profileTitle)
  expect(container).toContainElement(profileEmail)
  expect(container).toContainElement(profileDesignation)
  expect(container).toContainElement(profileUpdateDesignation)
  expect(container).toContainElement(profileSignOut)
});

//This test verifies the Header Component and it's elements by mocking API service
it("Renders Header with App Info data", async () => {
  const mockAppInfo = {
    name: "Mock App Name",
    version: "0.0.0"
  };

  //Jest unit test package will resolve the fetch promise with mock App info
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockAppInfo)
    })
  );

  await act(async () => {
    render(<AppInfo id={mockAppInfo} />, container);
  });

  expect(container.querySelector("b").textContent).toBe(mockAppInfo.name);
  expect(container.querySelector("strong").textContent).toBe(" (v"+mockAppInfo.version+")");

  global.fetch.mockRestore();
});

//This test verifies the Project Component and it's units
it("Renders Project Page Content", () => {
  act(() => {
    render(<Project />, container);
  });
  const projectTable = getByTestId(container, "projectTable")
  const addNewProjectForm = getByTestId(container, "addNewProjectForm")
  const projectTableBody = getByTestId(container, "projectTableBody")
  
  expect(container).toContainElement(projectTable)
  expect(container).toContainElement(addNewProjectForm)
  expect(container).toContainElement(projectTableBody)
  
  //This tests whether the mock container contains a text or not
  expect(container.textContent).not.toContain("Add Project")
  expect(container.textContent).not.toContain("Create Project")
});

//This test verifies the Test Case Component and it's units
it("Renders Test Case Page", () => {
  act(() => {
    render(<TestCase />, container);
  });

  const projectsDD = getByTestId(container, "projectsDD")
  const testCaseTable = getByTestId(container, "testCaseTable")
  const addTestCaseRow = getByTestId(container, "addTestCaseRow")
  const testCaseBody = getByTestId(container, "testCaseBody")

  expect(container).toContainElement(projectsDD)
  expect(container).toContainElement(testCaseTable)
  expect(container).toContainElement(addTestCaseRow)
  expect(container).toContainElement(testCaseBody)
  
  //This tests whether the mock container contains a text or not
  expect(container.textContent).not.toContain("Add Test Case")
  expect(container.textContent).toContain("Create Test Case")
})