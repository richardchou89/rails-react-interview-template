# Rails and React Integration Template

Rails + React + TypeScript + esbuild. Use it for interview or your SaaS application.

Ruby 3.2+

Rails 8.0.2

Tested on Windows WSL and Mac.

## Setup
Unzip into WSL:
```
Expand-Archive -Path "C:\Users\konam\Downloads\rails-react-interview-template-main.zip" -DestinationPath "\\wsl$\Ubuntu-22.04\home\rchou\workspace\"
```

```
bundle install
yarn install
rails s
```

## Watch mode

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
