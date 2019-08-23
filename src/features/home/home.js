import React, { useEffect } from 'react'
import { useProductsService } from '../products'
import { Box, Text, Img } from '../../components/elements'

const Home = () => {
  const { loading, products, fetchProducts } = useProductsService()

  useEffect(() => {
    console.log('fetching')
    fetchProducts()
  }, [])

  if (loading) {
    return <div>loading</div>
  }

  if (products) {
    return (
      <Box flexWrap="wrap" justifyContent="center" mt={10}>
        {products.map((product, idx) => {
          return (
            <Box
              border={2}
              flexDirection="column"
              key={idx}
              mb={5}
              mx={4}
              padding={2}
              width="300px"
            >
              <Box flexDirection="column">
                <Text color="gray.900" fontSize={3} fontWeight={2}>
                  {product.name}
                </Text>
                <Text py={2} textStyle="capitalized">
                  {product.productType}
                </Text>
              </Box>
              <Img alt={product.name} src={product.images.thumb_src} />
              <Box>grams: {product.grams}</Box>
              <Box>price: {product.price}</Box>
              <Box>price: {product.salePrice}</Box>
            </Box>
          )
        })}
      </Box>
    )
  }

  return <div>booo</div>
}
export { Home }
