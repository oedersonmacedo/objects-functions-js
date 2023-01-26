# Objects and Functions in JavaScript

- #### Objects
 - It's a collection dynamic of property
 - It's defined with key and value
   - Key: Is possible in the definition to be with String or Symbol
   - Value: Is possible whatever data type
 - Possilities of creation Objects
   - Literal notation: {}
   - Constructor function: new Object()
   - Method create the Object API: Object.create(null)
 - It's possible to use the same name used for Key and Value. The name for this operation is shorthand.
   - Example:  const name=’test’; const obj = { name };
 - Depending on the declaration of key is necessary to declare it's a String.
   - Example: const obj = {"name-of-prop": 123};
 - It's possible to use keys in time of execution
 - It's possible to assign properties to objects through their reference
 - It's possible to access it's values directly
 - #### Undefined and null
   - A queried variable returns the type undefined when the key is not found.
   - What the difference in the types undefined and null?
     - The undefined type is used when variable is not found.
     - The null when can intentionallity to say thet there is an absence of any value for that variable.
   - Never assign null or undefined, if the intention is delete a property, to use the operator delete
 - #### Comparison of objects
   - When is compared an object, it's done through its reference. Even if the two objects is equals keys and values, they will be considered differents.
   - One way is to go through analyzing each key and value if the two objects are equivalent.
   - For the guarantee that the objects compared objects are equivalent, it's necessary to verify their prototypes.
 - #### inheritance
   - The main purpose the inheritance is the code reuse, decreasing the duplication code.
