
export const CATEGORY_PRODUCTS_QUERY = `
  *[_type == "product" && category->name == $category] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
  }
`;

export const NEWEST_PRODUCTS_QUERY = `
*[_type == "product"][0...9] | order(_createdAt asc){
  _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
}`

export const SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }`;