import React from "react";
import OpenCode from "./OpenCode";
import { Routes, Route } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>AboutPage</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <Routes>
        <Route path="opencode" element={<OpenCode />} />
      </Routes>
    </div>
  );
}
