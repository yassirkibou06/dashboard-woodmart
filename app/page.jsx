import AllCardsList from '@/components/allCardsHome/AllCardsList'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="for-all px-7 pt-32 pb-7">
        <div className="mb-10">
          <h2 className="font-meduim text-[28px]">Dashboard</h2>
          <p className="text-gray-400 text-sm">Welcome to your dashboard</p>
        </div>
        <AllCardsList />
        <div className="mt-10 bg-white rounded-md p-5">
          <p className="text-gray-400 font-medium text-center">Coming soon...</p>
        </div>
      </div>
    </>
  )
}
