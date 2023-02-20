import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectThree.module.css'

export default function UseEffectThree() {
    
    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value+10)
    }, [number])
    
    return(
        <>
            <Link className={styles.link}href="/">Home</Link>
            <div className={styles.main}>
            <div>
                <button onClick={() => setNumber(number+1)}>ClickMe</button>
            </div>
            <div>
                UseEffectThree
            </div>
            <div>
                {value}
            </div>
            </div>
           
        
        </>
    )
}