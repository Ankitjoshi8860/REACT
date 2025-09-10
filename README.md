📘 React without JSX – Notes
1. What is JSX?

JSX stands for JavaScript XML.

It allows you to write HTML-like code inside JavaScript.

Example with JSX:

const element = (
  <div>
    <h1>Hello Coder Army</h1>
    <p>Welcome to React</p>
  </div>
);


Behind the scenes, Babel converts JSX into React.createElement() calls.

2. How does React work without JSX?

React can work without JSX.
Instead of writing HTML-like syntax, you use the function:

React.createElement(type, props, children)


type → HTML tag (e.g., "div", "h1") or a React component.

props → attributes like id, className, style.

children → inner text or nested elements.

3. Example without JSX

You want to build this HTML:

<div>
  <div>
    <h1>
      <p></p>
    </h1>
  </div>
</div>


👉 React code without JSX:

const nested = React.createElement(
  "div", {}, 
  React.createElement(
    "div", {}, 
    React.createElement(
      "h1", {}, 
      React.createElement("p", {}, null)
    )
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nested);

4. Step-by-step breakdown

Create the outer <div>
→ React.createElement("div", {}, ...)

Add another <div> inside.

Inside it, add an <h1>.

Inside <h1>, add <p>.

Pass each nested element as a child in the third argument.

5. JSX vs Without JSX
Feature	JSX	Without JSX
Syntax	Looks like HTML	Pure JS function calls
Readability	Easy & clean	Becomes complex with nesting
Compilation	Requires Babel	No compiler needed
Usage	99% developers use it	Good for learning internals
6. Key Notes

React can only render one root element at a time.
→ Wrap multiple elements inside a <div> or <> (fragment).

Without JSX, nested code is hard to read.

JSX is just syntax sugar → it gets converted to React.createElement() internally.

✅ Summary:
JSX makes React code clean and easy, but knowing React.createElement() helps you understand how React works internally.
