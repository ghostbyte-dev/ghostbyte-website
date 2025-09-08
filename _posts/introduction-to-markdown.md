---
title: "Introduction to Markdown"
excerpt: "A short backstory and the basics of the markdown language."
coverImage: "/assets/blog/introduction-to-markdown/cover.webp"

date: "2025-09-08"
author:
  name: Daniel Hiebeler
  picture: "/assets/blog/authors/daniel.webp"
ogImage:
  url: "/assets/blog/introduction-to-markdown/cover.webp"
---

Markdown is a markup language which was developed with the goal that it should be extremely easy to write and easy to read.
It was created by John Gruber in collaboration with Aaron Schwartz and first published in December 2004 on his website:

 [daringfireball.net/projects/markdown](https://daringfireball.net/projects/markdown/)

The syntax is so straightforward and intuitive that a Markdown file can be easily read even when not formatted.
That is also the philosophy of the Markdown developers:

> Markdown is intended to be as easy-to-read and easy-to-write as is feasible.



The language is used in many day-to-day applications. For example in blogs, documentation, note-taking, and similar. Reddit posts can be written in Markdown. Discord and Slack are using a simplified version of the Markdown syntax for bold, italics, code, etc.


Even this blog post is written in Markdown.

Markdown files have the extension .md or .markdown. They are normal textfiles so they can be edited with any text editor.


## Syntax

Here are the most important elements the language has to offer.

### Paragraphs

Paragraphs are just multiple lines of text. One or more empty lines are ending the paragraph.

```markdown
This is the first paragraph which is followed by an empty line to mark its end.
It can contain multiple lines.

And this is the second one
```

Produced HTML:

```html
<p>This is the first paragraph which is followed by an empty line to mark its end.
It can contain multiple lines.</p>
<p>And this is the second one</p>
```

And rendered it can look like that:

This is the first paragraph which is followed by an empty line to mark its end.
It can contain multiple lines.

And this is the second one

### Headers

There are 6 different headers, ranging from H1 (the largest) to H6 (the smallest). They are written with hashtags at the beginning of the line. The number of hashtags defines the size of the heading.

```markdown
# This is a H1
### This is a H3
###### This is a H6
```

Produced HTML:

```html
<h1>This is a H1</h1>
<h3>This is a H3</h3>
<h6>This is a H6</h6>
```

And rendered it can look like that:

# This is a H1
### This is a H3
###### This is a H6

### Lists

There are unordered lists and ordered lists.

#### Unordered Lists

To create a list item the line is just started with a plus, an asterisk (*) or a hyphen (-). It does not matter which of the three elements are used, they all produce the same output.

```markdown
+ This is the first element
+ This the second
+ And this the third
```

Produced HTML:

```markdown
<ul>
  <li>This is the first element</li>
  <li>This the second</li>
  <li>And this the third</li>
</ul>
```

And rendered it can look like that:

+ This is the first element
+ This the second
+ And this the third

#### Ordered Lists

```markdown
1. This is the first element
2. This the second
3. And this the third
```

Produced HTML:

```markdown
<ol>
  <li>This is the first element</li>
  <li>This the second</li>
  <li>And this the third</li>
</ol>
```

And rendered it can look like that:

1. This is the first element
2. This the second
3. And this the third

## Text styles

```markdown
Here is an *emphasized* and here a **bold** word.
```

As HTML:

```html
Here is an <em>emphasized</em> and here a <strong>bold</strong> word.
```

And rendered it can look like that:

Here is an *emphasized* and here a **bold** word.

## Links

Links consist of two parts. First the text which will be shown wrapped in square brackets. This text can be chosen freely and does not have to do anything with the URL itself.
The second part is the URL which is wrapped in parentheses.

```markdown
[Example link](https://example.com/)
```

In HTML:

```html
<a href="http://example.com/">Example link</a>
```

And rendered it can look like that:

[Example link](https://example.com/)


## Images

The syntax for images is very similar to the one for links, but with an exclamation mark in front.

```markdown
![alt text](/path/to/img.jpg)
```

Produced HTML:

```html
<img src="/path/to/img.jpg" alt="alt text" />
```

## Blockquotes

Blockqoutes are lines that start with the greater-than-sign.

```markdown
> Be yourself; everyone else is already taken.
>
> ― Oscar Wilde
````

Produced HTML:

```html
<blockquote>
  <p>Be yourself; everyone else is already taken.</p>
  <p>― Oscar Wilde</p>
</blockquote>
```

And rendered it can look like that:

> Be yourself; everyone else is already taken.
>
> ― Oscar Wilde

## Horizontal Rules

A horizontal divider/line is created with three or more hyphens or asterisks. This generates a HTML [hr tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr).

```markdown
---

-------

***

*************
```

Produced HTML:

```html
<hr />
```

And rendered it can look like that:

---

## Code blocks

Code blocks are opened with three backticks directly followed by the language name. This language is then passed to the HTML tag as class and can be used for different syntax highlighting depending on the language.
The code block is also closed ith three backticks.

````markdown
```js
function hello() {
  console.log("Hello, world!");
}
hello();
```
````

Produced HTML:

```html
<code class="language-js">
function hello() {
  console.log("Hello, world!");
}
hello();
</code>
```

And rendered it can look like that:

```js
function hello() {
  console.log("Hello, world!");
}
hello();
```