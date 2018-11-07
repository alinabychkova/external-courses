<!doctype html>
<html>
  <head>
 <style type="text/css">
   .DL { 
    background: #02a325;
}
</style> 
  </head>

  <body>
    <h1>HTML Basics</h1>
    <h2>List</h2>
    <h3>Ordered list</h3>

    <ol>
     <li>first item</li>
     <li>second item</li>
     <li>third item</li>
     <li>fourth item</li>
     <li>fifth item</li>
     </ol>

     <h3>Unordered list</h3>
      
     <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
     </ul>

<div class = "DL">
     <h3>Description List</h3>
     <pre>
Name
     Godzilla
Born
     1952
Buthplace
     Japan
Color
     Green
     </pre>

     <h3>Nested List</h3>
     <ul>
      <li>List item one</li>
      <li>List item two with subitems:</li>
        <ul>
          <li>Subitem 1</li>
            <ul>
              <li>SubSubitem 1</li>
              <li>SubSubitem 2</li>
             </ul>
           <li>Subitem 2</li>
          </ul>
        <li>Final list item</li>
       </ul>
</div>

     <h3>List with links</h3>
     <ul>
      <li><a href = #>Home</a></li>
      <li><a href = #>News</a></li>
      <li><a href = #>Contact</a></li>
      <li><a href = #>About</a></li>
     </ul>
     <hr />

      <h2>Paragraphs</h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse dictum leo ac volutpat molestie. 
Etiam suscipit leo sit amet consequat cursus. 

<pre>Nulla rhoncus dapibus risus, vel varius leo accumsan sit amet. 
Praesent facilisis convallis luctus. Ut viverra mauris interdum, sagittis tellus vel, venenatis nibh. 
Nullam accumsan mauris non condimentum auctor. 
Nulla turpis eros, tempor fermentum dignissim eget, blandit vel sapien.
Phasellus at tincidunt eros. Ut sed ornare velit.</pre>

      <hr />

       <h2>Tables</h2>
       <table>
        
         <th>First name</th>
         <th>Last name</th>
        </tr>
        <tr>
         <td>John</td>
         <td>Doe</td>
        </tr>
        <tr>
         <td>Jane</td>
         <td>Doe</td>
        </tr>
        </table>
       <hr />

        <h2>Image</h2>
         <img src = "https://vostokmedia.com/attachments/22c575c3dfbb1011e25bc5440cb87bed444d4bd5/store/fill/780/440/ae190a04757c3c5ce15fb04a9da9e223bd3cf164ec1e764243f4544d7376/%D0%BA%D0%BE%D1%82%D1%86%D0%B5.jpg"  width="180" height="100">
        <hr />
        
        <h2>Pre tag</h2>
        <pre>
if (time = 20) {
    greeting = "Good day";
} else {
    greeting = "God evening";
} 