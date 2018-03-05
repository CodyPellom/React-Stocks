State withing our HTML up until now has been stored within ur html.
With react, with state there is a very clear direction for state to be manipultated/

This.props: the values com from a parent compnent and into the child component. However, state is owned by the compnent that your calling the state from. 

Say we have movie list, and then movies. If we are using props, all of it will live wihin movie list. HE, state lives inside a component. So each individual movie will have its own individual state. 

*********************************  ...
  constructor(){
    super()
    this.state = {
      movie: "Blade Runner",
      year: 1982
    }
  }
  ...
  
  --OR--
  
  ...
  state = {
    movie: "Blade Runner",
    year: 1982
  }
  ********************************* ...
Props in react are immutable: you can't change it. Whenver we get props from a parent it is read only
  The main purpose of state is it is changabe. State by design is much more interactive and easier to change. React tries to get programers to program in fuctional . 

  if we have this movie componenet balade runnerand 1982

  we can now make functonal events ti change to values of those sates. 

  We r going to be building out apps where all of our state will live within a component list ( a "movie" ist)

  whenever we want the value of tat state to go into a child component, they mustbe passed down with props. Its unidirectional, so parents have to be at the very top and the props call upon states lower down i the applicaion.

  We want to be able to manage our state in multiple different places.

  ###APP

  We will be building a hardwre store which will be inteactive. We can add products to our shop, and add them to our cart. within the art you can reove things s well. State makes all this happen. We are moviig data around in order to create this iteractve experience. 

  WHEN wwe start designing the lifescycle we think about what is going to have to change throughout thelifecycle.?

  if some has an interaction, we have to have a state that will manage this interction between two items. When we are designing, we have to think what are the dif piecees of state that we need.

  
  ***
  https://reactjs.org/docs/thinking-in-react.html



Is there any part of your aplication that cotins ththe .
anuthing ou=tL']]foe  

CartVie,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                