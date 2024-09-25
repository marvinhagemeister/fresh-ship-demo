import { useEffect } from "preact/hooks";

export function SpaceShip() {
  useEffect(() => {
    const ship = document.getElementById("ship");
    if (ship) {
      const pageWidth = ship.parentElement?.offsetWidth || 100;
      let direction: "left" | "right" = "right";
      let offset = 0;
      setInterval(function () {
        if (offset > pageWidth) {
          direction = "left";
        } else if (offset < 0) {
          direction = "right";
        }

        switch (direction) {
          case "left":
            ship.style.marginLeft = offset-- + "px";
            ship.className = "scale-x-[-1]";
            break;

          case "right":
            ship.style.marginLeft = offset++ + "px";
            ship.className = "";
            break;
        }
      }, 45);
    }
  }, []);

  return (
    <img
      id="ship"
      src="/ship.png"
    />
  );
}
