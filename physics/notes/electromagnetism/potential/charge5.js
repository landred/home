Charge.clickStart("charge5")

function charges5(el) {
  const q = []; //holds the charges
  Charge.setup(el, q);

  let pause = false;
  el.addEventListener("mouseleave", function () {
    pause = true;
  });
  el.addEventListener("mouseenter", function () {
    Charge.setCanvas(el);
    if (pause) requestAnimationFrame(cycle);
    pause = false;
  });

  //spawn p before e to avoid a bug in the class method allPhysics
  Charge.spawnCharges(q, 8, "p");
  Charge.spawnCharges(q, 8, "e");

  function cycle() {
    if (!pause) {
      Charge.physicsAll(q);
      Charge.bounds(q);
      Charge.scalarField(q, true);
      requestAnimationFrame(cycle);
    }
  }
  requestAnimationFrame(cycle);
}