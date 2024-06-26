const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e.pageX, e.pageY);
});
window.addEventListener("scroll", () => {
  const fromTop = parseInt(cursor.getAttribute("data-fromTop"));
  cursor.style.top = scrollY + fromTop + "px";
  console.log(fromTop);
});

window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    // Triffering a DOM Reflow
    void cursor.offsetWidth;
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});
