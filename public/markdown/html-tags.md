#### Some common elements in the DOM aka HTML tags

##### Document structure

- `<html>`: The root element of an HTML page.
- `<head>`: Contains meta-information about the document.
- `<body>`: Contains the contents of an HTML document.

##### Text content

- `<h1>`, `<h2>` ... `<h6>`: Heading elements for section titles.
- `<p>`: Paragraph element.
- `<blockquote>`: Block quote element.
- `<pre>`: Preformatted text.
- `<div>`: Division or a section in an HTML document.

##### Inline text semantics

- `<span>`: Inline container used to mark up a part of a text, or a part of a document.
- `<a>`: Anchor element for hyperlinks.
- `<strong>`: Defines important text.
- `<em>`: Emphasizes text.
- `<b>`: Bold text.
- `<i>`: Italic text.
- `<u>`: Underlined text.
- `<sub>`: Subscript text.
- `<sup>`: Superscript text.
- `<br>`: Line break.

##### Lists

- `<ol>`: Ordered list.
- `<ul>`: Unordered list.
- `<li>`: List item.
- `<dl>`: Description list.
- `<dt>`: Term/name in a description list.
- `<dd>`: Description of a term/name in a description list.

##### Tables

- `<table>`: Defines a table.
- `<caption>`: Table caption.
- `<th>`: Table header cell.
- `<tr>`: Table row.
- `<td>`: Table cell.

##### Forms

- `<form>`: HTML form for user input.
- `<input>`: Input field.
- `<textarea>`: Multi-line text input.
- `<button>`: Clickable button.
- `<select>`: Dropdown list.
- `<option>`: Options within a `<select>` dropdown.
- `<label>`: Label for an `<input>` element.

##### Sections

- `<section>`: Section in a document.
- `<article>`: Independent, self-contained content.
- `<nav>`: Navigation links.
- `<aside>`: Sidebar content, tangentially related to the content around it.
- `<header>`: Introductory content or navigational links.
- `<footer>`: Footer for a document or section.
- `<main>`: Dominant content of the `<body>` of a document.

##### Media

- `<img>`: Image.
- `<audio>`: Sound content.
- `<video>`: Video content.
- `<figure>`: Self-contained content, frequently with a caption (`<figcaption>`).
- `<figcaption>`: Caption for a figure.

##### Miscellaneous

- `<iframe>`: Inline frame.
- `<canvas>`: Drawing surface for JavaScript graphics.
- `<script>`: Script statements (often JavaScript).
- `<noscript`>: Defines an alternative content for users that do not support client-side scripts.

### How do you interact with the DOM?

Some key methods for DOM interaction:

- **getElementById**: Retrieves an element by its unique ID attribute.
- **getElementsByTagName**: Retrieves a collection of elements with a specific tag name.
- **getElementsByClassName**: Retrieves a collection of elements with a specific class name.
- **querySelector**: Selects the first element that matches a specified CSS selector (more versatile than the previous methods).
- **createElement**: Creates a new HTML element node.
- **appendChild**: Appends a child node to another element node.
- **removeChild**: Removes a child node from an element.
- **setAttribute**: Sets an attribute value for an element.
- **getAttribute**: Gets the value of an attribute for an element.
- **innerText/textContent**: Sets or gets the text content of an element.
- **addEventListener**: Attaches an event listener to an element to respond to user interactions or other events.

### What does HTML stand for? What is it? Why is it important?

HTML stands for HyperText Markup Language. It's the foundation for creating web pages and is the essential language that browsers understand to render the content and structure we see on the web.
