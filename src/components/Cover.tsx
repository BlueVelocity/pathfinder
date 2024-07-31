import coverPhoto from '../assets/cover.jpg';
import coverPhotoSmall from '../assets/cover-small.jpg';

export default function OpeningPhoto() {
  return (
    <div className="grid justify-center justify-items-center place-items-center md:grid-cols-5 sm:grid-cols-1">
      <img
        className="rounded-lg outline outline-main outline-1 h-64 sm:h-80 md:col-span-2 md:justify-self-end md:h-96"
        src={coverPhoto}
        srcSet={`${coverPhotoSmall} 768w, ${coverPhoto} 1024w`}
        alt="Author of website"
      />
      <p className="py-6 px-2 my-4 bg-background/70 rounded-lg text-lg text-accent text-wrap text-center md:col-span-3 md:mx-12 md:px-4">
        <span className="font-bold text-3xl">I'm Joseph Monighan</span>
        <br /> and welcome to my site! <br />
        <br />
        Camping, portaging, programming; I love it all, so I've decided to
        combine my passions and progress in this site, like a <i>
          Trail
        </i> of <i>Bytes</i> I've left in my boot prints
        <br />
        <br />I hope you enjoy, happy exploring!
      </p>
    </div>
  );
}
