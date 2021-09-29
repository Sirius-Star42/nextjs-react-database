import styles from "../styles/MainLayout.module.css";

export default function MainLayout() {

  return (
    <div>
        <h1 style={{color:"white", fontSize: "15vh"}}>Harry Potter</h1>
        <p style={{color:"white"}}>It does not do to dwell on dreams and forget to live</p>
        <img className={styles.castle} src= "./images/Castle.png" alt="Hogwarts Castle"/>
    </div>
  )
}

