import { ReactNode } from "react";

export interface LayoutsProps{
    children?: ReactNode,
    title?: string,
}

export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)?.split('"').join('')
}