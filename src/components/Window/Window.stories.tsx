import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Window from "./Window";

const ExampleComponent = () => {
    return (
        <>
        <div>Example Component</div>
        </>
    )
}

export default {
    title: "Components/Window",
    component: Window,
} as Meta;

export const WindowWithComponent = () => {
    return ( 
    <>
        <Window title="Window Title">
            <ExampleComponent />
        </Window>
    </>
    )
}