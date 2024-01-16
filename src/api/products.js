import {APIClient} from './axios';
import {GET_ALL_PRODUCTS, GET_PRODUCTS_BY_ID} from './endPoints';

export async function getAllProductsApi() {
  const response = await APIClient().get(GET_ALL_PRODUCTS);
  if (response?.status == 200) {
    return response?.data;
  } else {
    return response;
  }
}

export async function getProductByIdApi(id) {
  const response = await APIClient().get(GET_PRODUCTS_BY_ID(id));
  if (response?.status == 200) {
    return response?.data;
  } else {
    return response;
  }
}
