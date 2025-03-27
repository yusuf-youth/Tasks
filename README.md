<img src="https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png" width="500" />
<br />

The To-do App offers a straightforward interface for managing tasks, allowing users to add, delete, and mark tasks as complete and others. This simplicity ensures that users can focus on their tasks without unnecessary distractions. The app was built with 🎨SCSS and ⚛️React. <a href="https://yusuf-youth.github.io/Todo-App/">App</a>, <a href="[https://www.figma.com/design/wsOmjs3YZUNZnPHo0N36nb/Todo-List-for-Figma-projects-(Community)?node-id=1-230&t=7EC7oTHzV6akIwhA-0](https://www.figma.com/design/wsOmjs3YZUNZnPHo0N36nb/Todo-List-for-Figma-projects-(Community)?node-id=1-230&t=7EC7oTHzV6akIwhA-0)">Template</a>. <br />

<h2>Project Features</h2>
The project has several features that are worth paying attention to. 
<h3>React</h3>
<ul>
  <li>
    <b>Components. </b> The app contains reusable components that can be used throughout the project.
  </li>
  <li>
    <b>React Hooks. </b> The app makes use of React hooks like <code>useState</code>, <code>useEffect</code>, <code>useRef</code> and <code>useContext</code> to manage component state, handle side effects, manage global state efficiently, and reference DOM elements directly without causing re-renders improving code simplicity and performance.
  </li>
  <li>
    <b>Context. </b> The app uses context called <i>AppContext</i> that keeps todos and settings in a single, accessible state, eliminating Prop Drilling, improving code readability and for better performance.
  </li>
  <li>
    <b>Dynamic CSS Class Management. </b> The app conditionally adds or removes CSS classes based on component state, enabling features like marking tasks as complete, ensuring smooth UI transitions without directly accessing or manipulating DOM elements.
  </li>
</ul>

<h3>Markup & Styles</h3>
<ul>
  <li>
    <b>BEM. </b>The project follows the BEM methodology for structuring SCSS, where each component is broken down into <i>blocks</i>, <i>elements</i>, and <i>modifiers</i>. This approach ensures that the code is modular, scalable, and easy to maintain.
  </li>
  <li>
    <b>Global Styles. </b>The project has <i>_global.scss</i> for global styles, <i>_normalize.scss</i> for resetting default styles, <i>_mixins.scss</i> and <i>_media.scss</i> for comfortable styling and others.
  </li>
  <li>
    <b>CSS Property Grouping. </b> CSS properties are organized in a consistent and logical order to improve readability, maintainability, and ease of debugging.
  </li>
  <li>
    <b>CSS Variables. </b>The project uses css variables throughout styles ensuring maintainability, reusability, and consistency of the code.
  </li>
  <li>
    <b>SCSS. </b>The project is written in the SCSS preprocessor and contains useful features such as mixins for comfortable styling.
  </li>
</ul>

<h2>App Features</h2>
The app has several features:
<ul>
  <li>
    <b>Add Tasks. </b> Users can input new tasks to their list, facilitating effective task management.
  </li>
  <li>
    <b>Modify Tasks. </b> Users can update tasks to add more details or correct mistakes.
  </li>
  <li>
    <b>Mark Tasks. </b> Users can mark tasks as completed, helping to track progress.
  </li>
  <li>
    <b>Toggle Modes. </b> Users can toggle dark/light modes, which enhances the user experience.
  </li>
  <li>
    <b>Notes. </b> The app allows users to add additional details related to task list.
  </li>
  <li>
    <b>Persistent Storage. </b> The app implemented local storage that allows tasks, notes and theme mode option to be saved, ensuring users don't lose their settings upon closing the app.
  </li>
</ul>

<h3>Interesting Features</h3>
The app has 4 interesting features that are worth paying attention to:
<ul>
  <li>
    <b>Adding Tasks on Enter. </b> Users can add new tasks just pressing <code>Enter</code>, facilitating and improving UX.
  </li>
  <li>
    <b>No Empty Tasks. </b> Users will not have empty tasks or tasks with empty task fields, they will disappear.
  </li>
  <li>
    <b>Automatic resizing of Fields. </b> The app uses <code>&lt;textarea&gt;</code> as task fields and their size changes as the user types texts.
  </li>
  <li>
    <b>Smooth Animations. </b> On marking tasks and changing theme modes the app smoothly changes its appearance, from background, text color to border and icon.
  </li>
</ul>

<br />
To wrap it up, the To-do App provides a clean and intuitive interface for task management, offering features like adding and marking tasks as complete with a focus on simplicity and usability. Built with 🎨SCSS and ⚛️React, it leverages reusable components, context for state management, and well-organized styles using BEM, CSS variables, and property grouping to ensure maintainability and readability of the project.
