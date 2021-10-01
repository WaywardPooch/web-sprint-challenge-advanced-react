# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

   A stateful component is a class, while a functional component is a function.

   Stateful components have access to advanced lifecycle methods, such as componentDidMount and componentDidUpdate, and triggering events upon specific changes of state must be done inside control flow statements within an appropriate lifecycle method.

   Functional components have access to hooks, such as useState and useEffect, which can help us separate and reuse stateful logic between different components more easily than with class components.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

   The componentWillMount and componentWillUpdate functions gets called before the rendering phase of their respective point in the component's lifecycle. componentWillMount happens before mounting, and componentWillUpdate happens before updating.

3. Define stateful logic.

   Stateful logic is code that deals with information that can change inside of components over time. The information in this case is the state itself, otherwise known as all the information necessary for the component to work properly.

4. What are the three step of creating a successful test? What is done in each phase?

   1. ARRANGE: Set up your testing environment with the items to be tested placed inside

   2. ACT: Perform actions on your testing environment as if a user was using your program, looking for edge cases that could potentially break your program

   3. ASSERT: Check to see if the behavior resulting from the ACT phase matches with the behavior you expect
