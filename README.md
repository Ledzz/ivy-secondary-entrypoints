## How to reproduce?

```sh
git clone https://github.com/Ledzz/ivy-secondary-entrypoints
cd ivy-secondary-entrypoints/test-lib
yarn install
yarn watch
yarn link

cd ivy-secondary-entrypoints/test-proj
yarn install
yarn link
yarn start
```

Now try to change template of `projects/mylib/lib/mylib.component.ts`. The main app reloads, but changes are not applied.
