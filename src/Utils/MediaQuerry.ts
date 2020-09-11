import { css, CSSObject } from "styled-components";
import { BreakPoints } from "../Model/Model";

export const breakPoints: BreakPoints = {
    desktop: 1024,
    tablet: 768,
    phone: 420
};

export const screenSmallerThan = Object.keys(breakPoints).reduce(
    (accumulator: any, label: string) => {
        const size = (breakPoints as any)[label];
        accumulator[label] = (literals: TemplateStringsArray, ...args: Array<CSSObject>) => css`
            @media (max-width: ${size}px){
                ${css(literals, ...args)};
            }
        `;
        return accumulator;
    }, {}
);