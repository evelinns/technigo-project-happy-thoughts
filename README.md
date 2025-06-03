# Happy Thoughts

Project to fetch and send data to an API.

- Fetch existing happy thoughts from the API and show on the page
- Input form to allow user to submit a happy thought, on submit the list of happy thoughts are updated to show the latest one too
- Thoughts displayed in order of recently submitted
- User is able to like a thought, it will show the like button as clicked and prevent user from liking the same thought multiple times
- Time displayed is formatted to show when it was submitted, if just now, x minutes ago, x hours ago or x days ago

Changes I'd make if I had more time
- Adding a loading state for when it's waiting for the API to show and load items
- Adding animations on the like portion
- I would also look into further the optimistic update to not have the delay on the API side

## View it live

Can be viewed live here: https://technigo-happythoughts.netlify.app/

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```
