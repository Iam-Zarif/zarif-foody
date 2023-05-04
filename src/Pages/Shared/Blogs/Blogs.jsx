/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';


const Blogs = () => {
  const ref = useRef();
  return (
    <>

      <ReactToPrint
        trigger={() => (
          <button className="border hover:border-green-500 px-5 py-2 rounded-xl  mt-10 mb-10 flex gap-2 max-w-[1000px] mx-auto">
            <p className='text-xl font-bold'>Download-Pdf</p>
            
          </button>
        )}
        content={() => ref.current}
      />

      <div ref={ref} className="mt-10">
        <h1 className="text-center text-3xl font-bold text-green-500">
          Blogs Section
        </h1>
        <hr className="mt-5 w-96 mx-auto" />
        <h1 className="text-center text-3xl font-bold mt-10">
          Q : Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <p className="px-5">
          ans : In the context of software engineering, uncontrolled components
          and controlled components refer to two different types of user
          interface elements. Uncontrolled components are typically HTML form
          elements (such as text inputs, checkboxes, and radio buttons) that are
          managed by the browser, rather than the application. The values of
          these elements are not directly controlled by the application and are
          instead managed by the browser's DOM. On the other hand, controlled
          components are form elements that are managed by the application. The
          application is responsible for setting and updating the values of
          these elements, and any changes to the values of these elements are
          reflected in the application's state. The main difference between the
          two types of components is that uncontrolled components are simpler to
          implement but offer less control over user input, whereas controlled
          components provide greater control but require more effort to
          implement. In general, it is recommended to use controlled components
          whenever possible, as they provide a more consistent and predictable
          user experience. However, uncontrolled components may be useful in
          certain situations, such as when working with legacy code or when
          performance is a critical concern.
        </p>

        <h1 className="text-center text-3xl font-bold mt-10">
          Q : How to validate React props using PropTypes
        </h1>
        <p className="px-5">
          ans : PropTypes is a library that is built into React and is used to
          validate the props that are passed to React components. It helps to
          catch errors early in the development process and can also serve as
          documentation for the component's expected props. If the component is
          rendered with a prop that does not meet these requirements, React will
          log a warning to the console. There are many other validation rules
          that can be specified using PropTypes, such as specifying that a prop
          is an array, object, or function, or that it should match a specific
          shape or structure. It is recommended to use PropTypes to validate the
          props of your React components to ensure that they are used correctly
          and to catch errors early in the development process.
        </p>

        <h1 className="text-center text-3xl font-bold mt-10">
          Q : Tell us the difference between nodejs and express js.
        </h1>
        <p className="px-5">
          ans : Node.js and Express.js are both commonly used in web
          development, but they serve different purposes. Node.js is a runtime
          environment that allows you to run JavaScript code outside of a web
          browser. It is built on the V8 JavaScript engine from Google and
          provides a way to run JavaScript code on the server-side. Node.js has
          a vast ecosystem of libraries and modules that make it easy to build
          server-side applications, perform I/O operations, and interact with
          databases. Express.js, on the other hand, is a web application
          framework built on top of Node.js. It provides a set of features and
          tools that simplify the process of building web applications, such as
          handling HTTP requests and responses, routing, and middleware.
        </p>

        <h1 className="text-center text-3xl font-bold mt-10">
          Q : What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="px-5">
          ans : A custom hook is a function in React that allows you to reuse
          stateful logic across multiple components. Custom hooks allow you to
          extract common functionality from your components and share it across
          your application. A custom hook is simply a JavaScript function that
          uses one or more of the built-in React hooks, such as useState,
          useEffect, useContext, etc. You might create a custom hook when you
          have a piece of stateful logic that you want to reuse across multiple
          components in your application. For example, if you have a piece of
          stateful logic that fetches data from an API, you could create a
          custom hook that encapsulates that logic, making it easy to reuse in
          multiple components.
        </p>
      </div>
    </>
  );
};

export default Blogs;