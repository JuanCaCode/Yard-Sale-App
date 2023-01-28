import React , {useContext} from 'react';
import AppContext from '@context/AppContext';
import styles from '@styles/components/LandingSection.module.scss';
import Image from 'next/image';
import 'animate.css';

const LandingSection = () => {
    const {categoryFilter ,setCategoryFilter} = useContext(AppContext);
    const handleCategory = (id) => {setCategoryFilter(id);};

    return (
        <section className={styles['landing-container']}>
            <h1>Yard Sale Store</h1>
            <Image
                className={`animate__animated animate__wobble ${styles['headphones']}`}
                alt="headphones for background"
                width={300}
                height={300}
                src={"https://i.imgur.com/MJricuM.png"}
            />
            <section className={styles['buttons-container']}>
                <button className={`animate__animated animate__zoomInLeft animate ${categoryFilter == 0 || categoryFilter =="all" ? styles["active-category"]:null}`} onClick={()=>handleCategory("all")}>All</button>
                <button className={`animate__animated animate__zoomInLeft animate ${categoryFilter == 1? styles["active-category"]:null}`} onClick={()=>handleCategory(1)}>Clothes</button>
                <button className={`animate__animated animate__zoomInLeft animate ${categoryFilter == 2? styles["active-category"]:null}`} onClick={()=>handleCategory(2)}>Electronics</button>
                <button className={`animate__animated animate__zoomInLeft animate ${categoryFilter == 3? styles["active-category"]:null}`} onClick={()=>handleCategory(3)}>Furnitures</button>
                <button className={`animate__animated animate__zoomInLeft animate ${categoryFilter == 4? styles["active-category"]:null}`} onClick={()=>handleCategory(4)}>Shoes</button>
                <button className={`animate__animated animate__zoomInLeft animate ${categoryFilter == 5? styles["active-category"]:null}`} onClick={()=>handleCategory(5)}>Others</button>
            </section>
        </section>
    ); 
};

export default LandingSection;
