import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5 mb-32'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1.What is an access token and refresh token?
                </div>
                <div className="collapse-content">
                    <p>In a React application, an access token and refresh token are commonly used to handle authentication and authorization with an API or server. <br />
                        A refresh token, on the other hand, is a token that is used to obtain a new access token when the current access token expires. It is typically stored securely, such as in an HTTP-only cookie or local storage, and is sent to the server to request a new access token without requiring the user to reauthenticate.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2.How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>1.HTTP-only cookie: Another secure option is to store the tokens in HTTP-only cookies. These cookies can only be accessed by the server and are not exposed to JavaScript code, making them more resistant to XSS attacks. However, handling cookies requires careful consideration of security best practices. <br />
                        2.Memory: The access token can be stored in memory, specifically within a state variable in the React component that manages authentication. Storing it in memory means that the token will be lost when the page is refreshed or the application is closed.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3.Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL Databases: <br />

                        Structure: SQL databases use a structured schema where data is organized into tables with predefined columns and relationships between them. This structure enforces data integrity and supports complex queries.
                        Query Language: SQL databases use Structured Query Language (SQL) for defining and manipulating data. SQL provides powerful querying capabilities, including joins, aggregations, and transactions.
                    </p>
                    <p className='my-2'>
                        NoSQL Databases: <br />

                        Flexibility: NoSQL databases offer flexible schemas, allowing for dynamic and unstructured data. They are schema-less or have a flexible schema model like key-value, document, columnar, or graph.
                        Scalability: NoSQL databases are designed for horizontal scalability. They can handle large amounts of data and high traffic by distributing data across multiple servers or clusters.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. What is express js? What is Nest JS ?
                </div>
                <div className="collapse-content">
                    <p>
                        <h3 className='font-bold'>Express.js:</h3>
                        Express.js is a minimal and unopinionated web framework for Node.js. It provides a simple and flexible way to build web applications and APIs.
                        Express.js focuses on providing a lightweight and minimalist core, allowing developers to choose and integrate additional libraries or middleware based on their specific needs.
                        It offers features such as routing, middleware support, and template engine integration, allowing developers to handle HTTP requests and responses efficiently.</p>
                    <p>

                        <h3 className='font-bold'>Nest.js:</h3>

                        Nest.js is a full-featured, opinionated web framework for building scalable and maintainable server-side applications with Node.js and TypeScript.
                        It is built on top of Express.js and enhances it with additional features, architectural patterns, and a dependency injection system.
                        Nest.js follows the modular and component-based architecture, which promotes code reusability, testability, and scalability.
                        It provides built-in support for features like routing, dependency injection, middleware, authentication, and more, which helps developers to rapidly build and structure their applications.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    5.What is MongoDB aggregate and how does it work
                </div>
                <div className="collapse-content">
                    <p> MongoDB, the aggregate function is a powerful tool used for data aggregation and analysis. It allows you to perform complex operations on collections of documents and retrieve computed results based on those operations. The aggregate function uses a pipeline approach, where you can chain multiple stages together to transform and process the data.

                        Here's an overview of how the aggregate function works:

                        Pipeline Stages: The aggregate function takes an array of pipeline stages as its argument. Each stage represents a specific operation that is applied to the documents in the collection. The stages are executed sequentially in the order they are specified.

                        Pipeline Operators: Each stage in the pipeline can use various operators to perform specific operations on the data. Some commonly used pipeline operators include $match, $group, $project, $sort, $limit, and $lookup. These operators allow you to filter documents, group and aggregate data, project specific fields, sort results, limit the number of documents returned, and perform join-like operations, among other things.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;