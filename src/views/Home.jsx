import React from "react";
import Section from "../component/Section";
import Songs from "../Data/Songs";

export default function Home() {
  return (
    <div className="grid gap-y-8">
      <Section title="Recently Played" more="/" items={Songs} />
      <Section title="Shows to try" more="/" items={Songs} />
      <Section title="Made for you" more="/" items={Songs} />
    </div>
  );
}
