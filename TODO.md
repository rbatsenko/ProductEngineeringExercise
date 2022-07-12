# List of tasks

### Structure, deps, environment

- [x] Upgrade dependencies, set `save-exact` to `true`
- [x] Add `TypeScript`
- [x] Add `ESLint`, `Prettier`
- [x] Configure pre-commit checks
- [x] Styling solution (Use `CSS Modules` - Ant Design provides basic styles already,`CSS Modules` will be a customization tool, supported out-of-the-box in `Next.js`)
- [x] Utilized environment variables
- [ ] Add CI/CD pipelines (Connected to `Vercel`) - still to add CI checks (Linting, Tests etc.)

### UI

- [ ] Sketch app layout and component tree (I would do it normally, but not in a 3,5h time frame 🙂)
- [x] Create app layout (using `Sider` for switching between Boards client-side)
- [x] Decide on component state locations (https://reactjs.org/docs/lifting-state-up.html) - there were actually not so much to decide about yet as Boards are not so advanced in their structure
- [x] ~~API routes for `Backend for Frontend` pattern~~? (logic, data transformation to associate companies and people) - I just did it in `getStaticProps` and actually the next low-hanging fruit would be to move the logic for putting Cards data into Board columns also in `getStaticProps`, so then `Board` component would just render those and not calculate anything.
- [ ] Mobile, tablet versions, responsiveness - when using Ant Design (or any UI libraries) it's easier to achieve

### Testing

- [ ] Unit, Integration tests with `Jest`, `React Testing Library` - still to complete
- [ ] E2E tests with `Cypress` - still to complete

### Sorting and Filters

I would add the Sort and Filter panel between the Board and Title.

- Considering the actual number of people and companies right now, I would go for doing it client-side with some sort of form to track all the fields values (or just separate states for them) and then showing the `Cards` accordingly (with useEffect).
- The second way would be to change the architecture and do it on the `Server Side` (with passing params through router?). Eg. having `/board/company` and `/board/people` pages. But even considering Jira interface there is always some filter applied to show smaller number of items and do stuff on the Frontend, so I'd probably go that way, unless we have all the filtering and sorting available directly from the API. Or we could build that BFF with filtering and sorting using API routes, that'd be fun 🥰🥰🥰

### Additional work on the code

- [ ] Use more `Ant Design` ready-made components (eg. for `Typography`), there are some more components that can be extracted to reuse them, just to make the codebase more clean
- [ ] Extract content strings into separate files, so it's easier to then go for `i18n` when we will need translations
- [ ] Extract and give names to predicates for `Board` columns (those for deciding which `Card` goes where)
- [ ] Add Error handling, edge cases handling (when we can't fetch Companies, Persons data etc.)
- [ ] Add better response data transforming layer, backend API client abstractions

### Additional features

- [ ] Add Incremental Static Regeneration? So when Google Sheet is being edited and new users, companies appear, our Board shows them right away
