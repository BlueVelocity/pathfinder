import githubLogo from '../../public/github-mark-white.svg';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="fixed text-sm bottom-1 left-1/2 -translate-x-1/2">
      <a
        className="flex flex-1 space-x-1 items-center text-center text-gray-200"
        href="https://github.com/BlueVelocity"
      >
        <img className="flex-1 max-h-4 max-w-4" src={githubLogo} alt="" />
        <span>Joseph Monighan, {currentYear}</span>
      </a>
    </div>
  );
}

export default Footer;
