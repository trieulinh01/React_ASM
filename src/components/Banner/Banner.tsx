const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="banner__content">
          <h2 className="banner__title">
            Make better <br />
            coffee <img src="/coffee.png" alt="" />
          </h2>
          <p className="banner__subheading">why learn how to blog?</p>
        </div>
        <img className="banner__img" src="/banner.png" alt="" />
      </section>
    </>
  );
};

export default Banner;
