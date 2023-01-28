import React , {useContext} from 'react';
import AppContext from '@context/AppContext';
import styles from '@styles/components/LandingSection.module.scss';
import Image from 'next/image';

const LandingSection = () => {
    const {categoryFilter ,setCategoryFilter} = useContext(AppContext);
    const handleCategory = (id) => {setCategoryFilter(id);};

    return (
        <section className={styles['landing-container']}>
            <h1>Yard Sale Store</h1>
            <Image
                className={styles['headphones']}
                alt="headphones for background"
                width={300}
                height={300}
                src={"https://i.imgur.com/MJricuM.png"}
            />
            <section className={styles['buttons-container']}>
                <button className={categoryFilter == 0 || categoryFilter =="all" ? styles["active-category"]:null} onClick={()=>handleCategory("all")}>All</button>
                <button className={categoryFilter == 1? styles["active-category"]:null} onClick={()=>handleCategory(1)}>Clothes</button>
                <button className={categoryFilter == 2? styles["active-category"]:null} onClick={()=>handleCategory(2)}>Electronics</button>
                <button className={categoryFilter == 3? styles["active-category"]:null} onClick={()=>handleCategory(3)}>Furnitures</button>
                <button className={categoryFilter == 4? styles["active-category"]:null} onClick={()=>handleCategory(4)}>Shoes</button>
                <button className={categoryFilter == 5? styles["active-category"]:null} onClick={()=>handleCategory(5)}>Others</button>
            </section>
        </section>
    );
};

export default LandingSection;
