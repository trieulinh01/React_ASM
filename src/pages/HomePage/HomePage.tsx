import '../../assets/homePage.css'
import Banner from '../../components/Banner/Banner';
import Posts from '../../components/ListPosts/Posts';
const HomePage = () => {
  return (
    <>
    <main className="container">
      {/* Start section banner */}
     <Banner />
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
       
      <Posts />


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
