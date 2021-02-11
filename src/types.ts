export type Template = (() => string) | ((functionName: string) => string) | ((functionName: string, styleFileName: string) => string)
