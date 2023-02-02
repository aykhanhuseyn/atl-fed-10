declare let num: number;
declare let str: string;
declare let sym: symbol;
declare let nil: null;
declare let und: undefined;
declare let bool: boolean;
declare let big: BigInteger;
declare let arr: [];
declare let arr1: number[];
declare let arr2: Array<number>;
declare let obj: {};
declare let an: any;
declare let un: unknown;
interface Human {
    name: string;
}
type Person = {
    readonly id: string;
    age: number;
} & Human;
declare let p: Person;
interface A {
    name: string;
}
interface A {
    surname: string;
}
declare let aaa: A;
type B = {
    name: string;
};
type CalculateAge = (year: number, name?: string) => number;
declare const calculateAge: CalculateAge;
declare function getGel(distance: number): boolean;
