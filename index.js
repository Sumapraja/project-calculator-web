$(".btn").click(function(event) {
  let thingClicked = this.innerHTML
  console.log("you clicked: ", thingClicked)
   $(".item-header").html(thingClicked)
 })