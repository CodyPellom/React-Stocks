Building html within JavaScript:

###Why do we need anymore frient end tools?

Jqury is being left behind; React is what will be used to create the structure.:

*DRY Code*
its easy to make things repetitive in larger scale APIs, websites etc.

*Multiple Interactions*
*React Dev tools*

###SIngle page applications make our lives easier by having these really smooth expreiences. 

Websites and beginning to look more like appications as people want complex and smoothly running websites and socia networks;

Why use react?
There are other libraries to use, but why. REACT is the most popular, it is an API created by facebook. 

React took Jquerys spot as the most popylar library avaliable. React builds on simple ideas; taking adavantage of really modern code. React provides a very easy way to manipulate the Dom primarily, and the most modern versions of JS. React is primarily using vanilla Javascript. 

###Web Coponents:

 modern idea of building out components instead of pages; the idea of a component is to take parts of the app and ake them one small reusable piece of the app. Nav bars, headers and footers. Reusable. Usrs and user cards are something that may be reusable. 
 
 Building out components allows you to be a lot more effectve as the pages get larger ad larger and larger. 

 ###MORE:

 WHENever we start clicking through things on react components youll notce there is noneed for a refresh that often takes away from a users exp. components ike nav bar, logo, search bar etc. no needfor one Huge JS file, but seperte components. 
 There is alot of inactivity involved with react. Instead webreak these in samller, easier to use components that is muchmore effectie and greater in scope.

 Interactions with databass are used with API calls with React. React is going to add more complexity to an application that wewill have to learn and unerstand. Client Side frameswork: realtime, High Levels of Interation, etc is client side frameworking. We ahve to know when to use react.

 Using a single page pp lifecycle: MAke acall to server, and respond wth JS and HTml. A lot of thelogicand complexity is done usg CSJS.and a JSON file can is used to update.

 ###THINKING IN REACT 

 -----------------------------------

 START withn a model wire-frame. 

 Break into components L containesr
Ecah file and each component needs t0o be seperation of converns. We have to look znd see the archatecture of the app; Breaking down things into rightful components. '''''' 


We will uilding a satic verion of react today: Using the react library to put htmk tgether to make that static page.

### creating a react app
create-react-app *name of app*

create react app brings in a ton of tools. It makes a developer's life so much easier. 

the cd into the file,

then run npm start
(this command will open a page similar to the exress method. "Welcome to React")

*We now have a react build*

### what jjust happened:

There is a lot of stuf going on behind the scenes to make this happen. React used to be a nightmare: extra configs,tools etc, but with create-react app its an easy to use boiler-plate

 
 ###Webpack

 Is a module bundler. It is the driving force behind auto-updates, budling, automatic dependancies and other setups. Budling scripts and files, seperate css fonts images etc; they need to bebroken up. Web pack, a =t compile timecreates *ONE JS FILE!!*

 All of this is done by Webpack

 ###Import/Export:

 in the import command we can import common JS files. 

 Const logo = require('logo')/

 We can ipkrt muluple kinds of files:Images,CSS etc

 We are explicitl telling our porgam EXSCTLY what we wnt to use n our app. 

 ###dstructioning an object]]

 { Component } Taking a big object and using it as a shortcut. Create a varible and set that equal to react.component. It allows you to create avaibae to shares the same name as the key yu are trying to grabfrom as a object. 

 If we were to use this with a reg object. 

 Var coffess = {
     brand:jiffy,
     temp: hot
 
 }
 *INSTEAD*
 const BRand = coffee;

 it signifies to js the vauein this object issaved to a varible caled "brand"

 It softens and clans up java script and keeps it clean overtime and o a larger scale. 
 
 Slightly different syntax. 

 IN order to create a component,use the class keyword. Class is built into JS. Create a new class called app:
class App extends Component {






 All this means to is to inherit all the features, I want to create tis component but grab all the methods and put it inside the component here. 

 ###RENDER:
 "<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trump is a piece of shitums.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );"

 You canthave a working comonent without render. Its saying this is what I want to throwinside the component. 
 Then return this stuff here.


 <img src={ logo }>

 OR
 const person = {
     name: bob
     favcolor: 'green'
 }

 Hi my name is { this means to inject javascript data}

 its directly referring to some javascript

### React-DOM

Killer feat of react: WE can build more than just web-apps with this. React native is a way to take react code and build out android IOS applications.

Netflix uses react: they still use JS on the backend. We are bilding out something in the browser tobe rendered and used. 

###HEre's a trick:

hold down CMD and click on something to be sent to the corresponding file path. 

###React compnents:

when we pass components they go down. 

*example*
<Movie title={movie.title} rating={movie.rating} decription={movie.description}/>

with the react dev tools we can look at the attributes applied to the arrays of objects we create. 



