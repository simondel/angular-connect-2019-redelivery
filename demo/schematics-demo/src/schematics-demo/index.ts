import { Rule, SchematicContext, Tree, url, apply, template, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function schematicsDemo(options: { name: string }): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');

    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
        ...options,
        ...strings
      })
    ]);

    return mergeWith(sourceParameterizedTemplates);
  };
}

export function catify(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.visit((filePath, entry) => {
      if (filePath.startsWith('/node_modules')) return;
      if (!filePath.endsWith('.html') || !entry) return;
      const fileContents = entry.content.toString();
      tree.overwrite(filePath, fileContents.replace(/<img src="(.*)">/gi, '<img src="https://cataas.com/cat/gif">'));
    });
  }
}
