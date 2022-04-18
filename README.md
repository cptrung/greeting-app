# Greeting-app

React Native application that greets you when the app opens.

- Need to enter your name the first time.
- Greeting you with time and name.

## Dev flow.
- In the first time, you need to input the name and the system will create a new record.
- In other times to open, the app will fetch data and show correctly that you entered

## Setup and run project

App use Expo to init, See the setup enviroment at https://reactnative.dev/docs/environment-setup

- Install dependencies by running `yarn install`.
- Run `yarn start` to start the local development server.
- Use Expo app on device or simulator to run app.
- 😎 **That's it!** You're ready to uses.

## Other scripts

#### `yarn lint`

To check code use eslint

#### `yarn test`

To run unit test

## Environment Variables

You can configure some of App's behavior using environment variables.

```
API_URL='https://625adbffe5365680a1ef0af1.mockapi.io/api/'
```

### Project Structure

- All primary screens are located inside `src/screens`.
- The `src/components` directory hosts all template-specific subcomponents in their own subdirectory.
- Other extra styles specific to the libraries used are located inside `src/assets`.
- The `src/api` directory contains apis call and axios config.
- The `src/utils` directory contains generic utilities.
