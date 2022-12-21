import React from "react";
import Songitem from "./Songitem";
import Title from "./Title";
export default function Section({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid gap-x-6 grid-cols-5">
        {items.map((item) => (
          <Songitem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
