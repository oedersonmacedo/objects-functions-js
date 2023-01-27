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
   - The inheritance in JavaScript is performed for objects and not class, as others languages.
   - `__proto__`: The property is a reference for the object prototype.
   - Why the property not print if has in other tier?
     - In order not to have enviroment with polluted information, the system undestands that it should not display prop in the pattern of what it inrerits.
   - Object.setPrototypeOf: To allow the interaction with the object prototype for set the object that will inherit the property informed in second parameter
   - Object.create: Creates a obejct the passing the its prototype as a parameter. Be careful with the Object.create and to pass it as a value null, it will lose some aperations, example hasOwnProperty;
   - If the property exists in both the object and the prototype, the object's own property is returned, making the shadow to the property prototype.
 - #### Object API
   - Object.assign: Copies the properties of the objects passed by parameter for the taget object, which is returned;
   - Object.keys: Returns the keys of the properties of object;
   - Object.values: Returns the values of the properties ob object;
   - Object.entries: Returns properties in pairs, represented with keys and values;
   - Object.is: Compares two objectsconsidering the data types similarly to the equivalent operator (===);
   - defineProperty: Defines a property, being possible to configure the its edition, or else its visualition. Having the following properties:
     - configurable: Allows which a given property to be cleared;
     - enumerable: Allows which a given property to be enumerated;
     - value: Sets the values of a given property;
     - writable: Allows which a given property have its value modified;
  - preventExtensions, seal and freeze:
     - Object.preventExtensions: Prevent which the object has news properties, but allows to modify or removing existing properties;
     - Object.seal: Prevent which the object has news properties or delete existing properties, but allows to modify existing properties;
     - Object.freeze: Prevent which the object has news properties, delete or modify existing properties;
 
 
     | Method | Create | Read | Update | Delete |
     | ------ | ------ | ------ | ------ | ------ |
     | preventExtensions | No | Yes | Yes | Yes |
     | seal | No | Yes | Yes | No |
     | freeze | No | Yes | No | No |

 - #### JSON
   - Javascript Object Notation;
   - Is a data interchange format, derived the JavaScript language;
   - Discovered by Douglas Crockford;
   - standardized by ECMA-404;
   - What is JSON used for?
     - Used as an alternative to XML, for the data tranference structured between systems
   - Data types: Number, String, Boolean Object, Array and null;
   - JSON.stringfy: Converts a determined data type for JSON;
   - JSON.parse: Converts a JSON for a determined data type;
   - JSON and Object are two completely different concepts;

 - #### Function
   - A function is an object which contains an executable block code;
   - What is the difference between function declaration and expression?
     - The main difference is between the preload order. The function declaration hoist the function for its pre-loading,being able to call it even before its declaration. The function expression is not accept, as its use can only be below its declaration. this is called 'hoisting'.
   - The functions are firs class, that is, they can be assingned the a variable, passed by parameters or returned from another function;
   - It's possible to invoke a function with fewer or more paratemeter, not necessary following what's declared
   - Can set default values for each of a function's parameters
   - Through the implicit variable arguments it is possible to access the parameters of the invoked function
   - It is also possible to access the parameters of the invoked function through the rest parameter.
   - The rest parameter must always be the last parameter in the list of parameters

 - __this:__ There is an implicit variable called of 'this' that make reference to the object responsible for its invocation;
 - __getter and setter__
   - They serve for to intercept the access to the properties of a given object;
   - Use different keys for the function and the object property;
   - Through the object APIdefineProperty operation, it's also possible to define getter and setter functions;
 - 
