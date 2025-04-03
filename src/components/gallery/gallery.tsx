import Card from "./card";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="relative min-h-screen p-7 lg:p-[max(10vw,100px)] lg:pb-[15vw] lg:pt-5"
    >
      <h1 className="text-center text-[7vw] tracking-widest text-[#222B65] lg:text-left lg:text-[3vw] lg:tracking-wider">
        Gallerie
      </h1>
      <hr className="my-5 w-1/2 border-black/10" />
      <div className="mt-10 grid gap-3 lg:grid-cols-3">
        <Card
          alt="Image 1"
          src="/images/gallery_1.jpg"
          title="Laperouse"
          footer="Janvier 2025"
        />
        <Card
          alt="Image 2"
          src="/images/gallery_2.png"
          title="Penthouse Bulgvri"
          footer="Février 2025"
        />
        <Card
          alt="Image 3"
          src="/images/gallery_3.png"
          title="The Berkeley"
          footer="Février 2025"
        />
      </div>
    </div>
  );
};

export default Gallery;
