import type { Dispatch, SetStateAction } from "react";

export type SetStateType<T> = Dispatch<SetStateAction<T>>;
export type AwaitedReturn<T> = T extends (...args: any) => Promise<infer U> ? U : never;
