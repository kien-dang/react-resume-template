/**
 * @license
 * Copyright 2016 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// an extended version of tslint's spaceBeforeFunctionParenRule that treats type definitions like this:
//
// type MyType = {
//   foo(): number 
// }
//
// as being different from methods. (PlanKit extensively uses that style of type definition for dependency
// injection, and we want to mandate spaces everywhere *except* on those types)

const { getChildOfKind, hasModifier } = require('tsutils')
const ts = require('typescript')
const Lint = require('tslint')

const ALWAYS_OR_NEVER = {
  enum: ["always", "never"],
  type: "string",
};

class Rule extends Lint.Rules.AbstractRule {
  apply(sourceFile) {
    return this.applyWithFunction(sourceFile, walk, parseOptions(this.ruleArguments[0]));
  }
}

exports.Rule = Rule

Rule.INVALID_WHITESPACE_ERROR = "Spaces before function parens are disallowed"
Rule.MISSING_WHITESPACE_ERROR = "Missing whitespace before function parens"
Rule.metadata = {
  description: "Require or disallow a space before function parenthesis",
  hasFix: true,
  optionExamples: [
    true,
    [true, "always"],
    [true, "never"],
    [true, { anonymous: "always", named: "never", asyncArrow: "always" }],
  ],
  options: {
    properties: {
      anonymous: ALWAYS_OR_NEVER,
      asyncArrow: ALWAYS_OR_NEVER,
      constructor: ALWAYS_OR_NEVER,
      method: ALWAYS_OR_NEVER,
      named: ALWAYS_OR_NEVER,
      typeMethod: ALWAYS_OR_NEVER,
    },
    type: "object",
  },
  optionsDescription: Lint.Utils.dedent`
      One argument which is an object which may contain the keys \`anonymous\`, \`named\`, and \`asyncArrow\`
      These should be set to either \`"always"\` or \`"never"\`.

      * \`"anonymous"\` checks before the opening paren in anonymous functions
      * \`"named"\` checks before the opening paren in named functions
      * \`"asyncArrow"\` checks before the opening paren in async arrow functions
      * \`"method"\` checks before the opening paren in class methods
      * \`"constructor"\` checks before the opening paren in class constructors
      * \`"typeMethod"\` checks before the opening paren in properties of type declarations
  `,
  ruleName: "space-before-function-paren-extended",
  type: "style",
  typescriptOnly: false,
}

const optionNames = ["anonymous", "asyncArrow", "constructor", "method", "named", "typeMethod"];

function parseOptions(json) {
  // Need to specify constructor or it will be Object
  const options = { constructor: undefined };
  for (const optionName of optionNames) {
    options[optionName] = typeof json === "object" ? json[optionName] : json === undefined ? "always" : json;
  }
  return options;
}

function walk(ctx) {
  const { options, sourceFile } = ctx;
  ts.forEachChild(sourceFile, function cb(node) {
    const option = getOption(node, options);
    if (option !== undefined) {
      check(node, option);
    }

    ts.forEachChild(node, cb);
  });

  function check(node, option) {
    const openParen = getChildOfKind(node, ts.SyntaxKind.OpenParenToken, sourceFile);
    // openParen may be missing for an async arrow function `async x => ...`.
    if (openParen === undefined) { return; }

    const hasSpace = Lint.isWhiteSpace(sourceFile.text.charCodeAt(openParen.end - 2));

    if (hasSpace && option === "never") {
      const pos = openParen.getStart() - 1;
      ctx.addFailureAt(pos, 1, Rule.INVALID_WHITESPACE_ERROR, Lint.Replacement.deleteText(pos, 1));
    } else if (!hasSpace && option === "always") {
      const pos = openParen.getStart();
      ctx.addFailureAt(pos, 1, Rule.MISSING_WHITESPACE_ERROR, Lint.Replacement.appendText(pos, " "));
    }
  }
}

function getOption(node, options) {
  switch (node.kind) {
    case ts.SyntaxKind.ArrowFunction:
      return !hasTypeParameters(node) && hasModifier(node.modifiers, ts.SyntaxKind.AsyncKeyword)
        ? options.asyncArrow : undefined;

    case ts.SyntaxKind.Constructor:
      return options.constructor;

    case ts.SyntaxKind.FunctionDeclaration:
    // name is optional for function declaration which is default export (TS will emit error in other cases).
    // Can be handled in the same way as function expression.
    case ts.SyntaxKind.FunctionExpression: {
      const functionName = node.name;
      const hasName = functionName !== undefined && functionName.text !== "";

      return hasName ? options.named : !hasTypeParameters(node) ? options.anonymous : undefined;
    }

    case ts.SyntaxKind.MethodDeclaration:
    case ts.SyntaxKind.MethodSignature:
    case ts.SyntaxKind.GetAccessor:
    case ts.SyntaxKind.SetAccessor:
      if (node.parent != null && node.parent.kind === ts.SyntaxKind.TypeLiteral) {
        return options.typeMethod
      }
      return options.method;

    default:
      return undefined;
  }
}

function hasTypeParameters(node) {
  return node.typeParameters !== undefined;
}