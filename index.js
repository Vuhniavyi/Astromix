$(document).ready(function () {
  $(".sidebar .toggle").click(function () {
    $(".littleMenu").removeClass("closeReverse");
    $(".littleMenu").toggleClass("close");

    $(".wrapper").css({
      display: "none",
    });
  });

  $(".cross").click(function () {
    $(".littleMenu").toggleClass("closeReverse");
    $(".littleMenu").toggleClass("close");
    $(".wrapper").css({
      display: "block",
    });
  });

  $(".sort2").click(function () {
    $(".middleContent").css({
      display: "none",
    });
    $(".middleContent3").css({
      display: "none",
    });
    $(".middleContent2").css({
      display: "flex",
    });
  });

  $(".sort1").click(function () {
    $(".middleContent").css({
      display: "none",
    });
    $(".middleContent2").css({
      display: "none",
    });
    $(".middleContent3").css({
      display: "flex",
    });
  });

  $(".sort3").click(function () {
    $(".middleContent").css({
      display: "none",
    });
    $(".middleContent2").css({
      display: "none",
    });
    $(".middleContent3").css({
      display: "flex",
    });
  });

  $(".sort4").click(function () {
    $(".middleContent3").css({
      display: "none",
    });
    $(".middleContent2").css({
      display: "none",
    });
    $(".middleContent").css({
      display: "flex",
    });
  });
});
