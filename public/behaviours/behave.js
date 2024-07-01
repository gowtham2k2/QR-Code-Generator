$(".alert-mssg")
  .addClass("alert-text")
  .fadeOut(200)
  .fadeIn(200)
  .fadeOut(200)
  .fadeIn(200)
  .fadeOut(200)
  .fadeIn(200);

  setTimeout(()=>{
    $(".alert-mssg").fadeOut(200);
  }, 4000)