import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '' }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true
        let current = 0
        const step = Math.ceil(target / 60)
        const id = setInterval(() => {
          current = Math.min(current + step, target)
          setValue(current)
          if (current >= target) clearInterval(id)
        }, 25)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{value}{suffix}</span>
}

export default Counter
