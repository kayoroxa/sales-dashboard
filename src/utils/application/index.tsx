import useRefStore from '@/store/useRefStore'
import GetRef from './getRef'

export default function useApp() {
  const refs = useRefStore(state => state.refs)

  const action = {
    changeStyle: (nameId: string, newStyle: CSSStyleDeclaration) => {
      const ref = refs.find(([nameRef]) => nameRef === nameId)?.[1]
      if (ref?.current?.style) {
        // for (const prop in newStyle) {
        //   if (ref.current?.style[prop]) {
        //     ref.current?.style[prop] = newStyle[prop]
        //   }
        // }
      }
    },
    changeClass: (nameId: string, newClass: string) => {
      const ref = refs.find(([nameRef]) => nameRef === nameId)?.[1]
      if (ref?.current) {
        ref.current.className += newClass
      }
    },
    hideElement: () => {},
  }

  return {
    action,
    ref: refs,
    getRef: GetRef,
  }
}
