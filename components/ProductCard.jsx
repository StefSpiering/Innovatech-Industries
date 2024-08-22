import { Box, SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const ProdList = ({ products }) => (
  <Box>
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  </Box>
);

export default ProdList;
