import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-6">
            <div className='grid gap-4 sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-2 my-6'>
                {/* question ans */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">1. What are the different ways to manage a state in a React application?</h2>
                        <p>There are four main types of state you need to properly manage in your React apps <br></br>
                            Local  state - Local state is data we manage in one or another component.<br></br>
                            Server state - Data that comes from an external server that must be integrated with our UI state.<br></br>
                            Global UI state - Global state is data we manage across multiple components.<br></br>
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch
                            a post based off of its slug or id that is located in the URL!
                        </p>
                    </div>
                </div>
                {/* question ans */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">2. How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods
                            and properties in objects. It is a method by which an object can inherit the properties
                            and methods of another object. Traditionally, in order to get and set the of an object,
                            we use Object. getPrototypeOf and Object</p>
                    </div>
                </div>
                {/* question ans */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">3. What is a unit test? Why should we write unit tests?</h2>
                        <p>The main objective of unit testing is to isolate written code to test and determine if
                            it works as intended. Unit testing is an important step in the development process, because
                            if done correctly, it can help detect early
                            flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
                {/* question ans */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">4. React vs. Angular vs. Vue?</h2>
                        <p>Vue provides higher customizability and hence is easier to learn than Angular
                            or React. Further, Vue has an overlap with Angular and React with respect to their functionality
                            like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;