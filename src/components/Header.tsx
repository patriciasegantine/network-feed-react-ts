import styles from './styles/Header.module.css'
import igniteLogo from '../assets/Ignite-logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo"/>
      <strong> Ignite Feed </strong>
    </header>
  )
}