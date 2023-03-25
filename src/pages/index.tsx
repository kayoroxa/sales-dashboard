import MyButton from '@/components/MyButton'
import useApp from '@/utils/application'

export default function Home() {
  const { getRef } = useApp()
  return (
    <div>
      <h1 ref={getRef('title-1')}>Hello word</h1>
      <MyButton />
    </div>
  )
}
