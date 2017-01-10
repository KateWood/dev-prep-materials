#[Bootstrap](http://getbootstrap.com/getting-started/)

Bootstrap is a CSS framework made by twitter. It can be used to make great looking websites very quickly. 

##1. Setup
For the purposes of today we should use the bootstrap CDN: 

```html

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

```

By including the above in your HTML `<head>` you will make all the tools that bootstrap needs at you disposal for working with bootstrap.

####A bit more setup

JQuery is required!! 

Who can remember what CDN stands for? 

####Activity: Everybody research a good CDN to use with bootstrap! 

<!-- https://github.com/twbs/bootstrap/blob/v3.3.7/bower.json -->

> Side-note: sourcing dependencies in the correct order

Boostrap has 3 main offerings: CSS library, HTML components, and Javascript powered components. We will focus on the following:

##2. CSS

* Containers
* Typography
* Tables
 
<!--
<table>
		  <tr>
		    <th>Company</th>
		    <th>Contact</th>
		    <th>Country</th>
		  </tr>
		  <tr>
		    <td>Alfreds Futterkiste</td>
		    <td>Maria Anders</td>
		    <td>Germany</td>
		  </tr>
		  <tr>
		    <td>Centro comercial Moctezuma</td>
		    <td>Francisco Chang</td>
		    <td>Mexico</td>
		  </tr>
		  <tr>
		    <td>Ernst Handel</td>
		    <td>Roland Mendel</td>
		    <td>Austria</td>
		  </tr>
		  </tr>
</table> -->
* Forms

<!--
<form action="...">
  First name:<br>
  <input type="text" name="firstname">
  <br>
  Last name:<br>
  <input type="text" name="lastname">
  <br><br>
  <input type="submit" value="Submit">
</form> 
-->
* Buttons
* Images
* Grid System (& responsive)

##3. Components

* Glyphicons
* Navbar
* Jumbotron
* Wells

##4. Javascript

* Modal
* Carousel
* Togglable Tabs
* Tooltips
* Collapse

