declare let variable: string;
declare function stringReturner(): string | null;
declare const array: number[];
declare const tuple: [string, number];
type Color = 'red' | 'green' | 'blue';
type ColorTuple = [Color, number, number?];
declare const red: ColorTuple;
declare const blue: ColorTuple;
declare const green: ColorTuple;
declare const purple: ColorTuple;
type Names = 'John' | 'Jane' | 'Jack';
type Points = 1 | 2 | 3 | 4 | 5;
type ExamResults = [Names, Points];
declare const results: ExamResults[];
type Address = {
    city: string;
    street: string;
    number: number;
};
type Person = Partial<{
    name: string;
    age: number;
    isMarried: boolean;
    address: Address;
}>;
declare const object: Person;
type Animal = {
    name?: 'Dog' | 'Cat' | 'Bird' | 'Fish' | 'Horse' | 'Cow' | 'Pig';
    age?: number;
};
declare const animal: Required<Animal>;
declare function printAnimalName(animal: Animal): Animal['name'];
declare const animalName: "Dog" | "Cat" | "Bird" | "Fish" | "Horse" | "Cow" | "Pig" | undefined;
declare const animalNameZOR: "Dog" | "Cat" | "Bird" | "Fish" | "Horse" | "Cow" | "Pig";
declare const animalNameAS: "Dog" | "Cat" | "Bird" | "Fish" | "Horse" | "Cow" | "Pig";
declare const pi = 3.14;
interface Runnable {
    run(): void;
}
interface Swimmable {
    swim(): void;
}
declare class Human {
}
declare class Personcuk extends Human implements Runnable, Swimmable {
    run(): void;
    swim(): void;
}
declare function letsGoToTheSea(uzeBilenLyuboyQaqasnanGedirem: Swimmable): void;
declare const person: Personcuk;
declare function noRet(): Personcuk;
type Nese = ReturnType<typeof noRet>;
type Employee = {
    ssn: string;
    id?: number;
    pin: number;
};
type Developer = {
    ssn: string;
    languages: string[];
};
type Designer = {
    ssn: string;
    tools: string[];
};
type DBAdmin = {
    ssn: string;
    db?: string[];
    pin: number;
};
declare const civi: Developer;
declare const qara: Designer;
declare let employee: Employee;
declare const db: DBAdmin;
interface Dev<L extends any[] = ('js' | 'ts')[]> {
    name: string;
    languages: L;
}
declare const dev: Dev;
declare const dev2: Dev<('js' | 'ts' | 'c#')[]>;
declare function getName(message: string): string | never;
declare enum Month {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
}
declare const enum Role {
    Admin = "admin",
    Moderator = "moderator"
}
declare const roles: {
    Admin: string;
    Moderator: string;
};
//# sourceMappingURL=index.d.ts.map