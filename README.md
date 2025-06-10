# Rails and React Interview Template

You've landed an interview for a Rails developer role. Just three hours before the big moment, you get an email: you're expected to pair program using a Rails + React setup.

Suddenly, you're scrambling - installing Rails, React, and all the necessary gems - only to run into integration issues.

Skip the stress. This template comes pre-configured with Rails, TypeScript, and React, so you can focus on what really matters: preparing for the interview.

Use it in your code challenge, pair programming, or next SaaS idea.

💎 Ruby 3.2+

🛤️ Rails 8

📜 TypeScript

⚛️ React

📦 esbuild + watch mode

👮 Rubocop

💯 RSpec

## Unzipping into WSL
```
Expand-Archive -Path "C:\Users\konam\Downloads\rails-react-interview-template-main.zip" -DestinationPath "\\wsl$\Ubuntu-22.04\home\rchou\workspace\"
```

## Setup
```
bundle install
yarn install
rails s
```

## Watch mode

Run this on a separate terminal
```
yarn build --watch
```

## Tests

```
rspec
```

## Rubocop

```
rubocop --autocorrect-all
```

## Up and running

![image](https://github.com/user-attachments/assets/3ec8eb8b-2fac-4396-933c-b1a39622aeea)

## Deploying to Render

I wrote an [article](https://medium.com/@richardchou/deploying-rails-to-render-eee0ed76475a) to show how to deploy this template to Render.
