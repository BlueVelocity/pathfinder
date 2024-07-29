import home from '../../public/camping-tent.png';

function Header() {
  return (
    <div className="flex bg-primary w-full max-h-16 rounded my-4 px-3 text-lg text-accent">
      <img className="max-h-12" src={home} alt="" />
      <button className="ml-3 active:text-black text-xl">Pathfinder</button>
      <button className="mr-2 ml-auto active:text-black">About</button>
    </div>
  );
}

export default Header;
