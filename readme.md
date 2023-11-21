# Reproductioon for Stencil Type Issue

Sometimes, Stencil fails to generate the `dist/types` directory when using the SASS plugin and some special conditions apply (see issue or the `my-component.tsx` file).

This project has been generated using `npm init stencil`, with tests and utils removed and the `@stencil/sass` plugin installed.

Versions:

- Node: `20.9.0` (latest LTS)
- NPM: `10.2.4` (latest)
- Stencil: `4.7.2`
- Stencil SASS: `3.0.7`

Tested on both Windows and Linux (Alpine+Ubuntu) machines.

## Quick start

1. Install dependencies: `npm i`.
2. I've included a script to make the build process quicker: `python loop.py 10` (this builds the project 10 times and checks the types directory each time).

Please note: The types are generated sometimes. In my experience, the chance for the types to not be generated is around 50%. All **breaking** cases always break in the first 5 attempts (usually in the first two), all **working** cases work at least 20 consecutive attempts. 