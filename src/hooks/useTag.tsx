import { useState, useEffect } from 'react'

export default function useTag(login:any) {
    const [cert, setCert] = useState<any>();
    const [skill, setSkill] = useState<any>();


    const handleCertChange = (e:React.KeyboardEvent<HTMLInputElement>)  => {
        let { value } = e.target as HTMLInputElement;
          if (!cert.includes(value) && value.trim()) {
            if (e.key === "Enter" && value) {
                setCert([...cert, value]);
                (e.target as HTMLInputElement).value = "";
            }
        } 
    }

    const handleSkillChange = (e:React.KeyboardEvent<HTMLInputElement>)  => {
        let { value } = e.target as HTMLInputElement;
          if (!skill.includes(value) && value.trim()) {
            if (e.key === "Enter" && value) {
                setSkill([...skill, value]);
                (e.target as HTMLInputElement).value = "";
            }
        } 
    }

    const handleDeleteCert = (item:string) => {
        setCert(cert.filter((tag:string) => tag !== item))
    }

    const handleDeleteSkill = (item:string) => {
        setSkill(skill.filter((tag:string) => tag !== item))
    }

    useEffect(() => {
        if(login?.certification) {
            setCert(login.certification)
        }
        if(login?.skill) {
            setSkill(login.skill)
        }
    }, [login])


    return [ cert, skill, handleCertChange, handleSkillChange, handleDeleteCert, handleDeleteSkill ]

}