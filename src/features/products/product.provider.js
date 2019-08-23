import React, { useReducer, useMemo } from 'react'
import { fetcher } from '../../network/fetcher'

const ProductContext = React.createContext()

const initialState = {
  error: null,
  products: null,
  loading: false,
}

/*

success type action:

Must have props:
type,
payload,

*/

const reducer = (state, action) => {
  switch (action.type) {
    case 'error': {
      return {
        ...state,
        loading: false,
      }
    }

    case 'fetching': {
      return {
        ...state,
        loading: true,
      }
    }

    case 'success': {
      return {
        ...state,
        products: action.payload,
        error: null,
        loading: false,
      }
    }

    default:
      return initialState
  }
}

function ProductsProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async () => {
    dispatch({ type: 'fetching' })

    try {
      const { data } = await fetcher({ method: 'get', url: '/start' })

      console.log({ data })
      dispatch({ type: 'success', payload: data })
    } catch (error) {
      dispatch({ type: 'error', payload: error })
      console.log('fetchproducts error', error)
    }
  }

  const searchQuery = async query => {
    dispatch({ type: 'fetching' })

    try {
      const { data } = await fetcher({
        url: '/search',
        method: 'get',
        params: {
          ...query,
        },
      })

      console.log({ data })
      dispatch({ type: 'success', payload: data })
    } catch (error) {
      dispatch({ type: 'error', payload: error })
      console.log('searchQuery error', error)
    }
  }

  const value = useMemo(
    () => ({
      ...state,
      searchQuery,
      fetchProducts,
    }),
    [state]
  )

  return <ProductContext.Provider value={value} {...props} />
}

function useProductsService() {
  const context = React.useContext(ProductContext)

  if (!context) {
    throw new Error('useProductsService must be used within an ProductContext')
  }

  return context
}

export { ProductsProvider, useProductsService }
