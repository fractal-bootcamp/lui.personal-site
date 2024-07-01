# Operators in Programming

#### Arithmetic Operators

```
+ add
- subtract
* multiply
/ divide
// floor division (round down) - not directly available in Typescript, but can be mimicked with Math.floor(a / b )
% remainder
++ increment
-- decrement
```

#### Relational Operators

```
== equals
!- not equals
> greater than
< less than
>= greater or equal
<= less or equal
=== strictly equals (in value and type)
```

#### Logical Operators

```
&& AND
|| OR
! NOT
```

#### Assignment Operator

```
= let
```

#### Bitwise Operator

```
& bitwise AND
| bitwise OR
^ bitwise XOR
~ bitwise NOT
<< bitwise left shift
>> bitwise right shift
```

#### Other

```
?? nullish coalescing operator, provides a default value for a variable if the original value is null or undefined (e.g. const result = value ?? defaultValue;)
```

eg...

```ts
const a = 1;
const b = 2;
const c = a ?? b;
```

### What even is an operator?

A symbol (or short set of symbols) that tells the compiler or interpreter to perform specific mathematical, relational, or logical operation and produce a final result. Let's list them out:
