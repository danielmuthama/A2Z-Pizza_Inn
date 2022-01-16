let price ;
let crust_price;
let tooping_price ;
let total = 0

function GetPizza (name,size,crust,topping,total){
    this.name = name;
    this.size = size;
    this.crust= crust;
    this.topping = topping;
    this.total = total;
  };
  $(document).ready(function(){
    $("button.proceed").click(function(event){
      
      let pName = $(".name option:selected").val();
      let pSize = $("#size option:selected").val();
      let pCrust = $("#crust option:selected").val();
      let pTopping = [];
  
      $.each($("input[name='toppings']:checked"),function(){
        pTopping.push($(this).val());
      })

      switch(pSize){
        case "0":
          price= 0;
          break;
        case 'large':
          price = 1200;
          break;
        case "medium":
          price = 900;
          break;
        case "small":
          price = 600;
        default:
          console.log("error");
      }
  
      switch(pCrust){
        case "0":
          c_price = 0;
          break;
        case "Crispy":
          c_price = 400;
          break;
        case "Stuffed":
          c_price = 300;
          break;
        case "Gluten-free":
          c_price = 350;
          break;
        case "Flatbread":
          c_price = 350;
        case "Focaccia":
          c_price = 250;
          break;
        default:
          console.log("error");
      }
    