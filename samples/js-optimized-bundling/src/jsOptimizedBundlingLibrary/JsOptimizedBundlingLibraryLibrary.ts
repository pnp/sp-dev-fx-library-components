export default class JsOptimizedBundlingLibraryLibrary {
  // This will setup the 'ImportJquery.ts' to be bundled into a separate .js file.
  public async dynamicallyImportJquery() : Promise<any> {
    const importedJQ = await import(
      './ImportJquery'
    );
    let $ = importedJQ.default.jquery();
    return $; 
  }

  // This will setup the 'ImportMoment.ts' to be bundled into a separate .js file.
  public async dynamicallyImportMoment() : Promise<any> {
    const importedMoment = await import(
      './ImportMoment'
    );
    return importedMoment.default.moment();
  }

   // This will setup the 'ImportCustomFunctions.ts' to be bundled into a separate .js file.
   public async dynamicallyImportCustomFunctions() : Promise<any> {
    const importedCustomFunctions = await import(
      './ImportCustomFunctions'
    );
    return importedCustomFunctions;
  }
}
