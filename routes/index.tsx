import { SpaceShip } from "../islands/SpaceShip.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">This is a space ship</h1>
        <SpaceShip />
      </div>
    </div>
  );
}
