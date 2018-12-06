Here is the recommended way to build out the `components` folder:

- Place common components here (ex: a List), used throughout the project. 

- If a component is specific to a feature (ex: the Footer, that will only be used in the overall App), place it in the corresponding container instead.

- Try away from redux, be passed props needed.

- Create the file structure with folders named after the component or purpose of components if multiple. 

For example, if we had a single list component needed throughout our application we could place it in a `List` folder:
- /components
  - /List
    - ListWrapper // maybe some helper files Lists use
    - index       // List component
    - ...

If we ended up needing multiple lists, we could group them together in a common `Lists` folder:
- /components
  - /Lists
    - ListWrapper // maybe some helper files Lists use
    - ListScroll  // List component #1
    - ListDynamic // List component #2
    - ...
