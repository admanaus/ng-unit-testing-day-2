This project is configured as a fully-standalone Angular 20 application.

- Bootstrapping happens in src/main.ts using `bootstrapApplication(AppComponent, { providers: [...] })`.
- Routing is provided via `provideRouter(...)` in main.ts.
- HttpClient is provided via `provideHttpClient()` in main.ts.
- In-memory API is wired using `importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(...))` in main.ts.
- Components and pipe are `standalone: true` and import other standalone features via their `imports` arrays.

The legacy Angular modules are no longer used:
- src/app/app.module.ts (removed)
- src/app/app-routing.module.ts (kept only for reference; not used by the app)

You can safely delete app-routing.module.ts later, since routing is already configured in main.ts.
