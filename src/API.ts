/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ProcessOrderInput = {
  id: string,
  cart?: Array< CartItem | null > | null,
  total: number,
  token: string,
  address?: string | null,
};

export type CartItem = {
  id: string,
  title?: string | null,
  image?: string | null,
  price?: number | null,
  amount?: number | null,
};

export enum OrderStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}


export type CreateBookInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  image?: string | null,
  author?: string | null,
  featured?: boolean | null,
  price?: number | null,
};

export type ModelBookConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  author?: ModelStringInput | null,
  featured?: ModelBooleanInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateBookInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: string | null,
  author?: string | null,
  featured?: boolean | null,
  price?: number | null,
};

export type DeleteBookInput = {
  id?: string | null,
};

export type CreateBookOrderInput = {
  id?: string | null,
  book_id: string,
  order_id: string,
};

export type ModelBookOrderConditionInput = {
  book_id?: ModelIDInput | null,
  order_id?: ModelIDInput | null,
  and?: Array< ModelBookOrderConditionInput | null > | null,
  or?: Array< ModelBookOrderConditionInput | null > | null,
  not?: ModelBookOrderConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBookOrderInput = {
  id: string,
  book_id?: string | null,
  order_id?: string | null,
};

export type DeleteBookOrderInput = {
  id?: string | null,
};

export type CreateOrderInput = {
  id?: string | null,
  user: string,
  date?: string | null,
  total?: number | null,
};

export type ModelOrderConditionInput = {
  user?: ModelStringInput | null,
  date?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type UpdateOrderInput = {
  id: string,
  user?: string | null,
  date?: string | null,
  total?: number | null,
};

export type DeleteOrderInput = {
  id?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  date?: ModelStringInput | null,
  total?: ModelFloatInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  author?: ModelStringInput | null,
  featured?: ModelBooleanInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ProcessOrderMutationVariables = {
  input: ProcessOrderInput,
};

export type ProcessOrderMutation = {
  processOrder: OrderStatus | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook:  {
    __typename: "Book",
    id: string,
    title: string,
    description: string | null,
    image: string | null,
    author: string | null,
    featured: boolean | null,
    price: number | null,
    orders:  {
      __typename: "ModelBookOrderConnection",
      items:  Array< {
        __typename: "BookOrder",
        id: string,
        book_id: string,
        order_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook:  {
    __typename: "Book",
    id: string,
    title: string,
    description: string | null,
    image: string | null,
    author: string | null,
    featured: boolean | null,
    price: number | null,
    orders:  {
      __typename: "ModelBookOrderConnection",
      items:  Array< {
        __typename: "BookOrder",
        id: string,
        book_id: string,
        order_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook:  {
    __typename: "Book",
    id: string,
    title: string,
    description: string | null,
    image: string | null,
    author: string | null,
    featured: boolean | null,
    price: number | null,
    orders:  {
      __typename: "ModelBookOrderConnection",
      items:  Array< {
        __typename: "BookOrder",
        id: string,
        book_id: string,
        order_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBookOrderMutationVariables = {
  input: CreateBookOrderInput,
  condition?: ModelBookOrderConditionInput | null,
};

export type CreateBookOrderMutation = {
  createBookOrder:  {
    __typename: "BookOrder",
    id: string,
    book_id: string,
    order_id: string,
    order:  {
      __typename: "Order",
      id: string,
      user: string,
      date: string | null,
      total: number | null,
      books:  {
        __typename: "ModelBookOrderConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      description: string | null,
      image: string | null,
      author: string | null,
      featured: boolean | null,
      price: number | null,
      orders:  {
        __typename: "ModelBookOrderConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateBookOrderMutationVariables = {
  input: UpdateBookOrderInput,
  condition?: ModelBookOrderConditionInput | null,
};

export type UpdateBookOrderMutation = {
  updateBookOrder:  {
    __typename: "BookOrder",
    id: string,
    book_id: string,
    order_id: string,
    order:  {
      __typename: "Order",
      id: string,
      user: string,
      date: string | null,
      total: number | null,
      books:  {
        __typename: "ModelBookOrderConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      description: string | null,
      image: string | null,
      author: string | null,
      featured: boolean | null,
      price: number | null,
      orders:  {
        __typename: "ModelBookOrderConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteBookOrderMutationVariables = {
  input: DeleteBookOrderInput,
  condition?: ModelBookOrderConditionInput | null,
};

export type DeleteBookOrderMutation = {
  deleteBookOrder:  {
    __typename: "BookOrder",
    id: string,
    book_id: string,
    order_id: string,
    order:  {
      __typename: "Order",
      id: string,
      user: string,
      date: string | null,
      total: number | null,
      books:  {
        __typename: "ModelBookOrderConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    book:  {
      __typename: "Book",
      id: string,
      title: string,
      description: string | null,
      image: string | null,
      author: string | null,
      featured: boolean | null,
      price: number | null,
      orders:  {
        __typename: "ModelBookOrderConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string | null,
    total: number | null,
    books:  {
      __typename: "ModelBookOrderConnection",
      items:  Array< {
        __typename: "BookOrder",
        id: string,
        book_id: string,
        order_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string | null,
    total: number | null,
    books:  {
      __typename: "ModelBookOrderConnection",
      items:  Array< {
        __typename: "BookOrder",
        id: string,
        book_id: string,
        order_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string | null,
    total: number | null,
    books:  {
      __typename: "ModelBookOrderConnection",
      items:  Array< {
        __typename: "BookOrder",
        id: string,
        book_id: string,
        order_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder:  {
    __typename: "Order",
    id: string,
    user: string,
    date: string | null,
    total: number | null,
    books:  {
      __typename: "ModelBookOrderConnection",
      items:  Array< {
        __typename: "BookOrder",
        id: string,
        book_id: string,
        order_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      user: string,
      date: string | null,
      total: number | null,
      books:  {
        __typename: "ModelBookOrderConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      title: string,
      description: string | null,
      image: string | null,
      author: string | null,
      featured: boolean | null,
      price: number | null,
      orders:  {
        __typename: "ModelBookOrderConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook:  {
    __typename: "Book",
    id: string,
    title: string,
    description: string | null,
    image: string | null,
    author: string | null,
    featured: boolean | null,
    price: number | null,
    orders:  {
      __typename: "ModelBookOrderConnection",
      items:  Array< {
        __typename: "BookOrder",
        id: string,
        book_id: string,
        order_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
