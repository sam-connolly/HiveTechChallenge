# HiveTechChallenge

The GraphQL API can be interacted with using Playground at the address:  
https://hive-tech-challenge.herokuapp.com/graphql  

There are 2 queries and 2 mutators:  
Queries:  
  users - Gets all users  
    - If the username is specified it returns the details of that user  
  fives - Gets all fives  
    - If the sender is specified it returns all fives sent by the given user  
    - If the reciever is specified it returns all fives recieved by the given user  

Mutators:  
  createUser - Creates a new user  
    - firstName string The first name of the user  
    - surname string The surname of the user  
    - username The username of the user  
  createFive - Creates a new five  
    - sender string The sender of the five  
    - reciever string The reciever of the five  
    - content string The content of the five  
