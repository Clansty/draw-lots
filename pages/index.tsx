import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import splitLines from '../utils/splitLines'
import getRandomIntInclusive from '../utils/getRandomIntInclusive'
import {SettingOutlined} from '@ant-design/icons'
import {useRouter} from 'next/router'
import Link from 'next/link'

const Home: NextPage = () => {
    const [guy, setGuy] = useState('')
    const router = useRouter()

    let nameList = ['']
    if (typeof window !== 'undefined') {
        const names = localStorage.getItem('names')
        names ? (nameList = splitLines(names)) : router.replace('/setup')
    }

    return (
        <div className={styles.container}>
            <div className={styles.setup} title="配置名单">
                <Link href="/setup"><a>
                    <SettingOutlined style={{marginRight: '5px'}}/>
                    名单中共有 {nameList.length} 人
                </a></Link>
            </div>
            <div className={styles.mainBox}>
                {guy}
            </div>
            <div className={styles.buttonContainer}>
                <a className={styles.button} onClick={draw}>
                    抽签
                </a>
            </div>
        </div>
    )

    function draw() {
        setGuy(nameList[getRandomIntInclusive(0, nameList.length - 1)])
    }
}

export default Home
