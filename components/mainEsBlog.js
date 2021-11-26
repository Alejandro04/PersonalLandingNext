import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const categories = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }
]

export default function MainBlog() {

  const onChangeCategories = (event, values) => {
    console.log("values", values)
  }

  return (
    <>
      <section className="blog" id="main">
        <div className="autocomplete">
          <Autocomplete
            disablePortal
            id="combo-box-demo-2"
            options={categories ? categories : []}
            autoHighlight
            sx={{ width: 400 }}
            onChange={onChangeCategories}
            getOptionLabel={(option) => `${option.label}`}
            renderInput={(params) => <TextField {...params} label="Buscar" />}
          />
        </div>
        <div className="blog__container">
          <div className="card-blog">
            <a href="/es/blog/implementar-una-buena-ui">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div className="labels-container">
                <label className="labelPosts">Desarrollar una buena UI</label>
                <p className="labelPostsResume">
                  Debemos tener en cuenta cuatro cosas elementales,
                  la arquitectura del website, las herramientas a usar, la calidad de los assets y
                  la tecnología a implementar.
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/es/blog/state-management-en-angular-ngxs">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div className="labels-container">
                <label className="labelPosts">State Management en Angular: Ngxs</label>
                <p className="labelPostsResume">
                  Un manejador de estados similar al flow de redux para Angular
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/es/blog/introduccion-angular-angularmaterial-y-firebase">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div class="labels-container">
                <label class="labelPosts">Introducción: Angular, AngularMaterial y Firebase</label>
                <p class="labelPostsResume">
                  Un buen stack de herramientas para desarrollar plataformas
                </p>
              </div>
            </a>
          </div>
          <div className="card-blog">
            <a href="/es/blog/inputs-y-outputs-en-angular">
              <Image src="/img/pc2.jpg" alt="know" className="knowledge_img"
                width="800" height="600" />
              <div class="labels-container">
                <label class="labelPosts">Inputs y Outputs en Angular</label>
                <p class="labelPostsResume">
                  Pasar datos de componentes padres a hijos y de hijos a padres
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}