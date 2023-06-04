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

export type service = {
    title: string,
    icon: string
}

export type services = Array<service>