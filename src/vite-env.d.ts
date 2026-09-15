// Ambient declaration for the one virtual module this app imports from
// `@stylexjs/unplugin`.
//
// Only the css-only shim is declared. `devMode: 'css-only'` in vite.config.ts
// means the plugin answers `resolveId`/`load` for this id and never for
// `virtual:stylex:runtime`, so declaring the latter would type a module that
// cannot be loaded.
//
// The empty body is deliberate: the shorthand `declare module 'x'` types every
// import from it as `any`, which under `strictTypeChecked` produces a cascade
// of `no-unsafe-*` errors at the call site.
//
// `*.css` side-effect imports need nothing here -- `vite/client` is already
// listed in tsconfig `compilerOptions.types`. `import.meta.env` needs only the
// one project variable declared below; the rest come from `vite/client` too.
declare module 'virtual:stylex:css-only' {}

// The one project-defined Vite variable: the site's own origin, inlined at
// build time by `src/lib/seo/site.ts`. Declared so it is typed as a string
// rather than reaching `strictTypeChecked` through `ImportMetaEnv`'s index
// signature, which is `any` and would fail every read as `no-unsafe-*`.
/* eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- the repo writes types with `type`, but declaration merging into Vite's own `ImportMetaEnv` is only possible with `interface`. */
interface ImportMetaEnv {
  readonly VITE_SITE_ORIGIN?: string
}
