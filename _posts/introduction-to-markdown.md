---
title: "Introduction to Markdown"
excerpt: "A short backstory and the basics to the markdown language."
coverImage: "/assets/blog/introduction-to-markdown/cover.webp"

date: "2025-09-07"
author:
  name: Daniel Hiebeler
  picture: "/assets/blog/authors/daniel.webp"
ogImage:
  url: "/assets/blog/introduction-to-markdown/cover.webp"
---

Markdown is a markup language which was developed with the goal that it should be easy to write and easy to read. The 
It was created in 2004 by John Gruber in collaboration with Aaron Schwartz.

> Markdown is intended to be as easy-to-read and easy-to-write as is feasible.

The language is used in many day-to-day applications. For example in blogs, documentation, note-taking, and similar. Reddit posts can be written in Markdown. Discord and Slack are using a simplified version of the Markdown syntax for bold, italics, code, etc.


Even this blog post is written in Markdown.

Markdown files have the extension .md or .markdown. They are normal textfiles so they can be edited with any text editor.


## Syntax

Here are the most important elements the language has to offer.

### Paragraphs

Paragraphs are just one or more consecutive lines of text. One or more empty lines are ending the paragraph.

### Headers

There are 6 different headers, ranging from H1 (the largest) to H6 (the smallest). They are written with hashtags at the beginning of the line. The number of hashtags defines the size of the heading.

```markdown
# This is a H1
### This is a H3 **hallo**
###### This is a H6
```

This translates to the following html:
---
```html
<h1>This is a H1</h1>
<h3>This is a H3</h3>
<h6>This is a H6</h6>
```

### Lists

There are unordered lists and ordered lists.

#### Unordered Lists

To create a list item the line is just started with a plus. Insted of the plus it is also possible to use an asterisk (*) or a hyphen (-).

```markdown
+ This is the first element
+ This the second
+ And this the third
```

As HTML:

```markdown
<ul>
  <li>This is the first element</li>
  <li>This the second</li>
  <li>And this the third</li>
</ul>
```

#### Ordered Lists

```markdown
1. This is the first element
2. This the second
3. And this the third
```

As HTML:

```markdown
<ol>
  <li>This is the first element</li>
  <li>This the second</li>
  <li>And this the third</li>
</ol>
```

## Text styles

```markdown
Here is an *emphasized* and here a **bold** word.
```

Here is an *emphasized* and here a **bold** word.

## Links

## Images

