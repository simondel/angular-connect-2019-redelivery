## Code example

```TS
export function mySchematic(options: any): Rule {
  return (tree: Tree) => {
    tree.create('hello.js', `console.log('hello world')`);

    return tree;
  };
}
```