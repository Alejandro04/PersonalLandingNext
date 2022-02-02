import { useState, useEffect } from 'react';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import posts from '../data/postsEs.json';

export default function MainBlog() {
  const [dataFiltered, setDataFiltered] = useState()
  const [categories, setCategories] = useState()

  useEffect(() => {
    const cleanCategories = cleanCategoriesHandler()
    setCategories(cleanCategories)
    setDataFiltered(posts)
  }, []);


  const cleanCategoriesHandler = () => {
    const categoriesFormat = posts.map((x) => {
      return {
        category: x.category
      }
    })

    const catMap = categoriesFormat.map(item => {
      return [item.category, item]
    });
    const catMapArr = new Map(catMap); // Pares de clave y valor
    const cleanCategories = [...catMapArr.values()]; // Conversión a un array

    return cleanCategories
  }

  const onChangePosts = (event, values) => {
    if (values) {
      const data = posts.filter(x => x.category === values.category)
      setDataFiltered(data)
    }

    if (!values) {
      setDataFiltered(posts)
    }
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
            onChange={onChangePosts}
            getOptionLabel={(option) => `${option.category}`}
            renderInput={(params) => <TextField {...params} label="Buscar por categorias" />}
          />
        </div>
        <div className="blog-content">
          {dataFiltered && dataFiltered.map(post =>
            <div className="card-blog" key={post.id}>
              <a href={post.post_url}>
                <Image src={post.img_url} alt="know" className="blog-img"
                  width="900" height="600" />
                <div className="labels-container">
                  <label className="label-posts">{post.title}</label>
                  <p className="label-posts-resume">
                    {post.description}
                  </p>
                </div>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  )
}