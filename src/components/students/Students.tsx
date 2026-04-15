import "../../styles/students.css";
import { JSX } from "react";
import Grid from "./Grid";
import RightContent from "./Right-Content";

export default function Students(): JSX.Element {
  return (
    <section className="student-section">

      <Grid />
      <RightContent />

    </section>
  );
}