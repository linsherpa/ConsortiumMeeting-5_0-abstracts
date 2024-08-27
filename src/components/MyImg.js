import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

function MyImg(props) {
    const { colorMode } = useColorMode();

    return (
        <img
            src={colorMode === "dark" ? props.srcDark : props.src}
            alt={props.alt}
            width={props.width}
            className={props.className}
        />
    );
}

export default MyImg;
