function HeroImage() {
  return (
    <img
      className="object-cover h-1/3 md:w-1/2 md:h-full max-sm:rounded-b-xl rounded-xl"
      src={process.env.PUBLIC_URL + "/images/illustration-sign-up-desktop.svg"}
      alt="hero banner"
    />
  );
}

export default HeroImage;
