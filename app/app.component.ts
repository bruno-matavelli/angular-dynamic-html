import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Blog Title";
  body = `
    <p>random paragraph</p>
    <hello name="User"></hello>
<script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"></script>


          <a id="div1" >
            <img src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-672x371.jpg">
            <div >Div 1</div>
          </a>
          <div id="div2">Div 2</div>

          <script>
          if($){
            $(document).ready(()=>{
              console.log("hello")
              $("#div1").on("click", ()=>{
                $("#div1").hide()
                $("#div2").show()
              })
  
              $("#div2").on("click", ()=>{
                $("#div2").hide()
                $("#div1").show()
              })	
            })
          }
        
          </script>
          <style>
            #div1{
              backgroud:red;
            }
          </style>
    
  `;

  constructor(private sanitizer: DomSanitizer) {}
}
