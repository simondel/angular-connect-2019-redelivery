## Templating
```TS
// "Schematic"
export function schematicsDemo(options: { name: string }): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');

    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
        ...options,
        ...strings // import uit Angular lib met helper strings
      })
    ]);

    return mergeWith(sourceParameterizedTemplates);
  };
}
```

```TS
// files/hello-__name@dasherize__.ts
console.log('Hello <%= name %>');
```