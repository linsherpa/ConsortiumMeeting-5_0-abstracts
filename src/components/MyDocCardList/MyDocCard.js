/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
    useDocById,
    findFirstSidebarItemLink,
} from "@docusaurus/plugin-content-docs/client";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { translate } from "@docusaurus/Translate";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

function CardContainer({ href, children }) {
    return (
        <Link
            href={href}
            className={clsx("card padding--lg", styles.cardContainer)}
        >
            {children}
        </Link>
    );
}

function CardLayout({ href, icon, title, description }) {
    return (
        <CardContainer href={href}>
            <Heading
                as="h2"
                className={clsx("text--truncate", styles.cardTitle)}
                title={title}
            >
                {icon} {title}
            </Heading>
            {description && (
                <p
                    className={clsx("text--truncate", styles.cardDescription)}
                    title={description}
                >
                    {description}
                </p>
            )}
        </CardContainer>
    );
}

export default function Card({ item }) {
    const icon = item.icon ?? "📄";
    const doc = useDocById(item.docId ?? undefined);
    return (
        <CardLayout
            href={item.href}
            icon={icon}
            title={item.label}
            description={item.description ?? doc?.description}
        />
    );
}
