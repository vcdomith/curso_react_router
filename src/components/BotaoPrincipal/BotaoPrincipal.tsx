import styles from './BotaoPrincipal.module.css'

interface BotaoPrincipalProps {
    children: React.ReactNode
    tamanho?: string
}

const BotaoPrincipal = ({ children, tamanho='' }: BotaoPrincipalProps) => {
  return (
    <button 
        className={`${styles.botao} ${styles[tamanho]}`}
    >
        {children}
    </button>
  )
}

export default BotaoPrincipal