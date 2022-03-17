import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        black: string;
        blue:{
            deep: string;
            dark: string;
            main: string;
            light: string;
        };
        gray: {
            dark: string;
            gray: string;
        };
        white: string;
        type: {
            L: string;
            M: string;
            S: string;
        };
        gap: {
            L: string;
            M: string;
            S: string;
        };
    }
}