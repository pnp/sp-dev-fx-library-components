/*
This file demonstrates how we can separate functionality that might not need to be loaded with the SPFx Web Part or Extension immediately, but be bundled into a separate .js file within the library and loaded dynamically.
We will be bundling custom functionality in the imported .ts file.
This demonstrates how if we have the need to bundle a custom functionality, which we can delay the loading of it until aboslutely needed.
*/

export default class CustomFunctions {

    public static welcomeAlert(): void {
      alert('Welcome to my Custom Function');
    }

    public static welcomeConsole(): void {
        console.log('Welcome to my Custom Function');
      }
  }