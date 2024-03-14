import '~/assets/homePage.scss'
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
      <div className="posts__heading">
    <div className="posts__heading-content">
      <h4 className="posts__heading-title">long established</h4>
      <p className="posts__description">
        
      </p>
      <div className="posts__heading-bottom">
        <p>May 20th 2020</p>
        <a className="posts__read-more" href="">Read more</a>
      </div>
    </div>
    <img src="/man.png" alt="" />
  </div>
       
      <Posts />


      <div className="posts__bottom">
    <div className="posts__bottom-content">
      <h4 className="posts__bottom-title">What is Lorem Ipsum?</h4>
      <p className="posts__description posts__bottom__description">
        It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The
        point of using Lorem Ipsum is that....
      </p>
      <div className="posts__heading-bottom">
        <p>May 20th 2020</p>
        <a className="posts__read-more" href="">Read more</a>
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
