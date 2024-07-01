# Simple Patterns in TypeScript

Some of these have alternative options. Only listing my preference here.

## Immutables

```ts
const simpleArray1: string[] = ["a", "b", "c"];

const simpleArray2: number[] = [1, 2, 3];

const simpleObject: { a: string; b: number } = { a: "a", b: 1 };
```

## Function

```ts
const combineArrays = (arr1: any[], arr2: any[]): any[] => {
  return [...arr1, ...arr2];
};
```

This is why const makes sense here...

```ts
const sayNothing: Function = () => {};
```

# Types

```ts
type Gate = "AND" | "OR";

type GameBoardProps = {
  id: number;
  usernId: string;
  gate: Gate;
  condition: conditionFunc;
};

export type conditionFunc = (item: string) => boolean;
```
