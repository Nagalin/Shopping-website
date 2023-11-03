import React from 'react'
import axios from '../../../lib/axios'
import Swal from 'sweetalert2'

export default function useDeleteProduct() {

    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
          title: 'Do you want to delete this product?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: 'No',
        });
      
        if (result.isConfirmed) {
          try {
            const response = await axios.delete(`/delete${id}`);
            console.log(response.status);
            await Swal.fire('Your product has been deleted', '', 'success');
            window.location.reload();
          } catch (err) {
            console.error(err);
          }
        }
      };
      
    return handleDelete
}
