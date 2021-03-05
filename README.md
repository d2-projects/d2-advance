# [D2 Advance](https://github.com/d2-projects/d2-advance)

[![last release](https://img.shields.io/github/v/release/d2-projects/d2-advance?style=flat-square)](https://github.com/d2-projects/d2-advance/releases)
[![ci](https://img.shields.io/github/workflow/status/d2-projects/d2-advance/Release%20pipeline?logo=github&style=flat-square)](https://github.com/d2-projects/d2-advance/actions)
[![last commit](https://img.shields.io/github/last-commit/d2-projects/d2-advance?logo=git&logoColor=white&style=flat-square)](https://github.com/d2-projects/d2-advance/commits/master)

> Advanced, colorful front-end integration practice. be inspired by D2Admin 🧗

Preview 👉 [https://d2.pub/d2-advance/preview](https://d2.pub/d2-advance/preview)

## Public Repositories

*   [Github](https://gitee.com/d2-projects/d2-advance)
*   [码云](https://gitee.com/d2-projects/d2-advance) (mirror)

## Getting Started

**Requirements**

-   Git
-   NodeJS 12+

``` bash
# setup
yarn install

# start dev server
yarn serve

# production build
yarn build

# locally preview production build
yarn preview

# check and auto fix code by eslint
yarn lint
yarn lint --fix

# git commit by commitizen
yarn commit

# take a release commit by standard-version
yarn release

# unit test by jest
yarn test:unit
```

### Custom env variables

type in ` global.d.ts`:

``` ts
// ...
interface CustomEnvVariables {
  VITE_BASE_URL: string;
  VITE_MOCK?: 'on' | 'off'; // is build with mock
  VITE_SOURCE_MAP?: 'on' | 'off'; // is output .map
  VITE_GZIP?: 'on' | 'off'; // is output .gz
  VITE_BROTLI?: 'on' | 'off'; // is output .br

  // VITE_XXX?: string;
  // ... more here and start with 'VITE_'
}
```

default values in `.env`:

```
VITE_BASE_URL=./
VITE_MOCK=on
VITE_SOURCE_MAP=off
VITE_GZIP=on
VITE_BROTLI=on
```

### Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).

## License

MIT © [CNine](https://github.com/Aysnine/)
