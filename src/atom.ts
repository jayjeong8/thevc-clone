import {atom} from "recoil";

export const openToggleState = atom<boolean>({
    key: 'openToggleState',
    default: true
});