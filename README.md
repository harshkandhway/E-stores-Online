
# E-Stores Online

***https://evening-reef-04316.herokuapp.com/***

**Tools Used - HTML, CSS, JAVASCRIPT, VUE 2, VUEX, Node Js, Express Js, MongoDB**

An E-Store application where any store can be registered for selling their products.
Total 3 roles are implemented: Admin, User and Customer. Crud operations can be done to both stores and products. Different dashboards are also created for managing 3 roles. 

**Frontend:** This app has been created with VUE JS and UI is designed with HTML 5 and CSS 3, Vuetify and Bootstrap Vue. State management is done with the help of VUEX. API calls are done using AXIOS. Vue Router is being used for navigation through pages. The other libraries that used are Vue toast notifications, Vue loading overlay, etc.

**Backend:** APIs are written with Express and NodeJS. Database used is MongoDB. Authentications are cookie-based and tokes are generated with JWT. After login/register, the cookies are attached to Request Headers. The tokens are signed with a library cookie-parser. Passwords are also hashed with the help of Bcrypt Js. The other libraries used are cors, dotenv, express-fileupload, mongoose, validator.
