import '../../assets/homePage.css'
const HomePage = () => {
  return (
    <>
    <main className="container">
      {/* Start section banner */}
      <section className="banner">
        <div className="banner_content">
          <h2 className="banner_title">
            Make better <br />
            coffee <img src="/coffee.png" alt="" />
          </h2>
          <p className="banner_subheading">why learn how to blog?</p>
        </div>
        <img className="banner_img" src="/banner.png" alt="" />
      </section>
      {/* End section banner */}
      {/* Start section Posts */}
      <section className="posts">
        <div className="posts_heading">
          <div className="posts_heading_content">
            <h4 className="posts_heading_title">long established</h4>
            <p className="posts_description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that....
            </p>
            <div className="posts_heading_bottom">
              <p>May 20th 2020</p>
              <a className="read_more" href="">
                Read more
              </a>
            </div>
          </div>
          <img src="/man.png" alt="" />
        </div>
        <div className="posts_main">
          <article>
            <img src="/post1.png" alt="" />
            <h4 className="posts_heading_title">long established</h4>
            <p className="posts_description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that....
            </p>
            <div className="posts_heading_bottom">
              <p>May 20th 2020</p>
              <a className="read_more" href="">
                Read more
              </a>
            </div>
          </article>
          <article>
            <img src="/post1.png" alt="" />
            <h4 className="posts_heading_title">long established</h4>
            <p className="posts_description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that....
            </p>
            <div className="posts_heading_bottom">
              <p>May 20th 2020</p>
              <a className="read_more" href="">
                Read more
              </a>
            </div>
          </article>
          <article>
            <div className="article_img">
              <img src="/post1.png" alt="" />
            </div>
            <h4 className="posts_heading_title">long established</h4>
            <p className="posts_description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that....
            </p>
            <div className="posts_heading_bottom">
              <p>May 20th 2020</p>
              <a className="read_more" href="">
                Read more
              </a>
            </div>
          </article>
        </div>
        <div className="posts_bottom">
          <div className="posts_bottom_content">
            <h4 className="posts_bottom_title">What is Lorem Ipsum?</h4>
            <p className="posts_description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that....
            </p>
            <div className="posts_heading_bottom">
              <p>May 20th 2020</p>
              <a className="read_more" href="">
                Read more
              </a>
            </div>
          </div>
          <img src="/banner2.png" alt="" />
        </div>
        <div className="btn">
          <button className="button">
            See more <img src="/arrow-down.png" alt="" />
          </button>
        </div>
      </section>
    </main>
    <hr />
  </>
  
  )
}

export default HomePage
