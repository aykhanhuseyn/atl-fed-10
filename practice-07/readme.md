# Object Oriented JavaScript

## Tasks

- Read any article about OOP principles: _abstraction_, _inheritance_, _encapsulation_, and _polymorphism_

- Write a short example of Interitance:

  - `object` with `Object.create`
  - `object` with `__proto__`
  - `class` with `extends`

- Write a short example of Encasulation

- Generate a class named Authentication

```typescript
interface LoginUser {
  username: string;
  password: string;
}

interface User extends LoginUser {
  id: string;
  name: string;
  surname: string;
}

interface Authentication {
  // all users
  users: User[]

  // logged in users
  sessionUsers: Username[]

  // if success: 200
  // if user is not correct: 400
  // if username or password incorrect: 401
  // if already logged in: 403
  // if user not found: 404
  // else: 500

  login: (user: LoginUser) => 200 | 400 | 401 | 403 | 404 | 500

  logout: (username: string) => 200 | 400 | 401 | 403 | 404 | 500

  register: (user: User) => 200 | 400 | 401 | 403 | 404 | 500
}

const auth = new Authentication();
auth.register(user);
auth.login(loginUser);
auth.logout(username);
```

## GAME

- `X-O` game with DOM
