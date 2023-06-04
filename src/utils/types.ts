export type navLinkType = {
    id: string,
    title: string
}

export type navLinksType = Array<navLinkType>

export type computersProps = {
    isMobile: boolean
}

export type serviceCardProps = {
    index: number,
    title: string,
    icon: string
}

export type serviceType = {
    title: string,
    icon: string
}

export type servicesType = Array<serviceType>

export type experienceType = {
    title: string,
    company_name: string,
    icon: string,
    iconBg: string,
    date: string,
    points: Array<string>
}

export type experiencesType = Array<experienceType>

export type experienceCardProps = {experience: experienceType}

export type technologyType = {
    name: string,
    icon: string
}

export type technologiesType = Array<technologyType>

export type ballCanvarProps = {
    icon: string
}

export type ballProps = {
    imgUrl: string
}