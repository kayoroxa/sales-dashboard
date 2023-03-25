import useApp from '@/utils/application'

export default function MyButton() {
  const { action } = useApp()
  return (
    <button
      className="bg-blue-300 p-5"
      onClick={() => action.changeClass('title-1', 'bg-red-400')}
    >
      hi
    </button>
  )
}
