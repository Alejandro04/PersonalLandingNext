import Image from 'next/image'

export default function MainBlog() {
  return (
    <>
      <section className="blog" id="main">
        <div className="blog__container">
          <div className="card-blog">
            <a href="/en/blog/implement-a-good-ui">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div className="labels-container">
                <label className="labelPosts">Implement a good ui</label>
                <p className="labelPostsResume">
                  We must take into account four basic things,
                  the architecture of the website, the tools to be used, the quality of the assets and the
                  the technology to implement.
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/en/blog/state-management-in-angular-ngxs">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div className="labels-container">
                <label className="labelPosts">State Management in Angular: Ngxs</label>
                <p className="labelPostsResume">
                  A state handler similar to redux flow for Angular
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/en/blog/introduction-angular-angularmaterial-and-firebase">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div class="labels-container">
                <label class="labelPosts">Introduction: Angular, AngularMaterial and Firebase</label>
                <p class="labelPostsResume">
                  A good stack of tools to develop platforms
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/en/blog/inputs-and-outputs-in-angular">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div class="labels-container">
                <label class="labelPosts">Inputs and Outputs in Angular</label>
                <p class="labelPostsResume">
                  Passing data from parent to child and child to parent components
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
