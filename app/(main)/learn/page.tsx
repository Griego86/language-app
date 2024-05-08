import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import React from 'react'
import { Header } from './header'

const LearnPage = () => {
  return (
    <div className='flex gap-[48px] px-6'>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
      <StickyWrapper>
        My sticky sidebar
      </StickyWrapper>
    </div>
  )
}

export default LearnPage