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
// `*.css` side-effect imports and `import.meta.env` need nothing here --
// `vite/client` is already listed in tsconfig `compilerOptions.types`.
declare module 'virtual:stylex:css-only' {}
