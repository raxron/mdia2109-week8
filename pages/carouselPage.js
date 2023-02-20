import Carousel from "@/components/carousel"
import Link from "next/link"
import styles from "@/styles/Carousel.module.css"

export default function CarouselPage() {
    return(
        <>
            <Link href="/" className={styles.link}>Home</Link>
           <div className={styles.main}>
            <Carousel/>
           </div>
        </>
    )
}