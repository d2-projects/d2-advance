# [D2 Advance](https://github.com/d2-projects/d2-advance)

[![last release](https://img.shields.io/github/v/release/d2-projects/d2-advance?style=flat-square)](https://github.com/d2-projects/d2-advance/releases)
[![ci](https://img.shields.io/github/workflow/status/d2-projects/d2-advance/Release%20pipeline?logo=github&style=flat-square)](https://github.com/d2-projects/d2-advance/actions)
[![last commit](https://img.shields.io/github/last-commit/d2-projects/d2-advance?logo=git&logoColor=white&style=flat-square)](https://github.com/d2-projects/d2-advance/commits/master)

> Advanced, colorful front-end integration practice. be inspired by D2Admin 🧗

Preview 👉 [https://d2.pub/d2-advance/preview](https://d2.pub/d2-advance/preview)
 
Public Repositories: [Github](https://gitee.com/d2-projects/d2-advance) | [码云](https://gitee.com/d2-projects/d2-advance) (mirror)

## Goal

- Less is more
- Dark mode 🌛
- Responsive 💻 📱
- Lightweight and faster ⚡️

## Integration

-  ⚡️ [Vite](https://vitejs.dev/guide/), be faster than webpack.
- 🖖 Vue3 ecosystem: [vue](https://v3.vuejs.org/)、[vue-router](https://next.router.vuejs.org/)、[vuex](https://vuex.vuejs.org/guide/)
- Tailwind CSS class utils: [Windi CSS](https://windicss.org/guide/features.html)
- Typescript support: [volar](https://github.com/johnsoncodehk/volar)、[vue-tsc](https://github.com/johnsoncodehk/vue-tsc)
- [IconPark](https://iconpark.bytedance.com/official) resource with [@icon-park/vue-next](https://github.com/bytedance/IconPark/blob/master/packages/vue-next/README.md)
- HTTP local mock: [miragejs](https://miragejs.com/docs/main-concepts/route-handlers/)
- HTTP request: [axios](https://github.com/axios/axios)
- [ESLint](https://eslint.org/) extends prettier and vue config
- Git commit prompted: [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
- Lint git commit message: [commitlint](https://commitlint.js.org/)
- Lint git staged files: [lint-staged](https://github.com/okonet/lint-staged)
- Git custom hooks: [husky](https://typicode.github.io/husky/#/)
- [Jest](https://jestjs.io/) for unit test with [@testing-library/vue](https://github.com/testing-library/vue-testing-library) (TODO)
- New version and changelog generation: [standard-version](https://github.com/conventional-changelog/standard-version)
- Build with gzip and brotli output: [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression)
- Visualize bundle: [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)

## Demo

- Admin `src/views/admin`: An elegant dashboard (IN PROGRESS)
- Space `src/views/space`: An personal workspace (IN PROGRESS)
- ...more. welcome to your [issues](https://github.com/d2-projects/d2-advance/issues/new)

## Getting Started

**Requirements**

-   Git
-   NodeJS 12+
-   VSCode (optional, recommended)

``` bash
# setup
yarn install

# start dev server
yarn serve

# production build
yarn build

# build with `report.html`
yarn build:report

# locally preview production build
yarn preview

# check and auto fix code by eslint
yarn lint
yarn lint --fix

# check type
yarn type

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
  VITE_HTTP_MOCK?: 'on' | 'off'; // is build with mock
  VITE_SOURCE_MAP?: 'on' | 'off'; // is output .map
  VITE_GZIP?: 'on' | 'off'; // is output .gz
  VITE_BROTLI?: 'on' | 'off'; // is output .br

  VITE_API_BASE_URL: string;
  // ... more here and start with 'VITE_'
}
```

default values in `.env`:

```
VITE_BASE_URL=./
VITE_HTTP_MOCK=on
VITE_SOURCE_MAP=off
VITE_GZIP=on
VITE_BROTLI=on

VITE_API_BASE_URL=/api
```

### Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).

## License

MIT © [CNine](https://github.com/Aysnine/)
