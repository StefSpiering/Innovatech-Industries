import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Spinner, Text, useToast, TableContainer, TableCaption, Checkbox, Button } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient'; // Asegúrate de que esta ruta es correcta

const OrderDetailsTable = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatedOrders, setUpdatedOrders] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('orderdetails')
          .select('order_id, product_id, quantity, unit_price, is_completed');

        if (error) throw error;

        setOrderDetails(data);
      } catch (error) {
        setError(error.message);
        toast({
          title: 'Error fetching order details.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [toast]);

  const handleCheckboxChange = (orderId, productId, checked) => {
    setOrderDetails(prevOrderDetails =>
      prevOrderDetails.map(detail =>
        detail.order_id === orderId && detail.product_id === productId
          ? { ...detail, is_completed: checked }
          : detail
      )
    );

    setUpdatedOrders(prevUpdatedOrders => {
      const existingOrder = prevUpdatedOrders.find(
        order => order.order_id === orderId && order.product_id === productId
      );
      if (existingOrder) {
        return prevUpdatedOrders.map(order =>
          order.order_id === orderId && order.product_id === productId
            ? { ...order, is_completed: checked }
            : order
        );
      } else {
        return [...prevUpdatedOrders, { order_id: orderId, product_id: productId, is_completed: checked }];
      }
    });
  };

  const handleSaveChanges = async () => {
    try {
      // Filter out entries with undefined values
      const filteredOrders = updatedOrders.filter(order => order.order_id !== undefined && order.product_id !== undefined);

      // Update existing records
      const updatePromises = filteredOrders.map(order =>
        supabase
          .from('orderdetails')
          .update({ is_completed: order.is_completed })
          .match({ order_id: order.order_id, product_id: order.product_id })
      );
      const updateResults = await Promise.all(updatePromises);

      // Handle any errors in update results
      for (const result of updateResults) {
        if (result.error) throw result.error;
      }

      toast({
        title: 'Changes saved.',
        description: 'Order details have been updated successfully.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error saving changes.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Gestionar ordenes de compra </TableCaption>
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Product ID</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Unit Price</Th>
              <Th>Completed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderDetails.map((detail) => (
              <Tr key={detail.order_id + detail.product_id}>
                <Td>{detail.order_id}</Td>
                <Td>{detail.product_id}</Td>
                <Td isNumeric>{detail.quantity}</Td>
                <Td isNumeric>{detail.unit_price}</Td>
                <Td>
                  <Checkbox
                    isChecked={detail.is_completed || false}
                    onChange={(e) => handleCheckboxChange(detail.order_id, detail.product_id, e.target.checked)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box mt={4}>
        <Button colorScheme="green" onClick={handleSaveChanges}>
          Marcar como completadas
        </Button>
      </Box>
    </Box>
  );
};

export default OrderDetailsTable;

