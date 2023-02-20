import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/useEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    }
    )
    return (
        <>
            <Link className={styles.link} href="/">Home</Link>
            <div className={styles.main}>
                <div>
                    useEffectOne
                </div>
                <div>
                    {number}
                </div>
            </div>

        </>
    )
}