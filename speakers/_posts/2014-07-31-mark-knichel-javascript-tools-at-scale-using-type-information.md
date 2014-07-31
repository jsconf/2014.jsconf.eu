---
layout: default
tags: speaker
title: JavaScript Tools at Scale Using Type Information – Mark Knichel
permalink: "/speakers/mark-knichel-javascript-tools-at-scale-using-type-information.html"
speaker: Mark Knichel
talk: JavaScript Tools at Scale Using Type Information
website: ""
twitter: ""
github: ""
gplus: "https://plus.google.com/115060278409766341143"
from: "Mountain View, CA, USA"
description: "2013 and 2014 has seen the rise of JavaScript parsers that generate a consumable AST (such as Esprima or Acorn) and static analysis tools that operate on that AST (eslint, esmangle, or escodegen, or graspjs). These tools all operate on the structure of JS but have to rely on the AST node type or full name to modify the underlying code. With type information, static analysis and refactoring tools could be made more powerful by being able to accurately refer to any JavaScript statement in the codebase.\n\nIn this talk I’ll show how to use declared and inferred type information to make JavaScript safer to use at scale (think prevent XSS) and how to use simple JavaScript templates to apply complex automated refactorings in minutes throughout extremely large code bases."
image: 
  width: 120
  height: 120
  type: jpg
  heightSite: 200
  filename: "/speakers/images/mark-knichel.jpg"
---

{% include speaker.md %}
