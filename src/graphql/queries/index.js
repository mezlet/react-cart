const queries =  {
    FETCH_PRODUCTS:(country) => `
    {
        products {
          id
          title
          image_url
          price(currency: ${country})
        }
        currency
      }`
}

export default queries;
