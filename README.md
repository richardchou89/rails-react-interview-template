# Rails and React Interview Template

Rails + React + TypeScript + esbuild. Use it for interview or your SAAS application.

Ruby 3.1+

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

## Yarn watch mode

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
