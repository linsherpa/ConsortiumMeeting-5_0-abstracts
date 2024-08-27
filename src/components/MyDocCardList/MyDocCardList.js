import React from "react";
import clsx from "clsx";
import MyDocCard from "./MyDocCard";

export default function MyDocCardList(props) {
    const { items, className } = props;

    return (
        <section className={clsx("row", className)}>
            {items.map((item, index) => (
                <article key={index} className="col col--6 margin-bottom--lg">
                    <MyDocCard item={item} />
                </article>
            ))}
        </section>
    );
}
