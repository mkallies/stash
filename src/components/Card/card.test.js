import React from 'react'
import { render } from 'react-testing-library'
import { Card } from './Card'

const commonProps = {
  product: {
    price: 12,
    salePrice: 10,
    productType: 'sativa',
    images: {
      thumb_src: 'blah',
    },
    name: 'Test flower',
    grams: 1,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cumque, distinctio quisquam nihil, reprehenderit velit optio, esse ab porro nesciunt dolore? Iste laboriosam sint ad recusandae velit amet. Natus, consectetur!',
  },
}

describe('Card test', () => {
  it('should render', () => {
    const { container } = render(<Card {...commonProps} />)
    expect(container).toBeInTheDocument()
  })
})
