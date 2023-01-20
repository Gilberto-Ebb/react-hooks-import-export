import React from "react";
import howManyParks from "./parks/howManyParks";
import HowManyParks from "./parks/HowManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife, elevation} from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  HowManyParks(); // => "42 parks!"

  return (
    <> 
     <h1>Colorado State Parks!</h1>
     <MesaVerde />
     {trees}

    </>

  )

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks